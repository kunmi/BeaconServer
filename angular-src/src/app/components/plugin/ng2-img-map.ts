import {
  Component, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild
} from '@angular/core';

const POLY_NODE_FILL = 'rgba(202, 202, 202, 0.6)';
const POLY_NORMAL_FILL = 'rgba(170, 172, 225, 0.6)';
const POLY_HOVER_FILL = 'rgba(0, 0, 255, 0.4)';
const POLY_ACTIVE_FILL = 'rgba(255, 0, 0, 0.6)';
const POLY_NODE_SIZE = 4;
const POLY_LINE_WIDTH = 5;




@Component({
  selector: 'img-map',
  styles: [
    '.img-map { position: relative; }',
    '.img-map canvas, .img-map img { position: absolute; top: 0; left: 0; }',
    '.img-map img { display: block; height: auto; max-width: 100%; }',
    '*.unselectable { -moz-user-select: -moz-none; -khtml-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none;}'

  ],
  template: `
    <div
      class="img-map"
      #container
      (window:resize)="onResize($event)"
    >
      <img
        class="unselectable"
        #image
        [src]="src"
        (load)="onLoad($event)"
      >
      <canvas
        #canvas
        (click)="onClick($event)"
        (dblclick)="onDblClick($event)"
        (mousemove)="onMousemove($event)"
        (mouseout)="onMouseout($event)"
        (mousedown)="onMouseDown($event)"
        (mouseup)="onMouseUp($event)" 
      ></canvas>
    </div>
  `
})
export class ImgMapComponent {

  /**
   * Canvas element.
   */
  @ViewChild('canvas')
  private canvas: ElementRef;

  /**
   * Container element.
   */
  @ViewChild('container')
  private container: ElementRef;

  /**
   * Image element.
   */
  @ViewChild('image')
  private image: ElementRef;

  @Input('markers')
  set setMarkers(markers: Marker[]) {
    this.markerActive = null;
    this.markerHover = null;
    this.markers = markers;
    this.draw();
  }


  /**
   * Image source URL.
   */
  @Input()
  src: string;

  @Input('imageSmoothing')
  imageSmoothingEnabled: boolean = false;


  /**
   *  Quality of drawn image - low|medium|high. Dependent on if ImageSmoothing is enabled
   * @type {string}
   */
  @Input('smoothingQuality')
  imageSmoothingQuality:string = "medium";

  @Input('canDrag')
  draggable:boolean = false;

  @Input('activeMarkerSize')
  ACTIVE_MARKER_SIZE = 25;


  @Input('polygons')
  set setPolygons(polygons: Polygon[]) {
    this.polygonActive = -1;
    this.polygonHover = -1;
    this.polygons = polygons;
    this.draw();
  }


  @Input('polygonEnabled')
  private polygonEnabled:boolean = false;

  @Input('showPolyNodes')
  private showPolyNodes:boolean = false;

  private polygons: Polygon[] = [];
  private polygonDraggedIndex = -1;
  private polygonActive = -1;
  private polygonHover = -1;

  private isDrawingPlygon: Polygon = null;
  polygonDragThreshold = 2;


  //Needed for noting polygon drag direction
  lastX: number = null;
  lastY: number = null;


  /**
   * On Marker change event.
   */
  @Output('change')
  private changeEvent = new EventEmitter<number>();


  /**
   * On mark event.
   */
  @Output('mark')
  private markEvent = new EventEmitter<Marker>();

  /**
   *
   * Post Render to Enable Access to Component Context
   *
   *
   */
  @Output ('viewDidAppear')
  private afterinitEvent = new EventEmitter<ImgMapComponent>();

  @Output ('onMarkerClicked')
  private markerClickedEvent = new EventEmitter<number>();
  @Output ('onMarkerDoubleClicked')
  private markerDblClickedEvent = new EventEmitter<number>();


  /**
   * On Marker change event.
   */
  @Output('onPolyChange')
  private polyChangeEvent = new EventEmitter<number>();
  @Output ('onPolygonClicked')
  private polygonClickedEvent = new EventEmitter<number>();
  @Output ('onPolygonDoubleClicked')
  private polygonDblClickedEvent = new EventEmitter<number>();


  /**
   * Collection of markers.
   */
  private markers: Marker[] = [];

  /**
   * Index of the hover state marker.
   */
  private markerHover: number = null;

  draggedIndex: number = -1;
  draggedPosition = null;


  /***
   * CONSTANTS
   */



  /**
   * Index of the active state marker.
   */
  private markerActive: number;

  constructor(private renderer: Renderer) {}

  private change(markerIndex): void {
    this.changeEvent.emit(markerIndex);
    this.draw();
  }

  /**
   * Get the cursor position relative to the canvas.
   */
  private cursor(event: MouseEvent): number[] {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    return [
      event.clientX - rect.left,
      event.clientY - rect.top
    ];
  }



  /**
   * Check if a position is inside a marker.
   */
  private insideMarker(marker: Marker, coordinate: number[]): boolean {

    let pixel = marker.getCoordsAsPixel(this.image);

    if(marker.type == MarkerType.Shape)
    {
     if (marker.base == ShapeType.Circle) {

       return Math.sqrt(
         (coordinate[0] - pixel[0]) * (coordinate[0] - pixel[0])
         + (coordinate[1] - pixel[1]) * (coordinate[1] - pixel[1])
       ) < marker.size;
     }
     else
     {
       return (coordinate[0]>=pixel[0] && coordinate[0]<=((pixel[0])+marker.size))
                &&
         (coordinate[1]>=pixel[1] && coordinate[1]<=((pixel[1])+marker.size));
     }
    }

    else if(marker.type == MarkerType.Composite) {
      let inside = false;

      if(marker.base == ShapeType.Circle)
      {
        inside = Math.sqrt(
          (coordinate[0] - pixel[0]) * (coordinate[0] - pixel[0])
          + (coordinate[1] - pixel[1]) * (coordinate[1] - pixel[1])
        ) < marker.size;

        if(inside)
          return inside;
      }

      if(marker.base == ShapeType.Square)
      {
        inside = (coordinate[0]>=pixel[0] && coordinate[0]<=((pixel[0])+marker.size))
          &&
          (coordinate[1]>=pixel[1] && coordinate[1]<=((pixel[1])+marker.size));

        if(inside)
          return inside;
      }

      if(!inside)
      {
        inside = (coordinate[0]>=pixel[0] && coordinate[0]<=((pixel[0])+marker.imageWidth))
          &&
          (coordinate[1]>=pixel[1] && coordinate[1]<=((pixel[1])+marker.imageHeight));
      }

      return inside;

    }

  }


  addMarker(m:Marker)
  {
    this.markers.push(m);
    this.markerActive = this.markers.length-1;

    if (this.changeEvent.observers.length>0) {
      this.change(this.markerActive)
    }
    else {
      this.draw();
    }
  }

  createMarker(coords: number[], shape?:ShapeType): Marker{
   let dimension = this.pixelToMarker(coords);
   return new Marker(dimension[0], dimension[1], shape);
   }

  /**
   * Convert a pixel position to a percentage position.
   **/
  private pixelToMarker(pixel: number[]): number[] {
    const image: HTMLImageElement = this.image.nativeElement;
    return [
      (pixel[0] / image.clientWidth) * 100,
      (pixel[1] / image.clientHeight) * 100
    ];
  }

  /**
   * Sets the new marker position.

   **/

  private mark(pixel: number[]): void {
    this.markerActive = this.markers.length;

    this.markers.push(this.createMarker(pixel));
    this.draw();
    this.markEvent.emit(this.markers[this.markerActive]);
  }


  /**
   * Sets the marker pixel positions.

   */

  /**
   * Clears the canvas and draws the markers.
   */

  draw(): void {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    const container: HTMLDivElement = this.container.nativeElement;
    const image: HTMLImageElement = this.image.nativeElement;
    const height = image.clientHeight;
    const width = image.clientWidth;
    this.renderer.setElementAttribute(canvas, 'height', `${height}`);
    this.renderer.setElementAttribute(canvas, 'width', `${width}`);
    this.renderer.setElementStyle(container, 'height', `${height}px`);
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);


    for(let index= 0; index< this.markers.length; index++)
    {

      if(index == this.draggedIndex)
        continue;

        if (this.markerActive === index) {
          this.drawMarker(this.markers[index], 'active');
        } else if (this.markerHover === index) {
          this.drawMarker(this.markers[index], 'hover');
        } else {
          this.drawMarker(this.markers[index]);
        }
    }

    if(this.draggable)
    {
      if(this.draggedIndex>=0)
      {
        let marker: Marker = this.markers[this.draggedIndex];
        this.drawMarker(marker);
      }
    }


    if(this.polygonEnabled)
    {
      if(this.isDrawingPlygon!= null)
        this.drawPath(this.isDrawingPlygon);

      this.drawPolygons();
    }

  }

  /**
   * Draw a marker.
   */
  private drawMarker(marker: Marker, type?: string): void {
    const context = this.canvas.nativeElement.getContext('2d');
    context.beginPath();
    let pixel:number[] =  marker.getCoordsAsPixel(this.image);

    let size = type == 'active'? this.ACTIVE_MARKER_SIZE: marker.size;

    switch (marker.base)
    {
      case ShapeType.Circle:
        context.arc(pixel[0], pixel[1], size, 0, 2 * Math.PI);
        break;

      case ShapeType.Square:
        context.rect(pixel[0], pixel[1], size, marker.size);
        break;
    }
    switch (type) {
      case 'active':
        context.fillStyle = 'rgba(255, 0, 0, 0.6)';
        break;
      case 'hover':
        context.fillStyle = 'rgba(0, 0, 255, 0.6)';
        break;
      default:
        context.fillStyle = 'rgba(0, 0, 255, 0.4)';
    }
    context.fill();

    if(marker.type == MarkerType.Composite){
      context.beginPath();

      if(marker.type != null)
      {
        switch (marker.base)
        {
          case ShapeType.Square:

            pixel[0] = (pixel[0] + marker.size/2) - marker.imageWidth/2;
            pixel[1] = (pixel[1] + marker.size/2) - marker.imageHeight/2;
            break;

          case ShapeType.Circle:
            pixel[0] = (pixel[0] - marker.imageWidth/2);
            pixel[1] = (pixel[1] - marker.imageHeight/2);
            break;
        }


      }
      if(this.imageSmoothingEnabled)
      {
        context.mozImageSmoothingEnabled = true;
        context.imageSmoothingQuality = this.imageSmoothingQuality;
        context.webkitImageSmoothingEnabled = true;
        context.msImageSmoothingEnabled = true;
        context.imageSmoothingEnabled = true;
      }

      context.drawImage(marker.image, pixel[0], pixel[1], marker.imageWidth, marker.imageHeight);
    }

  }


  private drawPath(polygon: Polygon): void {

    const context = this.canvas.nativeElement.getContext('2d');
    context.beginPath();

    const vertices = polygon.getVertices();

    let startPoint = this.getCoordsAsPixel(vertices[0]);
    context.moveTo(startPoint[0],startPoint[1]);

    context.strokeWidth = POLY_LINE_WIDTH;
    context.strokeStyle = POLY_NODE_FILL;

    for (let i=1; i< vertices.length; i++)
    {
      let presentPoint = this.getCoordsAsPixel(vertices[i]);
      context.lineTo(presentPoint[0], presentPoint[1]);
    }

    if(this.lastX!=null && this.lastY!=null)
    {
      context.lineTo(this.lastX, this.lastY);
    }

    context.stroke();

    //node points
    if(this.showPolyNodes)
    {
      context.beginPath();
      context.fillStyle = POLY_NODE_FILL;
      context.moveTo(startPoint[0],startPoint[1]);
      context.arc(startPoint[0], startPoint[1], POLY_NODE_SIZE, 0, Math.PI * 2, true);

      for (let i=1; i< vertices.length; i++)
      {
        let presentPoint = this.getCoordsAsPixel(vertices[i]);
        context.moveTo(presentPoint[0], presentPoint[1]);
        context.arc(presentPoint[0], presentPoint[1], POLY_NODE_SIZE, 0, Math.PI * 2, true);
      }
      context.fill();

    }



  }

  private drawPolygons(): void {

    const context = this.canvas.nativeElement.getContext('2d');

    this.polygons.forEach((polygon,index)=>{

      context.beginPath();

      if(index == this.polygonActive)
        context.fillStyle = POLY_ACTIVE_FILL;
      else if(index == this.polygonHover)
        context.fillStyle = POLY_HOVER_FILL;
      else
        context.fillStyle = POLY_NORMAL_FILL;


      const vertices = polygon.getVertices();


      let startPoint = this.getCoordsAsPixel(vertices[0]);

      context.moveTo(startPoint[0],startPoint[1]);

      for (let i=1; i< vertices.length; i++)
      {
        let presentPoint =
          this.getCoordsAsPixel(vertices[i]);
        context.lineTo(presentPoint[0], presentPoint[1]);
      }

      context.lineTo(startPoint[0], startPoint[1]);

      context.stroke();
      context.fill()

    });

    //node points
    if(this.showPolyNodes) {

      context.beginPath();
      context.fillStyle = POLY_NODE_FILL;
      this.polygons.forEach((polygon, index) => {


        const vertices = polygon.getVertices();

        let startPoint = this.getCoordsAsPixel(vertices[0]);
        context.moveTo(startPoint[0], startPoint[1]);
        context.arc(startPoint[0], startPoint[1], POLY_NODE_SIZE, 0, Math.PI * 2, true);

        for (let i = 1; i < vertices.length; i++) {

          let presentPoint = this.getCoordsAsPixel(vertices[i]);
          context.moveTo(presentPoint[0], presentPoint[1]);
          context.arc(presentPoint[0], presentPoint[1], POLY_NODE_SIZE, 0, Math.PI * 2, true);
        }

      });

      context.fill();
    }




  }


  private onClick(event: MouseEvent): void {

    const cursor = this.cursor(event);
    var active = false;
    var draw = false;
    var markerClicked = false;

      this.markers.forEach((marker, index) => {
        if (this.insideMarker(marker, cursor)) {
          markerClicked = true;
          active = true;
          if (this.markerActive === null || this.markerActive !== index) {
            this.markerActive = index;
            draw = true;
          }
          if(this.markerClickedEvent.observers.length)
            this.markerClickedEvent.emit(this.markerActive);
        }
      });
      if (!active && this.markerActive !== null) {
        this.markerActive = null;
        draw = true;
      }



    if (!active && this.markEvent.observers.length) {
      this.mark(cursor);
    }

    if(!markerClicked)
    {
      if(this.polygonEnabled)
      {
        if(this.isDrawingPlygon!=null)
          this.addToPolygon(cursor);
      }

      const coords =  this.pixelToMarker(cursor);
      let activePoly = false;

      this.polygons.forEach((polygon, index)=>{
        if(polygon.isPointInPolygon(coords))
        {
          draw = true;
          activePoly = true;
          this.polygonActive = index;


          if(this.polygonClickedEvent.observers.length)
          {
            this.polygonClickedEvent.emit(index);
          }


          this.polygonHover = -1;
        }
      });

      if(!activePoly)
      {
        if(this.polygonActive>=0)
          draw = true;

        this.polygonActive = -1;

      }

    }



    if(draw)
    {
      this.draw();
    }


  }

  private onDblClick(event: MouseEvent): void{
    const cursor = this.cursor(event);
    var change = false;

    var markerCLicked = false;

    this.markers.forEach((marker, index) => {
      if (this.insideMarker(marker, cursor)) {

        markerCLicked = true;

         if (this.markerActive === null || this.markerActive !== index) {
          this.markerActive = index;
          change = true;
        }
        if(this.markerDblClickedEvent.observers.length)
          this.markerDblClickedEvent.emit(this.markerActive);

      }
    });

    if(change)
    {
      this.draw();
    }

    if(markerCLicked)
    {
      return;
    }


    if(this.polygonEnabled)
    {

      let coords = this.pixelToMarker(cursor);
      let polygonClicked = false;
      this.polygons.forEach((polygon, index)=>{
          if(polygon.isPointInPolygon(coords))
          {
            polygonClicked = true;
            if(this.polygonDblClickedEvent.observers.length)
            {
              this.polygonDblClickedEvent.emit(index);
            }
          }

      });


      if(this.polygonDraggedIndex<0 && !polygonClicked)
      {
        if(this.isDrawingPlygon == null)
        {
          //Get last click position so you can provide visual guideline to polygon drawing to user
          this.lastX = cursor[0];
          this.lastY = cursor[1];

          this.addToPolygon(cursor);


        }
        else
        {
          this.addToPolygon(cursor);

          if(this.isDrawingPlygon.getVertices().length>2)
          {
            this.polygons.push(this.isDrawingPlygon);
            this.isDrawingPlygon = null;

            if(this.polyChangeEvent.observers.length)
            {
              this.polyChangeEvent.emit(this.polygons.length-1);
            }

            this.draw();

          }

        }

      }


    }


  }




  private onLoad(event: UIEvent): void {
    this.draw();
    this.afterinitEvent.emit(this);
  }

  private  onMousemove(event: MouseEvent): void {
      const cursor = this.cursor(event);

      var hover = false;
      var draw = false;

      this.markers.forEach((marker, index) => {
        if (this.insideMarker(marker, cursor)) {
          hover = true;
          if (this.markerHover === null || this.markerHover !== index) {
            this.markerHover = index;
            draw = true;
          }
        }
      });
      if (!hover && this.markerHover !== null) {
        this.markerHover = null;
        draw = true;
      }

      let coords = this.pixelToMarker(cursor);



    if(this.draggable)
      {

        if(this.draggedIndex >= 0) {
          draw = true;
          //this.draggedPosition = cursor;

          this.markers[this.draggedIndex].x =coords[0];
          this.markers[this.draggedIndex].y = coords[1];

         // this.draw();

        }
        else
        {
          if(this.polygonEnabled)
          {
            if(this.polygonDraggedIndex >=0 )
            {


             if(Math.abs(this.lastX-cursor[0])<this.polygonDragThreshold && Math.abs(this.lastY - cursor[1]))
              {
                return;
              }


              let oldCoords = this.pixelToMarker([this.lastX, this.lastY]);

              let diff = this.pixelToMarker([(coords[0] - oldCoords[0]), (coords[1] - oldCoords[1])]);

              draw = true;


             let vertices = this.polygons[this.polygonDraggedIndex].getVertices();
             for(let i=0; i<vertices.length; i++)
              {
                vertices[i] = this.getCoordsAsPixel(vertices[i]);

                vertices[i][0]  += (cursor[0] - this.lastX);
                vertices[i][1] += (cursor[1] - this.lastY);

                vertices[i] = this.pixelToMarker(vertices[i]);
              }

              this.polygons[this.polygonDraggedIndex].setVertices(vertices);

            }
          }


        }
      }

      //Polygon Hover
      let polyHover = false;
      this.polygons.forEach((polygon, index)=>{

        if(polygon.isPointInPolygon(coords)){
          polyHover = true;

          if(this.polygonHover<0 || this.polygonHover != index)
            draw = true;

          this.polygonHover = index;
        }

      });

      if(!polyHover)
      {
        if(!polyHover && this.polygonHover>=0)
          draw = true;

        this.polygonHover = -1;
      }


      //Poly Path -- next vertex
      if(this.isDrawingPlygon!=null && this.lastX != cursor[0] && this.lastY != cursor[1]){
        draw = true;
      }

    if(this.polygonEnabled)
    {
      if(this.polygonDraggedIndex>=0 || this.isDrawingPlygon!=null)
      {
        this.lastX = cursor[0];
        this.lastY = cursor[1];
      }
    }

    if (draw) this.draw();

  }

  private onMouseout(event: MouseEvent): void {
    if (this.markerHover) {
      this.markerHover = null;
      this.draw();
    }
  }

  private onResize(event: UIEvent): void {
    this.draw();
  }


  onMouseDown(event: MouseEvent) : void {
    const cursor = this.cursor(event);

    if(this.draggable)
    {
        this.markers.forEach((marker, index) => {
          if (this.insideMarker(marker, cursor)) {
            if (this.draggedIndex <0) {
              this.markerActive = null;
              this.draggedIndex = index;
            }
          }
        });



      if(this.draggedIndex<0)
      {
        let coords = this.pixelToMarker(cursor);


        if(this.polygonEnabled)
        {
          this.polygons.forEach((polygon, index)=>{
            if(polygon.isPointInPolygon(coords))
            {
              this.lastX = cursor[0];
              this.lastY = cursor[1];
              this.polygonDraggedIndex = index;
              this.polygonActive = index;
              return;
            }
          });
        }

      }



    }
  }

  onMouseUp(event: MouseEvent): void {

    let change = false;
    if(this.draggable)
    {

      if(this.draggedIndex >= 0)
      {
        change = true;

        if (this.changeEvent.observers.length>0) {
          this.change(this.draggedIndex)
        }
        this.draggedIndex = -1;
    }


    if(this.polygonDraggedIndex >= 0)
    {
      change = true;

      if(this.polyChangeEvent.observers.length)
      {
        this.polyChangeEvent.emit(this.polygonDraggedIndex);
      }

      this.polygonActive = this.polygonDraggedIndex;
      this.polygonDraggedIndex = -1;

    }

    if(change)
    {
      this.draw;
    }

    }
  }


  private addToPolygon(cursor)
  {

    let change = false;
    const coords = this.pixelToMarker(cursor);

    if(this.isDrawingPlygon == null)
    {
      change = true;
      this.isDrawingPlygon = new Polygon(coords[0], coords[1]);
    }
    else
    {
      //To handle browsers that fire both click and double click
      let vertex = this.isDrawingPlygon.getLastVertixCoordinate();
      if(vertex[0] != coords[0] && vertex[1] != coords[1]) {
        this.isDrawingPlygon.addPoint(coords[0], coords[1]);
        change = true;
      }
    }

    if(change)
    {
      this.draw();
    }

  }


  private getCoordsAsPixel(coordinates) {
    const image: HTMLImageElement = this.image.nativeElement;
    const x = (image.clientWidth / 100) * coordinates[0];
    const y = (image.clientHeight / 100) * coordinates[1];
    return [
      x,y
    ];
  }

  private getCoordsAsPixelAndModValue(coordinates, diff) {
    const image: HTMLImageElement = this.image.nativeElement;
    const x = (image.clientWidth / 100) * coordinates[0];
    const y = (image.clientHeight / 100) * coordinates[1];
    return [
      x - diff[0],y - diff[1]
    ];
  }

}

export enum MarkerType {Shape, Composite}
export enum ShapeType {Circle, Square, None}

export class Marker
{
  x : number;
  y: number;


  type: MarkerType = MarkerType.Shape;
  base: ShapeType = ShapeType.Circle;
  size = 10;


  image = "";
  imageWidth: number = 0;
  imageHeight: number = 0;

  data: any = {};

  constructor(x, y, shape?:ShapeType)
  {
    this.x = x;
    this.y = y;
    if(shape)
    {
      this.base = shape;
    }
  }

  setsize (size: number){
    this.size = size;
  }


    /**
     * Convert a percentage position to a pixel position.
     */
    getCoordsAsPixel(img: ElementRef) {
        const image: HTMLImageElement = img.nativeElement;
        return [
            (image.clientWidth / 100) * this.x,
            (image.clientHeight / 100) * this.y,
        ];
    }

    setData(data:any):Marker{
      this.data = data;
      return this;
    }


  setAsComposite(image: string, base : ShapeType, width: number, height: number){
    this.image = image;
    this.type = MarkerType.Composite;
    this.base = base;

    this.imageWidth = width;
    this.imageHeight = height;
  }


}


export class Polygon {

  data : any = {};
  private coordinates = [];
  //Reference Kept to ease up stress on draw
  minX: number = null;
  minY: number = null;
  maxX: number = null;
  maxY: number = null;

  constructor(x?, y?)
  {
   this.coordinates.push([x,y]);
  }

  addPoint(x,y){
    this.coordinates.push([x,y]);
  }

  getVertices(){
    return this.coordinates;
  }

  getLastVertixCoordinate(){
    return this.coordinates[this.coordinates.length-1];
  }

  isPointInPolygon(point) {
    let isInside = false;

    if(this.minX == null || this.minY == null)
    {

      let minX = (this.coordinates[0])[0];
      let maxX = (this.coordinates[0])[0];

      let minY = (this.coordinates[0])[1];
      let maxY = (this.coordinates[0])[1];

      for (let n = 1; n < this.coordinates.length; n++) {
        let q = this.coordinates[n];
        minX = Math.min(q.x, minX);
        maxX = Math.max(q.x, maxX);
        minY = Math.min(q.y, minY);
        maxY = Math.max(q.y, maxY);
      }

      this.minX = minX;
      this.minY = minY;

      this.maxX = maxX;
      this.maxY = maxY;
    }

    if (point[0] < this.minX || point[0] > this.maxX || point[1] < this.minY || point[1] > this.maxY) {
      return false;
    }

    let i = 0, j = this.coordinates.length - 1;


    while(i< this.coordinates.length)
    {
      if ( ((this.coordinates[i])[1] > point[1]) != (this.coordinates[j][1] > point[1]) &&
        point[0] < (this.coordinates[j][0] - this.coordinates[i][0]) * (point[1] - this.coordinates[i][1]) /
        (this.coordinates[j][1] - this.coordinates[i][1]) + this.coordinates[i][0] ) {
        isInside = !isInside;

    }
      j=i++;
    }
    return isInside;
  }

  setVertices(vertices)
  {
    this.coordinates = vertices;
  }



}

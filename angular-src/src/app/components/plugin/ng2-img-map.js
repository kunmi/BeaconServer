"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ImgMapComponent = (function () {
    function ImgMapComponent(renderer) {
        this.renderer = renderer;
        /**
         * On change event.
         */
        this.changeEvent = new core_1.EventEmitter();
        /**
         * On mark event.
         */
        this.markEvent = new core_1.EventEmitter();
        /**
         *
         * Post Render to Enable Access to Component Context
         *
         *
         */
        this.afterinitEvent = new core_1.EventEmitter();
        /**
         * Collection of markers.
         */
        this.markers = [];
        /**
         * Index of the hover state marker.
         */
        this.markerHover = null;
    }
    Object.defineProperty(ImgMapComponent.prototype, "setMarkers", {
        set: function (markers) {
            this.markerActive = null;
            this.markerHover = null;
            this.markers = markers;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    ImgMapComponent.prototype.change = function () {
        if (this.markerActive === null) {
            this.changeEvent.emit(null);
        }
        else {
            this.changeEvent.emit(this.markers[this.markerActive]);
        }
        this.draw();
    };
    /**
     * Get the cursor position relative to the canvas.
     */
    ImgMapComponent.prototype.cursor = function (event) {
        var rect = this.canvas.nativeElement.getBoundingClientRect();
        return [
            event.clientX - rect.left,
            event.clientY - rect.top
        ];
    };
    /**
     * Draw a marker.
     */
    ImgMapComponent.prototype.drawMarker = function (marker, type) {
        var context = this.canvas.nativeElement.getContext('2d');
        context.beginPath();
        var pixel = marker.getCoordsAsPixel(this.image);
        context.arc(pixel[0], pixel[1], marker.size, 0, 2 * Math.PI);
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
    };
    /**
     * Check if a position is inside a marker.
     */
    ImgMapComponent.prototype.insideMarker = function (marker, coordinate) {
        var pixel = marker.getCoordsAsPixel(this.image);
        return Math.sqrt((coordinate[0] - pixel[0]) * (coordinate[0] - pixel[0])
            + (coordinate[1] - pixel[1]) * (coordinate[1] - pixel[1])) < marker.size;
    };
    ImgMapComponent.prototype.createMarker = function (coords, shape) {
        var dimension = this.pixelToMarker(coords);
        return new Marker(dimension[0], dimension[1], shape);
    };
    /**
     * Convert a pixel position to a percentage position.
     **/
    ImgMapComponent.prototype.pixelToMarker = function (pixel) {
        var image = this.image.nativeElement;
        return [
            (pixel[0] / image.clientWidth) * 100,
            (pixel[1] / image.clientHeight) * 100
        ];
    };
    /**
     * Sets the new marker position.
  
     **/
    ImgMapComponent.prototype.mark = function (pixel) {
        this.markerActive = this.markers.length;
        this.markers.push(this.createMarker(pixel));
        this.draw();
        this.markEvent.emit(this.markers[this.markerActive]);
    };
    /**
     * Sets the marker pixel positions.
  
     */
    /**
     * Clears the canvas and draws the markers.
     */
    ImgMapComponent.prototype.draw = function () {
        var _this = this;
        var canvas = this.canvas.nativeElement;
        var container = this.container.nativeElement;
        var image = this.image.nativeElement;
        var height = image.clientHeight;
        var width = image.clientWidth;
        this.renderer.setElementAttribute(canvas, 'height', "" + height);
        this.renderer.setElementAttribute(canvas, 'width', "" + width);
        this.renderer.setElementStyle(container, 'height', height + "px");
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, width, height);
        this.markers.forEach(function (marker, index) {
            if (_this.markerActive === index) {
                _this.drawMarker(marker, 'active');
            }
            else if (_this.markerHover === index) {
                _this.drawMarker(marker, 'hover');
            }
            else {
                _this.drawMarker(marker);
            }
        });
    };
    ImgMapComponent.prototype.onClick = function (event) {
        var _this = this;
        var cursor = this.cursor(event);
        var active = false;
        if (this.changeEvent.observers.length) {
            var change = false;
            this.markers.forEach(function (marker, index) {
                if (_this.insideMarker(marker, cursor)) {
                    active = true;
                    if (_this.markerActive === null || _this.markerActive !== index) {
                        _this.markerActive = index;
                        change = true;
                    }
                }
            });
            if (!active && this.markerActive !== null) {
                this.markerActive = null;
                change = true;
            }
            if (change)
                this.change();
        }
        if (!active && this.markEvent.observers.length) {
            this.mark(cursor);
        }
    };
    ImgMapComponent.prototype.onLoad = function (event) {
        this.draw();
        this.afterinitEvent.emit(this);
    };
    ImgMapComponent.prototype.onMousemove = function (event) {
        var _this = this;
        if (this.changeEvent.observers.length) {
            var cursor_1 = this.cursor(event);
            var hover = false;
            var draw = false;
            this.markers.forEach(function (marker, index) {
                if (_this.insideMarker(marker, cursor_1)) {
                    hover = true;
                    if (_this.markerHover === null || _this.markerHover !== index) {
                        _this.markerHover = index;
                        draw = true;
                    }
                }
            });
            if (!hover && this.markerHover !== null) {
                this.markerHover = null;
                draw = true;
            }
            if (draw)
                this.draw();
        }
    };
    ImgMapComponent.prototype.onMouseout = function (event) {
        if (this.markerHover) {
            this.markerHover = null;
            this.draw();
        }
    };
    ImgMapComponent.prototype.onResize = function (event) {
        this.draw();
    };
    __decorate([
        core_1.ViewChild('canvas')
    ], ImgMapComponent.prototype, "canvas", void 0);
    __decorate([
        core_1.ViewChild('container')
    ], ImgMapComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild('image')
    ], ImgMapComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input('markers')
    ], ImgMapComponent.prototype, "setMarkers", null);
    __decorate([
        core_1.Input()
    ], ImgMapComponent.prototype, "src", void 0);
    __decorate([
        core_1.Output('change')
    ], ImgMapComponent.prototype, "changeEvent", void 0);
    __decorate([
        core_1.Output('mark')
    ], ImgMapComponent.prototype, "markEvent", void 0);
    __decorate([
        core_1.Output('viewDidAppear')
    ], ImgMapComponent.prototype, "afterinitEvent", void 0);
    ImgMapComponent = __decorate([
        core_1.Component({
            selector: 'img-map',
            styles: [
                '.img-map { position: relative; }',
                '.img-map canvas, .img-map img { position: absolute; top: 0; left: 0; }',
                '.img-map img { display: block; height: auto; max-width: 100%; }'
            ],
            template: "\n    <div\n      class=\"img-map\"\n      #container\n      (window:resize)=\"onResize($event)\"\n    >\n      <img\n        #image\n        [src]=\"src\"\n        (load)=\"onLoad($event)\"\n      >\n      <canvas\n        #canvas\n        (click)=\"onClick($event)\"\n        (mousemove)=\"onMousemove($event)\"\n        (mouseout)=\"onMouseout($event)\"\n      ></canvas>\n    </div>\n  "
        })
    ], ImgMapComponent);
    return ImgMapComponent;
}());
exports.ImgMapComponent = ImgMapComponent;
(function (MarkerType) {
    MarkerType[MarkerType["Shape"] = 0] = "Shape";
    MarkerType[MarkerType["Composite"] = 1] = "Composite";
})(exports.MarkerType || (exports.MarkerType = {}));
var MarkerType = exports.MarkerType;
(function (ShapeType) {
    ShapeType[ShapeType["Circle"] = 0] = "Circle";
    ShapeType[ShapeType["Square"] = 1] = "Square";
    ShapeType[ShapeType["None"] = 2] = "None";
})(exports.ShapeType || (exports.ShapeType = {}));
var ShapeType = exports.ShapeType;
var Marker = (function () {
    function Marker(x, y, shape) {
        this.type = MarkerType.Shape;
        this.base = ShapeType.Circle;
        this.size = 10;
        this.image = "";
        this.data = {};
        this.x = x;
        this.y = y;
        if (shape) {
            this.base = shape;
        }
    }
    Marker.prototype.setsize = function (size) {
        this.size = size;
    };
    Marker.prototype.setAsComposite = function (image, base) {
        this.image = image;
        this.type = MarkerType.Composite;
        this.base = base;
    };
    /**
     * Convert a percentage position to a pixel position.
     */
    Marker.prototype.getCoordsAsPixel = function (img) {
        var image = img.nativeElement;
        return [
            (image.clientWidth / 100) * this.x,
            (image.clientHeight / 100) * this.y,
        ];
    };
    Marker.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    return Marker;
}());
exports.Marker = Marker;

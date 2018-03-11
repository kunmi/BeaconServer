

class Image {


 constructor(floorplan)
 {
        this.id = floorplan._id;
        this.name = floorplan.name;
        this.filename = floorplan.filename;
        this.size = floorplan.size;
        this.created = floorplan.created;
        this.url = "floorplans/"+floorplan.filename;
 }

}

module.exports = Image;
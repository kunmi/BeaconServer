

class Image {


 constructor(floorplan)
 {
        this.id = floorplan._id;
        this.name = floorplan.name;
        this.filename = floorplan.filename;
        this.size = floorplan.size;
        this.created = floorplan.created;
        this.url = "floorplans/"+floorplan.filename;
        this.beacon_count = floorplan.beacons.length;
 }

}

module.exports = Image;
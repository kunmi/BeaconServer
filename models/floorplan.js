const mongoose = require("mongoose");
const User = require("./user");
const Beacon = require("./beacon");
const ContentArea = require('./contentarea');


const BeaconPlanSchema =  mongoose.model('Beacon').schema;
const ContentAreaSchema =  mongoose.model('ContentArea').schema;


const FloorPlanSchema = module.exports = mongoose.Schema({
    name : {
        type : String,
        default : "Unnamed"
    },
    filename : {
        type: String,
        required : true
    },
    uploadedBy:
    {
            type: mongoose.Schema.Types.ObjectId,
            ref : User
    },
    size : String,
    mimeType: String,
    path: String,
    beacons: [BeaconPlanSchema],
    areas: [ContentAreaSchema],

    created : {
        type: Date,
        default: Date.now()
    },

    updated : {
        type: Date,
        default: Date.now()
    }


});


// `batchSchema.path('events')` gets the mongoose `DocumentArray`
const iBeacon = FloorPlanSchema.path('beacons').discriminator('iBeacon', Beacon.iBeaconSchema);
const eddystone = FloorPlanSchema.path('beacons').discriminator('eddystone', Beacon.eddystoneSchema);


const FloorPlan = module.exports = mongoose.model('FloorPlan', FloorPlanSchema );

module.exports.newFloorPlan = function(file, userID) {

    let d = Date.now();

    return new FloorPlan({
        filename: file.filename,
        created : d,
        updated: d,
        uploadedBy: userID,
        size: file.size,
        mimeType: file.mimetype,
        path: file.path
    });

};



module.exports.newIbeacon = function(model) {

    let d = Date.now();

    return new iBeacon({
            uuid: model.uuid,
            major: model.major,
            minor: model.minor,
        ref: model.ref,
        txPower: model.txPower,
        created: d,
        updated: d,
        map : {
            x : model.map.x,
            y : model.map.y
        }

    });
};

module.exports.newEddystoneBeacon = function(model) {

    let d = Date.now();

    return new eddystone({
        nameSpaceId: model.nameSpaceId,
        instanceId: model.instanceId,
        frameType: "UID",
        ref: model.ref,
        txPower: model.txPower,
        created: d,
        updated: d,
        map : {
            x : model.map.x,
            y : model.map.y
        }

    });
};
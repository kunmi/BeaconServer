const mongoose = require("mongoose");
const User = require("./user");
const Beacon = require("./beacon");


const BeaconPlanSchema =  mongoose.model('Beacon').schema;


const FloorPlanSchema = module.exports = mongoose.Schema({
    name : {
        type : String,
        default : "Unnamed"
    },
    filename : {
        type: String,
        required : true
    },
    created : Date,
    uploadedBy:
    {
            type: mongoose.Schema.Types.ObjectId,
            ref : User
    },
    size : String,
    mimeType: String,
    path: String,
    beacons: [BeaconPlanSchema]
});


// `batchSchema.path('events')` gets the mongoose `DocumentArray`
const iBeacon = FloorPlanSchema.path('beacons').discriminator('iBeacon', Beacon.iBeaconSchema);
const eddystone = FloorPlanSchema.path('beacons').discriminator('eddystone', Beacon.eddystoneSchema);


const FloorPlan = module.exports = mongoose.model('FloorPlan', FloorPlanSchema );

module.exports.newFloorPlan = function(file, userID) {
    return new FloorPlan({
        filename: file.filename,
        created : Date.now(),
        uploadedBy: userID,
        size: file.size,
        mimeType: file.mimetype,
        path: file.path
    });

};



module.exports.newIbeacon = function(model) {
    return new iBeacon({
            uuid: model.uuid,
            major: model.major,
            minor: model.minor,
        ref: model.ref,
        txPower: model.txpower,
        created: Date.now(),
        map : {
            x : model.map.x,
            y : model.map.y
        }

    });
};

module.exports.newEddystoneBeacon = function(model) {
    return new eddystone({
        nameSpaceId: model.uuid,
        instanceId: model.minor,
        frameType: "UID",
        ref: model.ref,
        txPower: model.txpower,
        created: Date.now(),
        map : {
            x : model.map.x,
            y : model.map.y
        }

    });
};
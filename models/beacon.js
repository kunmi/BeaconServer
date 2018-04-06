const mongoose = require("mongoose");
const User = require('./user');


var options = {discriminatorKey: 'type'};

const BeaconSchema = module.exports = mongoose.Schema({
    map : {
        x: String,
        y: String,
        baseShape: String
    },
    ref: {
            type: Number
        },
    txPower: {
            type: String
        },
    telemetry: {
            type: String,
        },
    created : Date,
    registeredBy:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : User
        },
    lastSeen: {
        type: Date
    }
}, options);


const Beacon = module.exports = mongoose.model('Beacon', BeaconSchema );

const iBeaconSchema = module.exports =  mongoose.Schema(
    {

            uuid: String,
            major: {
                type: String,
                required: false
            },
            minor:{
                type: String,
                required: false
            }

    }, options);

const eddystoneSchema = mongoose.Schema(
    {

            frameType: {
                type: String,
                enum: ["UID", "EID"],
                default: "UID"

            },
            nameSpaceId: {
                type: String,
                required: true
            },
            instanceId:{
                type: String,
                required: false
            }

    }, options);


module.exports = {
    Beacon: Beacon,
    iBeaconSchema : iBeaconSchema,
    eddystoneSchema : eddystoneSchema
};





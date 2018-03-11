const mongoose = require("mongoose");
const User = require("../routes/users");

const FloorPlanSchema = module.exports = mongoose.Schema({
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

});


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
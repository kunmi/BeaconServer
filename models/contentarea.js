const mongoose = require("mongoose");

const ContentAreaSchema = module.exports = mongoose.Schema({
    name: String,
    coordinates : [],
    created: Date
    });

const ContentArea = module.exports = mongoose.model('ContentArea', ContentAreaSchema );

module.exports = {
    ContentArea: ContentArea
};
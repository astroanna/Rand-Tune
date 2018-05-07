"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var SongModel = /** @class */ (function () {
    function SongModel() {
        this.createSchema();
        this.createModel();
    }
    SongModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            title: String,
            description: String,
            musician: String,
            album: String,
            genre: String,
            review_count: Number,
            raw_data: String
        }, { collection: 'songs' });
    };
    SongModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Songs", this.schema);
    };
    SongModel.prototype.retrieveAllSongs = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return SongModel;
}());
exports.SongModel = SongModel;

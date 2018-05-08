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
            _id: Number,
            title: String,
            description: String,
            musician: String,
            album: String,
            genre: String,
            review_count: Number,
            path: String
        }, { collection: 'songs' });
    };
    SongModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Song", this.schema);
    };
    SongModel.prototype.retrieveRandom = function (res) {
        var rand = Math.floor(Math.random() * 7) + 1;
        var query = this.model.find({ _id: rand });
        query.exec(function (err, item) {
            res.json(item);
        });
    };
    SongModel.prototype.retrieveAllSongs = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    SongModel.prototype.retrieveAllSongsForMusician = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return SongModel;
}());
exports.SongModel = SongModel;

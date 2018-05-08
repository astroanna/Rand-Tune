"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ListenerModel = /** @class */ (function () {
    function ListenerModel() {
        this.createSchema();
        this.createModel();
    }
    ListenerModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            _id: String,
            username: String,
            password: String,
            f_name: String,
            l_name: String,
            email: String,
            phone: String,
            facebook: String,
            twitter: String,
            balance: Number,
            is_musician: Boolean,
            is_artist: Boolean
        }, { collection: 'listeners' });
    };
    ListenerModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Listener", this.schema);
    };
    ListenerModel.prototype.retrieveListener = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ListenerModel;
}());
exports.ListenerModel = ListenerModel;

"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var SongModel_1 = require("./model/SongModel");
var ListenerModel_1 = require("./model/ListenerModel");
var ReviewModel_1 = require("./model/ReviewModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //public idGenerator:number;
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        //this.idGenerator = 100;
        //this.Lists = new ListModel();
        //this.Tasks = new TaskModel();
        this.Songs = new SongModel_1.SongModel();
        this.Listener = new ListenerModel_1.ListenerModel();
        this.Reviews = new ReviewModel_1.ReviewModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/songs', function (req, res) {
            console.log('Query all songs in db');
            _this.Songs.retrieveAllSongs(res);
        });
        router.get('/users/:target/songs', function (req, res) {
            var target = req.params.target;
            console.log("Query all songs by: " + target);
            _this.Songs.retrieveAllSongsForMusician(res, { musician: target });
        });
        router.get('/users/:target', function (req, res) {
            var target = req.params.target;
            console.log("Query user info for: " + target);
            _this.Listener.retrieveListener(res, { email: target });
        });
        router.get('/users/:target/reviews', function (req, res) {
            var target = req.params.target;
            console.log("Query all review for user: " + target);
            _this.Reviews.retrieveReviewsForID(res, { user_id: target });
        });
        /*router.post('/app/list/', (req, res) => {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.listId = this.idGenerator;
            this.Lists.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(this.idGenerator.toString());
            this.idGenerator++;
        });
    
        router.get('/app/list/:listId', (req, res) => {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            this.Tasks.retrieveTasksDetails(res, {listId: id});
        });
    
        router.get('/app/list/', (req, res) => {
            console.log('Query All list');
            this.Lists.retrieveAllLists(res);
        });
    */
        this.expressApp.use('/', router);
        //this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        //this.expressApp.use('/images', express.static(__dirname+'/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;

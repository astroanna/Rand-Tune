import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

//import {ListModel} from './model/ListModel';
//import {TaskModel} from './model/TaskModel';
import {DataAccess} from './DataAccess';
import {SongModel} from './model/SongModel';
import {ListenerModel} from './model/ListenerModel';
import { ReviewModel } from './model/ReviewModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  //public Lists:ListModel;
  //public Tasks:TaskModel;
  public Songs:SongModel;
  public Listener:ListenerModel;
  public Reviews:ReviewModel;
  //public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    //this.idGenerator = 100;
    //this.Lists = new ListModel();
    //this.Tasks = new TaskModel();
    this.Songs = new SongModel();
    this.Listener = new ListenerModel();
    this.Reviews = new ReviewModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {

    let router = express.Router();
    
    router.get('/songs', (req, res) => {
        console.log('Query all songs in db');
        this.Songs.retrieveAllSongs(res);
    });
    
    router.get('/newsong', (req, res) => {
        console.log('Query random song from song collection');
        this.Songs.retrieveRandom(res);
    });

    router.get('/users/:target/songs',(req,res) =>{
        var target = req.params.target;
        console.log("Query all songs by: " + target);
        this.Songs.retrieveAllSongsForMusician(res, {musician: target});
    });

    router.get('/users/:target',(req,res) => {
        var target = req.params.target;
        console.log("Query user info for: " + target);
        this.Listener.retrieveListener(res, {email: target});
    });

    router.get('/users/:target/reviews',(req,res) => {
        var target = req.params.target;
        console.log("Query all review for user: " + target);
        this.Reviews.retrieveReviewsForID(res, {user_id: target});
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
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import {DataAccess} from './DataAccess';
import {SongModel} from './model/SongModel';
import {ListenerModel} from './model/ListenerModel';
import { ReviewModel } from './model/ReviewModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  // mongoose models
  public Songs:SongModel;
  public Listener:ListenerModel;
  public Reviews:ReviewModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
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

    this.expressApp.use('/', router);
    this.expressApp.use('/music', express.static(__dirname+'/music'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));

    
  }

}

export {App};
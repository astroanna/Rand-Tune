import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IListenerModel} from '../interfaces/IListenerModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ListenerModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
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
            }, {collection: 'listeners'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IListenerModel>("Listener", this.schema);
    }

    public retrieveListener(response:any, filter:Object){
        var query = this.model.find(filter);
        query.exec((err,itemArray)=> {
            response.json(itemArray);
        });
    }
}
export {ListenerModel};
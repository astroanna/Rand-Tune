import Mongoose = require("mongoose");

interface IListenerModel extends Mongoose.Document {
    username: string;
    password: string;
    f_name: string;
    l_name: string;
    email: string;
    phone: string;
    facebook: string;
    twitter: string;
    balance: number;
    is_musician: boolean;
    is_artist: boolean;
    song_list: [{
        id: string;
    }];
}
export {IListenerModel};
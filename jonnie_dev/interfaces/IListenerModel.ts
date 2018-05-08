import Mongoose = require("mongoose");

interface IListenerModel extends Mongoose.Document {
    _id: string;
    username: string;
    password: string;
    bio: string;
    f_name: string;
    l_name: string;
    email: string;
    phone: string;
    facebook: string;
    twitter: string;
    balance: number;
    is_musician: boolean;
    is_artist: boolean;
}
export {IListenerModel};
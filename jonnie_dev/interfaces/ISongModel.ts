import Mongoose = require("mongoose");

interface ISongModel extends Mongoose.Document {
    title: string;
    description: string;
    musician: string;
    album: string;
    genre: string;
    review_count: number;
    path: string;
}
export {ISongModel};
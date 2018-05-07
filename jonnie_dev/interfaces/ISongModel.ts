import Mongoose = require("mongoose");

interface ISongModel extends Mongoose.Document {
    title: string;
    description: string;
    musician: string;
    album: string;
    genre: string;
    review_count: number;
    raw_data: undefined;
}
export {ISongModel};
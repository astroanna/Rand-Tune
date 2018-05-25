import Mongoose = require("mongoose");

interface ISongModel extends Mongoose.Document {
    // Public song info
    title: string;
    description: string;
    album: string;
    genre: string;
    
    musician: string;
    review_count: number;
    mp3_id: string;
}
export {ISongModel};
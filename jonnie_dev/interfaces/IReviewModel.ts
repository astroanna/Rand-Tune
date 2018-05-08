import Mongoose = require("mongoose");

interface IReviewModel extends Mongoose.Document {
    user_id: string;
    song_id: string;
    review_content: string;
    date: any;
    rating: number;
}
export{IReviewModel}
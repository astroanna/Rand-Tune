// populate db with sample data

// db we are working in
db = db.getSiblingDB('RandTune')

// collections we will be populating
db.createCollection('listeners')
listenerCollection = db.getCollection("listeners")
listenerCollection.remove({})

db.createCollection('songs')
songCollection = db.getCollection("songs")
songCollection.remove({})

db.createCollection('reviews')
reviewCollection = db.getCollection("reviews")
reviewCollection.remove({})

// populate
listenerCollection.insert(
    {
        username: "Musician_1",
        password: "password123",
        f_name: "Jacob",
        l_name: "Smith",
        email: "musician_1@gmail.com",
        phone: "555-555-5555",
        facebook: "facebook.com/musician1",
        twitter: "twitter.com/musician1",
        balance: 0.05,
        is_musician: true,
        is_artist:false
    }
)
songCollection.inser



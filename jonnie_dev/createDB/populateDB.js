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

// populate Musicians and Songs
listenerCollection.insert(
    {
        _id: "musician1@gmail.com",
        username: "Musician1",
        password: "password123",
        bio: "about me about me about me about me!",
        f_name: "Jacob",
        l_name: "Smith",
        email: "musician1@gmail.com",
        phone: "555-555-5555",
        facebook: "facebook.com/musician1",
        twitter: "twitter.com/musician1",
        balance: 0.05,
        is_musician: true,
        is_artist:false
    }
)
songCollection.insert(
    {
        _id: 1,
        title: "test_song1",
        description: "this is the description for test_song1",
        musician: "musician1@gmail.com",
        album: "test_musician1's album",
        genre: "electronic",
        review_count: 100,
        path: "/music/musician1@gmail.com/test_song1.mp3"
    }
)
songCollection.insert(
    {
        _id: 2,
        title: "test_song2",
        description: "this is the description for test_song2",
        musician: "musician1@gmail.com",
        album: "test_musician1's album",
        genre: "electronic",
        review_count: 100,
        path: "/music/musician1@gmail.com/test_song2.mp3"
    }
)
songCollection.insert(
    {
        _id: 3,
        title: "test_song3",
        description: "this is the description for test_song3",
        musician: "musician1@gmail.com",
        album: "test_musician1's album",
        genre: "rock",
        review_count: 100,
        path: "/music/musician1@gmail.com/test_song3.mp3"
    }
)
songCollection.insert(
    {
        _id: 4,
        title: "test_song4",
        description: "this is the description for test_song4",
        musician: "musician1@gmail.com",
        album: "test_musician1's album",
        genre: "rock",
        review_count: 100,
        path: "/music/musician1@gmail.com/test_song4.mp3"
    }
)
songCollection.insert(
    {
        _id: 5,
        title: "test_song5",
        description: "this is the description for test_song5",
        musician: "musician1@gmail.com",
        album: "",
        genre: "punk",
        review_count: 100,
        path: "/music/musician1@gmail.com/test_song5.mp3"
    }
)
listenerCollection.insert(
    {
        _id: "alexajaide@gmail.com",
        username: "Musician_2",
        password: "hunter2",
        bio: "hey i like to make",
        f_name: "Alexa",
        l_name: "Jaide",
        email: "alexajaide@gmail.com",
        phone: "444-444-4444",
        facebook: "facebook.com/jaide",
        twitter: "twitter.com/jaide",
        balance: 3.50,
        is_musician: true,
        is_artist:false
    }
)
songCollection.insert(
    {
        _id: 6,
        title: "waterfall",
        description: "this is the description for waterfall",
        musician: "alexajaide@gmail.com",
        album: "Hello World",
        genre: "electronic",
        review_count: 100,
        path: "/music/alexajaide@gmail.com/waterfall.mp3"
    }
)
songCollection.insert(
    {
        _id: 7,
        title: "around the world",
        description: "this is the description for around the world",
        musician: "alexajaide@gmail.com",
        album: "Hello World",
        genre: "electronic",
        review_count: 100,
        path: "/music/alexajaide@gmail.com/around_the_world.mp3"
    }
)

// Add basic Listener
listenerCollection.insert(
    {
        _id: "bob@test.com",
        username: "Basic_User_Bob",
        password: "temp",
        bio: "hi im bob my bio will be the longest because im going to be used in the example. I like music a lot.",
        f_name: "Bob",
        l_name: "Smith",
        email: "bob@test.com",
        phone: "555-555-4444",
        facebook: "facebook.com/bobsmith",
        twitter: "twitter.com/bobsmith",
        balance: 0.25,
        is_musician: false,
        is_artist: false
    }
)

// Add reviews for Bob
reviewCollection.insert(
    {
        user_id: "bob@test.com",
        song_id: 7,
        review_content: "this is a great song, love the drums",
        date: new Date(),
        rating: 5
    }
)
reviewCollection.insert(
    {
        user_id: "bob@test.com",
        song_id: 3,
        review_content: "this is a not so great song, maybe add some drums",
        date: new Date(),
        rating: 2
    }
)
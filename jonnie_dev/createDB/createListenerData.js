db = db.getSiblingDB('RandTune')
db.createCollection('listeners')
listenerCollection = db.getCollection("listeners")
listenerCollection.remove({})
listenerCollection.insert(
    {
        username: "test_user1",
        password: "password123",
        f_name: "Bob",
        l_name: "Smith",
        email: "bob@test.com",
        phone: "555-555-5555",
        facebook: "facebook.com/bobsmith",
        twitter: "twitter.com/bobsmith",
        balance: 0.05,
        is_musician: false,
        is_artist: false
    }
)
db = db.getSiblingDB('RandTune')
db.createCollection('songs')
songCollection = db.getCollection("songs")
songCollection.remove({})
songCollection.insert(
{
    title: "test_song1",
    description: "this is the description for test_song1",
    musician: "test_musician1",
    album: "test_musician1's album",
    genre: "electronic",
    review_count: 100,
    raw_data: "some mp3 data here"
}
)
songCollection.insert(
{
    title: "test_song2",
    description: "this is the description for test_song2",
    musician: "test_musician1",
    album: "test_musician1's album",
    genre: "electronic",
    review_count: 100,
    raw_data: "some mp3 data here"
}
)
songCollection.insert(
{
    title: "test_song3",
    description: "this is the description for test_song3",
    musician: "test_musician2",
    album: "test_musician2's album",
    genre: "rock",
    review_count: 100,
    raw_data: "some mp3 data here"
}
)
songCollection.insert(
{
    title: "test_song4",
    description: "this is the description for test_song3",
    musician: "test_musician2",
    album: "test_musician2's album",
    genre: "rock",
    review_count: 100,
    raw_data: "some mp3 data here"
}
)

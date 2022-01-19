const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb://127.0.0.1:27017/";
// change local host

const users = [
  { name: "Jawad Asaad", email: "jloco151@gmail.com" },
  { name: "Jawad Disc", email: "jawadisc185@gmail.com" },
  { name: "Rouge Nijem", email: "rouge@email.com" },
  { name: "fida", email: "fida@email.com" },
];

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) console.log(error);

  const db = client.db("blog");
  populateData(db);
});

const populateData = async (db) => {
  await db
    .collection("users")
    .insertMany(users)
    .then((result) =>
      console.log(`Inserted ${result.insertedCount} user/s successfully`)
    )
    .catch((error) => console.log(error));

  const jawad = await db
    .collection("users")
    .findOne({ email: "jloco151@gmail.com" });
  const asaad = await db
    .collection("users")
    .findOne({ email: "jawadisc185@gmail.com" });

  const posts = [
    {
      title: "MongoDB Best Parctices",
      body: "lorem isum",
      authorID: jawad._id,
    },
    {
      title: "React Something",
      body: "lorem isum",
      authorID: asaad._id,
    },
  ];

  await db
    .collection("posts")
    .insertMany(posts)
    .then((result) =>
      console.log(`Inserted ${result.insertedCount} post/s successfully`)
    )
    .catch((error) => console.log(error));

  const jawadPost = await db
    .collection("posts")
    .findOne({ authorID: jawad._id });

  db.collection("comments")
    .insertOne({
      postID: jawadPost._id,
      body: "Some random text",
      time: new Date(),
    })
    .then((result) =>
      console.log(`Inserted ${result.insertedCount} comment/s successfully`)
    )
    .catch((error) => console.log(error));
};

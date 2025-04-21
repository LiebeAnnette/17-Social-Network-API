const db = require("./config/connection");
const User = require("./models/User");
const Thought = require("./models/Thought");

const seedData = async () => {
  await db;

  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const user1 = await User.create({
      username: "lovebug123",
      email: "lovebug123@email.com",
    });

    const user2 = await User.create({
      username: "technoWizard",
      email: "technoWizard@email.com",
    });

    const user3 = await User.create({
      username: "neonBard",
      email: "neonBard@email.com",
    });

    const thought1 = await Thought.create({
      thoughtText: "Mongoose is actually kinda fun!",
      username: user1.username,
    });

    const thought2 = await Thought.create({
      thoughtText: "Express routes make me feel powerful.",
      username: user2.username,
    });

    await User.findByIdAndUpdate(user1._id, {
      $push: { thoughts: thought1._id },
    });
    await User.findByIdAndUpdate(user2._id, {
      $push: { thoughts: thought2._id },
    });

    await User.findByIdAndUpdate(user1._id, { $push: { friends: user2._id } });
    await User.findByIdAndUpdate(user2._id, { $push: { friends: user1._id } });

    console.log("🌱 Seed data successfully inserted!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedData();

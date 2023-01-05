const mongoose = require("mongoose");

const password = process.argv[2];
const url = `mongodb+srv://fullstack:${password}@cluster0.vyvob2z.mongodb.net/phonebook?retryWrites=true&w=majority`;
const name = process.argv[3];
const number = process.argv[4];
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
} else if (process.argv.length < 4) {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");
      console.log("Phonebook:");
      Person.find({})
        .then((result) => {
          result.forEach((person) => {
            console.log(person.name + " " + person.number);
          });
          mongoose.connection.close();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
} else {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");

      const person = new Person({
        name: name,
        number: number,
      });

      return person.save();
    })
    .then(() => {
      console.log(`added ${name} number ${number} to phonebook`);
      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}

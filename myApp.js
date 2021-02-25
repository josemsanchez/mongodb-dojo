/**1)Install & Set up mongoose
 * 
 * Add mongodb and mongoose to the project’s package.json. 
 * 
 * Then, require mongoose as mongoose in myApp.js. 
 * 
 * Create a .env file and add a MONGO_URI variable to it.
 * 
 * Connect to the database using the following syntax:
 * mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
 *  
 */
 require('dotenv').config();

 const mongoose = require("mongoose")
 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

/**2)Create a person schema called personSchema having this prototype:
//
//- Person Prototype -
//--------------------
//name : string [required]
//age :  number
//favoriteFoods : array of strings
//Use the Mongoose basic schema types. If you want you can also add more fields, use simple validators like 
//'required' or 'unique', and set 'default' values. See the [Mongoose docs](http://mongoosejs.com/docs/guide.html).
* 
*/

let peopleSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]

})

let Person = mongoose.model('Person', peopleSchema)

const createAndSavePerson = (done) => {
let sammy = new Person({name: 'Sam', age: 36, favoriteFoods: ['croquetas', 'paella', 'tortilla de patatas']})
sammy.save( (error, data) => {
    if(error){
      console.log(error)
    }else
    done(null, data)
})
//done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

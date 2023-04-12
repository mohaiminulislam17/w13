const express = require('express')
const router = express.Router()

// Import Person schema
const Person = require('./../../models/Person')

// POST endpoint for adding a username
router.post('/add-username', async (req, res) => {
  try {
    const newPerson = await Person.create({
      username: req.body.username
    });
    res.status(201).send(newPerson);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET endpoint for getting all usernames
router.get('/get-usernames', async (req, res) => {
  try {
    const usernames = await Person.find({}, { _id: 0, username: 1 });
    res.send(usernames);
  } catch (error) {
    res.status(500).send(error);
  }
});


// router.get("/job", (req, res) => {
//     res.send("<h1>" + process.env.SAMPLE_STRING +"</h1>")
// })

module.exports = router;

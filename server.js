const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const path = require('path');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'client/build')));

const mongoURI = process.env.MONGO_URI;
console.log(mongoURI);
mongoose.connect(process.env.mongoURI || "mongodb+srv://admin-avnish:mongoAdmin@cluster0.sywem6d.mongodb.net/ContactInfo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const contactsSchema = new mongoose.Schema({
    emailId:{ type: String, unique: true },
    feedback:String
});

const User = mongoose.model ("User",contactsSchema);


const connectSchema = new mongoose.Schema({
    emailId:{ type: String, unique: true },
});

const Subscriber = mongoose.model ("Subscriber",connectSchema);


app.get("/",function(req,res){
    // res.render("/client/src/index.js");
    // res.sendFile(path.join(__dirname, '/client/build/index.html'));
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.post("/ContactUs",async function(req,res){
    // var fname = req.body.Fname;
    // var signUpMNumber = req.body.SignupMnumber;
    var email = req.body.email;
    var feedback = req.body.feedback;

  // Hash the password before saving it to the database
//   const hashedPassword = await bcrypt.hash(Pswd, 10);

    const user = new User({
        emailId:email,
        feedback:feedback,
    });

    try {
        await user.save();
        console.log("Successfully inserted data into UserData Database!!");
      } catch (err) {
        console.error('Error saving user:', err);
      }
    
    // console.log(fname,signUpMNumber,signupEmail,signupPswd);
    console.log(user.emailId);

    // Redirect to the login page after a delay
    setTimeout(function () {
        res.redirect("/"); // Replace with your actual login page URL
        // res.sendFile(__dirname + "/index.html"); //other way to do the same
    }, 3000); // Redirect after 3 seconds (adjust as needed)
});

app.post("/connect",async function(req,res){
    var email = req.body.email;
  // Hash the password before saving it to the database
//   const hashedPassword = await bcrypt.hash(Pswd, 10);

    const userSubs = new Subscriber({
        emailId:email
    });

    try {
        await userSubs.save();
        console.log("Successfully inserted data into UserData Database!!");
      } catch (err) {
        console.error('Error saving user:', err);
      }
    
    // console.log(fname,signUpMNumber,signupEmail,signupPswd);
    console.log(userSubs.emailId);

    // Redirect to the login page after a delay
    setTimeout(function () {
        res.redirect("/"); // Replace with your actual login page URL
        // res.sendFile(__dirname + "/index.html"); //other way to do the same
    }, process.env.PORT || 3000); // Redirect after 3 seconds (adjust as needed)
})

app.listen(process.env.PORT,function(){
    console.log("Server is up running!!");
});
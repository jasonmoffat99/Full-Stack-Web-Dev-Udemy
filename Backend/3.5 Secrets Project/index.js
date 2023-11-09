//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// creates a variable because this value is going to change depending on the if statement, setting is as false as a default value
var userIsAuthorised = false;

// creating custom middleware which uses the constant "password" connected to the object 'password' and checks if its equal to the password "ILoveProgramming"
 
function checkPassword(req, res, next){
    const password = req.body["password"];
    if (password === "ILoveProgramming"){
        userIsAuthorised = true;
    }
    // allows the program to continue once the check is complete/middleware is complete
    next();
}

// must always use "app.use(function) the for middleware to work"
app.use(checkPassword);

// gets the index page itself as the default
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

// post connected to the "check" tag on the html form, console logs and also checks if the 'userIsAuthorised" and sends them to the respective pages
app.post("/check", (req, res) => {
    console.log(req.body);
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html")
    } else {
        res.sendFile(__dirname + "/public/index.html") // res.redirect("/") also works to send the user back to the index.html
    }
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
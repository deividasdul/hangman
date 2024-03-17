import express from "express";

const APP = express();
const PORT = 3000;
var currentAttempts = 0;

APP.use(express.static("public"));
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());

APP.listen(PORT, () => {
  console.log("Starting...");
});

APP.get("/", (req, res) => {
  res.render("index.ejs");
});

var easy = ["cat"];
var randomWord = Math.floor(Math.random() * easy.length);
var pickedWord = easy[randomWord];

APP.get("/easy", (req, res) => {
  res.render("easy.ejs", {
    currentAttempts: (currentAttempts = 0),
    word: pickedWord,
  });
});

APP.post("/check", (req, res) => {
  var chosenLetter = req.body.letter;
  // console.log("User chosen letter:" + chosenLetter);

  for (var i = 0; i < easy.length; i++) {
    // console.log("Computer chosen word / letter:" + easy[0][i]);
    if (chosenLetter == easy[randomWord][i]) {
      console.log(easy[randomWord][i]);
      res.render("easy.ejs", {
        word: pickedWord,
        currentAttempts: currentAttempts,
      });
    } else {
      currentAttempts++;
      res.render("easy.ejs", {
        word: pickedWord,
        currentAttempts: currentAttempts,
      });
    }
    // else {
    //   currentAttempts++;
    //   res.render("easy.ejs", {
    //     word: pickedWord,
    //     currentAttempts: currentAttempts,
    //   });
    // }
  }
});

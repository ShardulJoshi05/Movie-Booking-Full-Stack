const bodyParser = require("body-parser");
var express = require("express"),
  http = require("http"),
  fs = require("fs"),
  path = require("path"),
  cors = require("cors");  //TODO:



// Running on posrt 9000
const PORT = 3000;


var app = express();

var corsOptions = {
  origin: "http://localhost:"+PORT
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// app.get("/movie", findAllMovies);
// app.get('',findOne);

// app.get('/genres',function(req,res){
//     res.send("All Genres Data in JSON format from Mongo DB")
// })

// app.get('/artists',function(req,res){
//     res.send("All Artists Data in JSON format from Mongo DB")
// })
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

require("./routes/movie.routes")(app);
require("./routes/artist.routes")(app);
require("./routes/genre.routes")(app);
require("./routes/user.routes")(app)

app.listen(PORT, function () {
  console.log("express has started on port ", PORT);
});
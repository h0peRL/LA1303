// AGPL Lizenz
// #####################################################
// Authors: Almir Ajradini
//          Christian Witschard
// #####################################################
// 17.05.2022 @ BBBaden
//

const jwt = require('jsonwebtoken');
function auth(req, res, next) {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const jwtData = jwt.verify(token, "mySuperSecretKey");
		next();
	} catch (error) {
		return res.json({
			err: true,
			msg: "authorization error",
		});
	}
}
const loginController = require("./controller/00_LoginController");
const apiController = require("./controller/01_Controller");

var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// ========================================= Zugangspunkte ====================================================
app.get("/", (req, res) => {
  let resp = [{
    Route: "/",
    Description: "Root"
  }];

  app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      resp.push({
        Route: r.route.path,
        Auth: r.route.authorization,
        Method: r.route.methods
      })
    }
  })
  res.send(resp);
});

// ========================================= /user =========================================================
app.get("/user", (req, res) => {
  res.send({
    user: "/user/login post for user login",
    item: "/user/changepassword post for changing password",
  });
});

app.post("/user/login", loginController.login);
app.post("/user/changepassword", loginController.changepassword);
app.get("/user/register", (req, res) => {
  res.json({
    user: "some free username",
    password:
      "your super secret password. I swear to god I can't read your password after I have encrypted it.",
  });
});
app.post("/user/register", loginController.register);
app.get("/user/getlist", loginController.getuserlist);
// ========================================= /item =========================================================

app.get("/api/getall", apiController.getAll);
app.get("/api/get/:id", apiController.getOne);
app.post("/api/addone", auth, apiController.addOne);
app.put("/api/changeone", auth, apiController.changeOne);
app.delete("/api/delete", auth, apiController.deleteOne);

// ======================================== Start Server ===================================================

app.listen(port, () => {
  console.log(`API listening @ http://localhost:${port}`);
});

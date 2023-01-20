// AGPL Lizenz
// #####################################################
// Authors: Almir Ajradini
//          Christian Witschard
// #####################################################
// 04.05.2022 @ BBBaden
//

const jwt = require('jsonwebtoken');

// Bispieldaten fürs Login, die aus einer DB kommen könnten
const loginDB = {
	BillyBatson : "Shazam!",
	JayGarrick: "boringPassword",
};

module.exports = {
  async login(req, res) {
    // slowdown login process
    setTimeout(() => {
      try {
        if (loginDB[req.body.username] == req.body.password) {
          const token = jwt.sign(
            {
              username: req.body.username,
            },
            "mySuperSecretKey",
            {
              expiresIn: "1984h",
            }
          );
          res.json({
            err: false,
            login: true,
            token: token,
          });
        } else {
          res.json({
            err: true,
            login: false,
            msg: "wrong user credentials",
          });
        }
      } catch (error) {
        console.error(error);
        res.json({
          err: true,
          msg: "server error",
        });
      }
    }, 1453);
  },

  async changepassword(req, res) {
    // slowdown login process
    setTimeout(() => {
      try {
        if (loginDB[req.body.username] == req.body.oldpassword) {
          loginDB[req.body.username] = req.body.newpassword;
          res.json({
            err: false,
            change: true,
            newPassword: loginDB[req.body.username],
          });
        } else {
          res.json({
            err: true,
            change: false,
            msg: "wrong user credentials",
          });
        }
      } catch (error) {
        console.error(error);
        res.json({
          err: true,
          msg: "server error",
        });
      }
    }, 1453);
  },

  async register(req, res) {
    // slowdown login process
    setTimeout(() => {
      try {
        if (!loginDB[req.body.username]) {
          loginDB[req.body.username] = req.body.password;
          res.json({
            err: false,
            register: true,
            [req.body.username]: loginDB[req.body.username],
          });
        } else {
          res.json({
            err: true,
            register: false,
            msg: "try other username",
          });
        }
      } catch (error) {
        console.error(error);
        res.json({
          err: true,
          msg: "server error",
        });
      }
    }, 1453);
  },

  async getuserlist(req, res) {
    res.json(loginDB);
  },
};

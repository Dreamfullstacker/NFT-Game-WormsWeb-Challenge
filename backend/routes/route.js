(express = require("express")), (router = express.Router());
var User = require("../Models/user");
var Worms = require("../Models/worms");
var uuid = require("uuid");
var nodemailer = require("nodemailer");

router.route("/createmailcode").post((req, res) => {
  var personInfo = req.body.params;

  if (!personInfo.email) {
    res.send({ info: "no email" });
  } else {
    if (true) {
      User.findOne({ email: personInfo.email }, function (err, data) {
        if (!data) {
          var mailcode = Math.floor(Math.random() * 1000000);
          if (mailcode < 100000) mailcode *= 10;

          var currentdate = new Date();
          var datetime =
            currentdate.getDate() +
            "/" +
            (currentdate.getMonth() + 1) +
            "/" +
            currentdate.getFullYear() +
            " @ " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();

          var newPerson = new User({
            uu_id: uuid.v1(),
            email: personInfo.email,
            walletaddress: personInfo.address,
            mailcode: mailcode,
            verify: false,
            ipaddress: req.ip,
            createdtime: datetime,
          });

          newPerson.save(function (err, Person) {
            if (err) {
              res.send({ Success: "servererror" });
              console.log(err);
            } else {
              console.log("Success");
            }
          });

          var transporter = nodemailer.createTransport({
            host: "mail.negociosytecnologias.net",
            secure: true,
            port: 465,
            auth: {
              user: "spaceworms@negociosytecnologias.net",
              pass: "6HEyt{MHZwkx",
            },
          });

          var mailOptions = {
            from: "spaceworms@negociosytecnologias.net",
            to: personInfo.email,
            subject: "Sending Email using Node.js",
            html: "<h1>" + mailcode + "</h1>",
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              res.send({ Success: "emailerror" }); // uncerified email
            } else {
              res.send({ Success: "emailsent" }); //email is already sent
              console.log("Email sent: " + info.response);
            }
          });

          res.send({ Success: "You are registered,You can login now." });
        } else {
          if (data.verity == true) {
            res.send({ Success: "verified" }); //already registered
          } else {
            res.send({ Success: "unverified" }); //check mailbox if there is no unverified email.
          }
        }
      });
    } else {
      res.send({ Success: "password is not matched" });
    }
  }
});

router.route("/register").post((req, res) => {
  var personInfo = req.body.params;

  if (!personInfo.email) {
    res.send({ info: "no email" });
  } else {
    if (true) {
      User.findOne({ email: personInfo.email }, function (err, data) {
        if (!data) {
          res.send({ Success: "nomatchemail" });
        } else {
          if (data.verify == true) {
            res.send({ Success: "verified", uuid: data.uu_id });
          } else {
            if (data.mailcode == req.body.params.mailcode) {
              data.verify = true;
              data.save(function (err, Person) {
                if (err) console.log(err);
              });
              res.send({ Success: "verified", uuid: data.uu_id });
            } else {
              res.send({ Success: "unverified" });
            }
          }
        }
      });
    } else {
      res.send({ Success: "password is not matched" });
    }
  }
});

router.route("/checkuser").get((req, res) => {
  var personInfo = req.query;

  User.findOne({ uu_id: personInfo.id }, function (err, data) {
    if (!data) {
      res.send({ Success: "unverified" });
    } else {
      res.send({ Success: "verified" });
    }
  });
});

router.route("/registerNFT").post((req, res) => {
  var nftInfo = req.body.params;
  console.log("SDFDSF", nftInfo.address, ":", nftInfo.id);

  if (!nftInfo.address) {
    res.send({ info: "no address" });
  } else {
    if (true) {
      var newNFT = new Worms({
        id: "",
        email: "nftInfo.email",
        address: nftInfo.address,
        tokenId: nftInfo.id,
      });

      newNFT.save(function (err, NFT) {
        if (err) console.log(err);
        else console.log("Success");
      });
      Worms.find({ address: nftInfo.address }, function (err, data) {
        console.log(data.length);
        res.send({ Success: data.length });
      });
    } else {
      res.send({ Success: "password is not matched" });
    }
  }
});

router.route("/calcNFT").post((req, res) => {
  var nftInfo = req.body.params;
  console.log(nftInfo.address);

  if (!nftInfo.address) {
    res.send({ info: "no address" });
  } else {
    var addressNum;
    var wholeNum;

    Worms.find({}, function (err, data) {
      wholeNum = data.length;
      console.log(wholeNum);

      Worms.find({ address: nftInfo.address }, function (err, data) {
        addressNum = data.length;
        console.log(addressNum);
        res.send({ addressNum: addressNum, wholeNum: wholeNum });
      });
    });
  }
});

module.exports = router;

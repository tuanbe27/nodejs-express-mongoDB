User = require("mongoose").model("user");

exports.get_all_user = async (req, res, next) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    console.error(error.message);
    next();
  }
};
exports.read_a_user = function (req, res) {
  let checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
  if (!checkForHexRegExp.test(req.params.id)) {
    return res.status(404).send("page not found");
  }
  User.findById(req.params.id, function (err, data) {
    if (err) throw err;
    res.json(data);
  });
};

exports.create_a_user = function (req, res) {
  var new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function (req, res) {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, data) {
      if (err) throw err;
      res.json(data);
    }
  );
};
exports.delete_a_user = function (req, res) {
  User.findByIdAndDelete(req.params.id, function (err) {
    if (err) throw err;
    res.send("deleted");
  });
};

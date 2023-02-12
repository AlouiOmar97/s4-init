var user = require("./userModel")

async function add(res, u) {
    await new user({
        name: u.name,
        pwd: u.pwd
    }).save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json(data)
        }
    })
}

async function list(res) {
    await user.find().then((err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data)
        }
    })
}

listOfUsers = async (req, res, next) => {
    user.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data)
        }
    })
}

module.exports = { add, list, listOfUsers }
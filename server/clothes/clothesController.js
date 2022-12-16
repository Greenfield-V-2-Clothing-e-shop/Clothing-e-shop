var clothes = require("./clothes")

async  function getAll(req, res) {
    const clothess = await clothes.find({}).sort({createdAt:-1})
    res.json(clothess);
  }
function createOne(req, res) {
    console.log(req.user);
    clothes
        .insertMany({
            name: req.body.name,
            brand: req.body.brand,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            size: req.body.size,
            color: req.body.color,
        })
        .then((data) => {
            res.send(data)
            console.log("done");
        });
}

function updateOne(req, res) {
    console.log(req.params);

    clothes
        .findOneAndUpdate(
            { _id: req.params.id },
            {
                name: req.body.name,
                imageUrl: req.body.imageUrl,
                price: req.body.price,
                size: req.body.size,
                color: req.body.color,
            }
        )
        .then(() => {
            res.send("updated");
        })
        .catch((err) => {
            res.send(err);
        });
}

function deleteOne(req, res) {
    console.log(req.params);
    let id = req.params.id;
    console.log(id);
    clothes
        .findByIdAndDelete(id)
        .then(() => {
            res.send("deleted");
        })
        .catch((err) => {
            res.send(err);
        });
}

function getOne(req, res) {
    clothes
        .findById(req.params.id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.send(err);
        });
}


module.exports = { deleteOne, updateOne, createOne, getAll, getOne };

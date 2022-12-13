var clothes = require("./clothes")

async function getAll(req, res) {
    const clothes = await car.find({});
    res.send(clothes);
}
function createOne(req, res) {
    console.log(req.user);
    car
        .insertMany({
            name: req.body.name,
            brand: req.body.brand,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            size: req.body.size,
            color: req.body.color,
        })
        .then((data) => {
            res.send(data);
        });
}

function updateOne(req, res) {
    console.log(req.params);

    car
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
    car
        .findByIdAndDelete(id)
        .then(() => {
            res.send("deleted");
        })
        .catch((err) => {
            res.send(err);
        });
}

function getOne(req, res) {
    car
        .findById(req.params.id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.send(err);
        });
}


module.exports = { deleteOne, updateOne, createOne, getAll, getOne };

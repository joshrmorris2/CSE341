const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    try {
        const result = await mongodb.getDb().db().collection('contacts').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getSingle = async (req, res, next) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db().collection('contacts').find({_id: userId});
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
    } catch {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAll,
    getSingle
};
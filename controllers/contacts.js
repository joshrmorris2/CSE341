const { response } = require('express');
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
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const create = async (req, res, next) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const update = async (req, res, next) => {
    try {
        const response = await mongodb.getDb().db().collection('contacts').updateOne(
            { _id: new ObjectId(req.params.id) }, 
            {
                $set: {            
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    favoriteColor: req.body.favoriteColor,
                    birthday: req.body.birthday,
                },
            });
            if(response.modifiedCount > 0) {
                res.status(204).send();
            } else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
};

const remove = async (req, res, next) => {
    try {
        const result = await mongodb.getDb().db().collection('contacts').deleteOne(
            { _id: new ObjectId(req.params.id) }, true);

        if (result.deletedCount > 0 ) {
            res.status(200).send();
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = {
    getAll,
    getSingle,
    create,
    update,
    remove
};
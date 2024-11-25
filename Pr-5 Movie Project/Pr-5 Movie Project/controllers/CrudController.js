const UserModel = require('../models/UserModel');

const fs = require('fs');

const formPage = (req, res) => {
    return res.render('form')
}
const addRecord = async (req, res) => {
    try {
        const { movie, moviename, movieintro, movieprice } = req.body;
        await UserModel.create({
            movie: movie,
            moviename: moviename,
            movieintro: movieintro,
            movieprice: movieprice,
            image: req.file.path,
        })
        return res.redirect('back')
    } catch (err) {
        console.log(err);
        return false;

    }
}
const viewData = async (req, res) => {
    try {
        let users = await UserModel.find({});
        return res.render('view', {
            users
        })
    } catch (err) {
        console.log(err);
        return false
    }
}
const deleteData = async (req, res) => {
    try {
        let id = req.query.id;
        let old = await UserModel.findById(id);
        fs.unlinkSync(old.image);

        await UserModel.findByIdAndDelete(id);
        return res.redirect('back')


    } catch (err) {
        console.log(err);
        return false
    }
}
const editrecord = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await UserModel.findById(id);


        return res.render('edit', {
            single
        })


    } catch (err) {
        console.log(err);
        return false
    }
}
module.exports = {
    formPage, addRecord, viewData, deleteData, editrecord
}
import model from '../model/index'
import { Op } from 'sequelize'

const controller = {};

controller.getAll = async function(req, res) {
    try {
        const userData = await model.user.findAll();
        if(userData.length > 0){
            res
                .status(200)
                .json({message: "connection successfully established", data: userData});
        }else{
            res.status(200).json({message: "connection failed", data: []});
        }
    } catch (error) {
        res.status(404).json({message: error});
    }
}

controller.getUsername = async function (req, res) {
    try {
        const userData = await model.user.findAll({
        where: { username: { [Op.like]: `%${req.params.username}%` } },
        });
        if (userData.length > 0) {
            res
            .status(200)
            .json({ message: "Connection successful", data: userData });
        } else {
        res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.createAt = async function (req, res) {}
controller.editAt = async function (req, res) {}
controller.deleteAt = async function (req, res) {}

export default controller;
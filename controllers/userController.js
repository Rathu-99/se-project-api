
const Donee = require("../models/Donee");
const Rider = require("../models/Rider");
const donator = require("../models/donator");


module.exports = {

    getDonator: async (req, res) =>{
        try {
            const data = await donator.find()
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `${error.message}` });
        }
    },

    createDonator: async (req, res) =>{
        try {
            const user = await donator.create({
                donatorname: req.body.donatorname,
                address: req.body.address,
                phonenumber: req.body.phonenumber,
                foodName: req.body.foodName,
                foodType: req.body.foodType,
                category: req.body.category,
                mealValidTime: req.body.mealValidTime,
                parcels: req.body.parcels,
                paidOrNot: req.body.paidOrNot
            })
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `${error.message}` });
        }
    },

    getDonee: async (req, res) =>{
        try {
            const data = await Donee.find()
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `${error.message}` });
        }
    },

    createDonee: async (req, res) =>{
        try {
            const user = await Donee.create({
                receivername: req.body.receivername,
                address: req.body.address,
                phonenumber: req.body.phonenumber,
                parcels: req.body.parcels,
                district: req.body.district,
                city: req.body.city
            })
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `${error.message}` });
        }
    },

    getRider: async (req, res) =>{
        try {
            const data = await Rider.find()
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `${error.message}` });
        }
    },

    createRider: async (req, res) =>{
        try {
            const user = await Donee.create({
                company: req.body.company,
                address: req.body.address,
                riderName: req.body.riderName,
                phoneNumber: req.body.phoneNumber,
                district: req.body.district,
                city: req.body.city
            })
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `${error.message}` });
        }
    }
}
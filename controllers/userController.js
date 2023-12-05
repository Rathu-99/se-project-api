const User = require("../models/User");
const donator = require("../models/donator");


module.exports = {
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Sucessfully Deleted")
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `${error.message}` });
        }
    },

    getUser: async (req, res) =>{
        try {
            const user = await User.findById(req.params.id)

            if(!user){
                return res.status(401).json("User doesn't exits.");
            }
            const { password, __v, createdAt, updatedAt, ...userData } = user._doc;

            res.status(200).json(userData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `${error.message}` });
        }
    },

    createDonator: async (req, res) =>{
        try {
            const user = await donator.findById({
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
    }
}
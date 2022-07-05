const Order = require("../models/order")
const express = require("express")
const router = express.Router()
const {requireAuthenticatedUser} = require("../middleware/security")

router.get("/", requireAuthenticatedUser, async(req, res, next) => {
    try{
        const {user} = res.locals
        const orders = await Order.listOrdersForUser(user)
        return res.status(200).json({orders})
    } catch(err){
        next(err)
    }
})

router.post("/", requireAuthenticatedUser, async (req, res, next) => {
    try{
        const {user} = res.locals
        //return res.status(201).json(req.body)
        const order = await Order.createOrder({user, order: req.body.order})
        return res.status(201).json({order})
    }catch(err){
        next(err)
    }
})

module.exports = router
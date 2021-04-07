const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()



// Tanks model
const Tank = require("../models/Tanks")


// /tanks router


// Get all tanks
router.get("/", (req,res) => {

    Tank.find()
    .then(tanks => {

        const tankResponse = {
            description: "GET all tanks",
            count: tanks.length,
            tanks
        }

        console.log(tankResponse)
        res.json(tankResponse)
    })
    .catch(err => {

        console.log(err)
        res.json({
            message: "Not found"
        })

    })
})


// Post a new tank
router.post("/", (req, res)=> {

    const newTank = new Tank({

        name: req.body.name,

        type: req.body.type,

        origin: req.body.origin,

        inService: req.body.inService,

        mass: req.body.mass,

        crew: req.body.crew

    })

    newTank.save()
    .then(tank => {

        const tankResponse = {
            description: "POST a tank",   
            tank
        }

        console.log(tankResponse)
        res.json(tankResponse)

    })
    .catch(err => {

        console.log(err)
        res.json("Not send")

    })

})

// Get a particular tank
router.get("/:tankId", (req, res)=> {

    Tank.findById({_id: req.params.tankId})
    .then(tank => {

        const tankResponse = {
            description: "GET a particular tank",
            tank
        }

        console.log(tankResponse)
        res.json(tankResponse)

    })
    .catch(err => {

        console.log(err)
        res.json({
            message: "Tank not found"
        })

    })
})

// Uptade a tank
router.patch("/:tankId", (req, res)=> {
    Tank.findByIdAndUpdate({_id: req.params.tankId}, {$set: req.body})
    .then(tank => {

        console.log(tank)
        res.json(tank)
    })
    .catch(err => {

        console.log(err);
        res.json({
            message: "Not uptaded"
        })

    })
})

// delete a tank
router.delete("/:tankId", (req, res)=> {

    Tank.findByIdAndRemove({_id: req.params.tankId})
    .then(tank => {

        const tankResponse = {
            description: "DELETE a particular tank",
            tank
        }


        console.log(tankResponse)
        res.json(tankResponse)
    })
    .catch(err => {

        console.log(err)
        res.json({
            message: "Not deleted"

        })
    })
})




module.exports = router
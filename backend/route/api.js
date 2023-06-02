const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.get("/get", async (req, res) => {
    try {
        const allTasks = await Task.find({});
        res.status(200).json(allTasks);
    } catch(error) {
        console.log(error);
    }
})

router.post("/post", async (req, res) => {
    try {
        const createTask = await Task.create(req.body);
        res.status(200).json(createTask);
    } catch(error) {
        console.log(err);
    }
})

module.exports = router;
const express = require("express");
const router = express.Router();

//Model Tasks
const Task = require("../models/tasks");

//Get all Tasks

router.get("/", async (req, res) => {
    const task = await Task.find();
    res.json(task);
});
router.post("/add", async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: "Task Saved" });
});

//Update Tasks
router.put("/update/:id", async (req, res) => {
    const { title, description } = req.body;
    const newTask = ({ title, description });
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({ status: "Task Update" });
});

//Delete Tasks
router.delete("/delete/:id", async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ status: "Task Delete" });
});


module.exports = router;

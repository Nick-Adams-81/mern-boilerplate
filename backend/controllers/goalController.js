const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc     Get Goals
// @Route    GET /api/goals
// @Access   Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
})

// @desc     Set Goals
// @Route    POST /api/goals
// @Access   Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})


// @desc     Update Goals
// @Route    PUt /api/goals/:id
// @Access   Private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id) {
        res.status(401)
            throw new Error('User not authoerized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedGoal)
})

// @desc     Delete Goals
// @Route    DELETE /api/goals/:id
// @Access   Private
const deleteGoals = asyncHandler(async (req, res) => {
    const deleteGoal = await Goal.findById(req.params.id)
    if(!deleteGoal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(deleteGoal.user.toString() !== user.id) {
        res.status(401)
            throw new Error('User not authoerized')
    }
    await deleteGoal.deleteOne({})
    res.status(200).json({ id: req.params.id })
})


module.exports = { getGoals, setGoals, updateGoals, deleteGoals }
const asyncHandler = require('express-async-handler')

// @desc     Get Goals
// @Route    GET /api/goals
// @Access   Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get Goals"})
})

// @desc     Set Goals
// @Route    POST /api/goals/:id
// @Access   Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Set Goals"})
})

// @desc     Update Goals
// @Route    PUt /api/goals
// @Access   Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update Goals"})
})

// @desc     Delete Goals
// @Route    DELETE /api/goals/:id
// @Access   Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Delete Goals"})
})


module.exports = { getGoals, setGoals, updateGoals, deleteGoals }
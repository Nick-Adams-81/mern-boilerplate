import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalsSlice'

const GoalItem = ({ goal }) => {
    const dispatch = useDispatch()
    return (
    <div>
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <button className="close" onClick={() => dispatch(deleteGoal(goal.id))}>X</button>
    </div>
    )
}

export default GoalItem
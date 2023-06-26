import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from '../features/goals/goalsSlice'

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch()


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }))
    setText('')
  };
  return (
    <section>
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
            <button className="btn btn-block" type='submit'>Add Goal</button>
        </div>
      </form>
    </section>
  );
};
export default GoalForm;

import React from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

const Habits = (props) => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit)
  }
  const handleDecrement = (habit) => {
    props.onDecrement(habit)
  }
  const handleDelete = (habit) => {
    props.onDelete(habit)
  }
  const handleAdd = (name) => {
    props.onAdd(name)
  }
  const handleReset = () => {}

  return (
    <>
    <HabitAddForm onAdd={handleAdd} />
    <ul>
      {
        props.habits.map((habit) => (
          <Habit 
          key={habit.id} 
          habit={habit} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          />
        ))
      }
    </ul>
    <button className='habits-reset' onClick={props.onReset}>Reset All</button>
    </>
  );
};

export default Habits;
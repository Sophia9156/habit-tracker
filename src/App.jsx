import './App.css';
import Habits from './components/Habits';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

const App = () => {
  const initialHabits = [
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ];
  const [habits, setHabits] = useState(initialHabits)

  const handleIncrement = (habit) => {
    let newHabits = habits.map((item) => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1}
      }

      return item;
    })
    setHabits(newHabits)
  }
  const handleDecrement = (habit) => {
    let newHabits = habits.map((item) => {
      if(item.id === habit.id) {
        const count = habit.count -1
        return {...habit, count: count < 1 ? 0 : count}
      }
      return item;
    })
    setHabits(newHabits)
  }
  const handleDelete = (habit) => {
    let newHabits = habits.filter(item => item.id !== habit.id)
    setHabits(newHabits)
  }
  const handleAdd = (name) => {
    let newHabits = [...habits, {id: Date.now(), name: name, count: 0}]
    setHabits(newHabits)
  }
  const handleReset = () => {
    let newHabits = habits.map((habit) => {
      if(habit.count !== 0) {
        return {...habit, count: 0}
      }
      return habit;
    })
    setHabits(newHabits)
  }

  return (
    <>
      <Navbar totalCount={habits.filter(item => item.count > 0).length} />
      <Habits
      habits={habits}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onDelete={handleDelete}
      onAdd={handleAdd}
      onReset={handleReset}
      />
    </>
  );
};

export default App;
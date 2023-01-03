import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(counter);

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', amount: 7 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT', amount: 9 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

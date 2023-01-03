import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  console.log(showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLECOUNTER' });
  };

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', amount: 7 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT', amount: 9 });
  };

  const counterElement = (
    <>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && counterElement}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

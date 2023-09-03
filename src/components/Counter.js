import classes from './Counter.module.css';
import { useSelector, connect, useDispatch } from 'react-redux'
const Counter = () => {

  // there is a useselector hook to get the state values when itchanges also it renders the components

  const counterValue = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }
  const incrementByTwoHandler = () => {
    dispatch({ type: 'increment5' })
  }
  const decrementByTwoHandler = () => {
    dispatch({ type: 'decrement5' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counterValue} --</div>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={incrementHandler}>Increasea Counter</button>
        <button onClick={decrementHandler}>Decrease Counter</button>

      </div>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
        <button onClick={incrementByTwoHandler}>Increasea Counter(+2)</button>
        <button onClick={decrementByTwoHandler}>Decrease Counter (-2)</button>

      </div>
    </main>
  );
};

export default Counter;

import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../Store';
const Counter = () => {

  // there is a useselector hook to get the state values when itchanges also it renders the components

  const counterValue = useSelector((state) => state.counterSlice.counter)
  const showCounter = useSelector((state) => state.counterSlice.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementby5(5))
  }
  const decrementBy5Handler = () => {
    dispatch(counterActions.decrementby5(5))
  }

  const toggleCounter = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counterValue} --</div>}

      <div style={{ padding: "5px" }}><button onClick={toggleCounter}>Toggle Counter</button></div>

      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={incrementHandler}>Increase Counter</button>
        <button onClick={decrementHandler}>Decrease Counter</button>

      </div>
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
        <button onClick={incrementBy5Handler}>Increasea Counter(+5)</button>
        <button onClick={decrementBy5Handler}>Decrease Counter (-5)</button>

      </div>
    </main>
  );
};

export default Counter;

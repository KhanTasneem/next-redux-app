"use client";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { decrement, increment } from "../redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state:IRootState) => state.counter.value);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
export default Counter;

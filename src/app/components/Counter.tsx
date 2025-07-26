"use client";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { decrement, increment } from "../redux/counterSlice";
import { Metadata } from "next";
export const metadeta: Metadata={
  title: "Counter App",
  }
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state:IRootState) => state.counter.value);
  
  return (
    <div className="mx-auto border p-5 m-5 w-100 flex flex-col items-center justify-center space-y-2">
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

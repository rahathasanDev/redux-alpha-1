import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const count = useSelector((state) => state.counter.count);
  const {count} = useAppSelector((state ) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="h-screen w-full">
        <h1 className="text-3xl font-bold underline flex justify-center">
          Redux Counter App
        </h1>

        <div className="flex justify-center items-center m-10">
          <button onClick={()=> dispatch(incrementByValue(5))} className="px-3 mr-2 py-2 rounded-md text-2xl bg-yellow-600 text-white   font-semibold">IncrementByValue</button>
          <button onClick={()=> dispatch(increment())} className="px-3 py-2 rounded-md text-2xl bg-green-600 text-white   font-semibold">Increment</button>
          <h1 className="text-2xl px-2">{count}</h1>
          <button onClick={()=> dispatch(decrement())} className="px-3 py-2 rounded-md text-2xl bg-red-500 text-white   font-semibold">Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;

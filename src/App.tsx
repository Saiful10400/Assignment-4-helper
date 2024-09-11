import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,makeZero, incrementByValue } from "./Redux/feathcer/counterSlice";
import { Button } from "./Components/Ui/button";

const App = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.counterStore.count)  // count is from slice count.
  return (
    <div className="flex justify-center gap-x-7 mt-5">
      <button onClick={()=>dispatch(increment())} className="text-xl border border-black rounded-lg px-2 py-1">
        Increment
      </button>
      <button onClick={()=>dispatch(makeZero())} className="text-xl border border-black rounded-lg px-2 py-1">
        Make Zero
      </button>
      <h1 className="text-4xl">{data}</h1>
      <button onClick={()=>dispatch(decrement())} className="text-xl border border-black rounded-lg px-2 py-1 ">
        Decrement
      </button>
      
      <Button  onClick={()=>dispatch(incrementByValue(500))} className=" btn bg-emerald-700 btn-primary btn-md">Increment By 500</Button>
    </div>
  );
};

export default App;

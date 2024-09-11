import React from "react";
import { useCreateRoomMutation, useRoomsQuery } from "./Redux/api/api";

const Booking = () => {
  const { data, error, isLoading } = useRoomsQuery(undefined);
  const[setRoom,{isError,isLoading:fetchLoad,data:fetchData}]=useCreateRoomMutation()


  const submitHandle = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      roomNo: 101,
      floorNo: 2,
      capacity: 20,
      pricePerSlot: 500,
      amenities: ["table", "Wi-fi"], 
    };
    setRoom(formData)
  };
  return (
//     <div>
//       {!isLoading && !isError&&
//         data.data.map((item, idx) => {
//           return (
//             <h1 key={idx}>
//               {(idx += 1)}. Room name:{" "}
//               <span className="font-bold text-lg text-green-600">
//                 {item.name}
//               </span>
//             </h1>
//           );
//         })}

//       <div className="mt-5  w-max">
//         <form
//           onSubmit={submitHandle}
//           action="
// "
//         >
//           <input name="name" type="text" className="border border-black mr-5 py-4 px-2 text-lg font-semibold" />
//           <button className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
<h1>Saiful</h1>
  );
};

export default Booking;

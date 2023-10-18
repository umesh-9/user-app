import React from "react";
import users from "@/constants/data";
const UsersList = () => {
  return (
    <div className=" w-full">
      <h2 className="text-center text-5xl my-4">User List</h2>
      <ul className=" flex flex-1 flex-wrap gap-2 ml-[200px] ">
        {users.map((user, index) => (
          <li key={index} className="bg-slate-700 w-[25%]  rounded-md p-3 ">
            <strong>Name:</strong> {user.name}
            <br />
            <strong>Address:</strong> {user.address}
            <br />
            <strong>Gender:</strong> {user.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

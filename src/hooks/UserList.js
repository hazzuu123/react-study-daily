import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const UserList = () => {
  const userData = useFetch("https://jsonplaceholder.typicode.com/users"); // useFetch
  return (
    <div>
      <ul>
        {userData.map((item) => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

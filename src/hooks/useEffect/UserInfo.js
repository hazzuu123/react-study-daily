import React, { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = () => {
  const [userData, setUserData] = useState(null); // 유저의 상태를 관리하는 변수
  const [error, setError] = useState(null); // 요청 에러

  // 데이터를 가져오는 부분을 useEffect를 사용하여 리팩토링하세요.
  useEffect(() => {
    console.log("This is User Component");
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://example.com/api");
        setUserData(response.data);
      } catch (e) {
        setError("Failed to fetch user data");
      }
    };
    fetchUserData();
  }, []);
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfo;

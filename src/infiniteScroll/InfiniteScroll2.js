import React, { useState } from "react";
import axios from "axios";
import styles from "./InfiniteScroll.module.css";
import useInfiniteScroll from "./useInfiniteScroll";

const InfiniteScroll2 = () => {
  const [items, setItems] = useState([]); // 가져올 아이템 리스트
  /** 데이터 가져오기 */
  const fetchData = async (page) => {
    console.log(page);
    const API_KEY = "_P-zEd16r9d1gojTfckT6Oer2TNspjAxbDmwimgNVQc";
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${page}&per_page=20`
    );
    setItems((prevItems) => [...prevItems, ...response.data]);
  };

  const { pageEndRef, isLoading, error } = useInfiniteScroll(fetchData);

  if (error) return <div>error</div>;

  return (
    <div>
      {/* 리스트 */}
      <ul className={styles.container}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            {item.id}
          </li>
        ))}
        {/* 로딩중일 때 */}
        {isLoading && <div>loading...</div>}
      </ul>
      {/* 리스트 바로 아래를 감지하도록 설정 */}
      <div ref={pageEndRef}></div>
    </div>
  );
};

export default InfiniteScroll2;

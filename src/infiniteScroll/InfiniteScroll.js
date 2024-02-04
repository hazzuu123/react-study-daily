import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./InfiniteScroll.module.css";

const InfiniteScroll = () => {
  const pageEndRef = useRef(null); // 페이지 끝을 나타내는 요소에 대한 참조
  const [items, setItems] = useState([]); // 가져올 아이템 리스트
  const [page, setPage] = useState(1); // 페이지 수

  useEffect(() => {
    // IntersectionObserver를 사용하여 페이지 끝에 도달할 때마다 fetchData를 호출
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchData(page);
        }
      },
      { threshold: 1 }
    );

    if (pageEndRef.current) {
      observer.observe(pageEndRef.current); // 주시 시작
    }

    return () => {
      if (pageEndRef.current) {
        observer.unobserve(pageEndRef.current); // 옵저버 제거
      }
    };
  }, [page]);

  /** 데이터 가져오기 */
  const fetchData = async (page) => {
    const API_KEY = "_P-zEd16r9d1gojTfckT6Oer2TNspjAxbDmwimgNVQc";
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${page}&per_page=20`
    );
    setItems((prevItems) => [...prevItems, ...response.data]);
    setPage((prev) => prev + 1); // 페이지 증가
  };

  return (
    <div>
      {/* 리스트 */}
      <ul className={styles.container}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            {item.id}
          </li>
        ))}
      </ul>
      {/* 리스트 바로 아래를 감지하도록 설정 */}
      <div ref={pageEndRef}></div>
    </div>
  );
};

export default InfiniteScroll;

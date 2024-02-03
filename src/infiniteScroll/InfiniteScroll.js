import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./InfiniteScroll.module.css";

const InfiniteScroll = () => {
  const pageEnd = useRef(null);
  const [items, setItems] = useState([]); // 가져올 아이템 리스트
  const [page, setPage] = useState(1); // 페이지 수

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (pageEnd.current) {
      observer.observe(pageEnd.current);
    }

    return () => {
      if (pageEnd.current) {
        observer.unobserve(pageEnd.current);
      }
    };
  }, []);

  useEffect(() => {
    if (page !== 1) {
      fetchData(page);
    }
  }, [page]);

  /** 데이터 가져오기 */
  const fetchData = async (pageNumber) => {
    const API_KEY = "_P-zEd16r9d1gojTfckT6Oer2TNspjAxbDmwimgNVQc";
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${pageNumber}&per_page=20`
    );
    setItems((prevItems) => [...prevItems, ...response.data]);
  };

  return (
    <div>
      <ul className={styles.container}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            {item.id}
          </li>
        ))}
      </ul>
      <div ref={pageEnd}></div>
    </div>
  );
};

export default InfiniteScroll;

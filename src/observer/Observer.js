import React, { useEffect, useRef } from "react";
import styles from "./Observer.module.css";
const Observer = () => {
  // 옵저버 생성
  // 감시중 박스가 화면에 등장하거나 사라지면 여기 코드를 실행해줌
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 등장하면 실행
        entry.target.style.opacity = 1;
      } else {
        // 사라지면 실행
        entry.target.style.opacity = 0;
      }
    });
  });

  // 어떤 요소를 감시할지
  const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    // 옵저버를 각 요소에 연결
    divRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // 컴포넌트가 언마운트될때 옵저버 정리
    return () => {
      divRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [observer]);

  return (
    <div className={styles.container}>
      <div ref={divRefs[0]} className={styles.item}>
        <h1>iPhone 15 출시</h1>
      </div>
      <div ref={divRefs[1]} className={styles.item}>
        <h1>충전포트를 USB-C 타입으로 바꿔달라고요?</h1>
      </div>
      <div ref={divRefs[2]} className={styles.item}>
        <h1>그래서 충전포트를 제거했습니다.</h1>
      </div>
      <div ref={divRefs[3]} className={styles.item}>
        <img
          src="https://cdn.balpumnews.com/news/photo/202306/284_987_4942.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Observer;

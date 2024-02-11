import React, { useEffect, useRef, useState } from "react";

const useInfiniteScroll = (fetchData) => {
  const pageEndRef = useRef(null);
  const [page, setPage] = useState(0); // 페이지 수
  const [isLoading, setLoading] = useState(false); // 로딩 여부
  const [error, setError] = useState(null); // 에러

  useEffect(() => {
    // IntersectionObserver를 사용하여 페이지 끝에 도달할 때마다 fetchData를 호출
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1); // 페이지 증가
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
  }, [fetchData]);

  useEffect(() => {
    if (page === 0) return;
    setLoading(true); // 데이터 로딩중
    fetchData(page) // 서버에서 데이터 가져오기
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      }); // 데이터 로딩 완료
  }, [page]);

  return {
    pageEndRef,
    isLoading,
    error,
  };
};

export default useInfiniteScroll;

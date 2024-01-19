import { useEffect, useState } from "react";
import axios from "axios";

/** 'useFetch: 주어진 URL에서 데이터를 가져오는 커스텀 훅 */
const useFetch = (url) => {
  const [data, setData] = useState([]); // data 상태 변수 선언

  /** useEffect: 컴포넌트가 랜더링될때 실행되는 비동기 작업 수행 */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url); // GET 요청
        setData(response.data); // 받아온 데이터로 상태 업데이트
      } catch (e) {
        console.error("Fetch Data Error:", e);
      }
    };
    fetchData();
  }, [url]); // 의존성 배열로 url 추가

  return data; // 데이터를 반환
};
export default useFetch;

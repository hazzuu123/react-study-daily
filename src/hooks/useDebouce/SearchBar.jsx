import { useState, useRef } from "react";
import { ReactComponent as SearchIcon } from "./../../images/searchIcon.svg";
/** 'SearchBar': 검색창 */
const SearchBar = () => {
  const inputRef = useRef();
  const [inputText, setInputText] = useState(""); // 검색 텍스트
  const [placeHolder, setPlaceHolder] =
    useState("또 가고싶은 곳을 검색해보세요!");
  const [isFocused, setIsFocused] = useState(false); // 포커스 여부

  const handleInputChange = (e) => setInputText(e.target.value);
  /** 'handleSearch': 검색 버튼 클릭했을 때 api 요청보내는 함수 */
  const handleSearch = (e) => {
    e.preventDefault();

    // 텍스트가 비었다면 다시 포커스를 검색창으로 이동
    inputRef.current.focus();
    console.log(inputText);
  };

  /** 'handleFocus': 검색창이 포커스됐을때 실행하는 함수 */
  const handleFocusIn = (e) => {
    setIsFocused(true);
    setPlaceHolder("성신여대 안주 맛집");
    e.target.style.borderBottomColor = "pink"; // 밑줄 색을 핑크색으로 변경
  };

  /** 'handleFocus': 검색창이 포커스 아웃됐을때 실행하는 함수 */
  const handleFocusOut = (e) => {
    setIsFocused(false);
    setPlaceHolder("또 가고싶은 곳을 검색해보세요!");
    e.target.style.borderBottomColor = ""; // 밑줄 색을 원래색으로 변경
  };
  return (
    <form className="flex" onSubmit={handleSearch}>
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        placeholder={placeHolder}
        onChange={handleInputChange}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
        className="flex-1 text-xs border-b outline-none ps-2 h-7"
      />
      <button
        type="submit"
        className="outline-none"
        onFocus={() => setIsFocused(true)}
      >
        <SearchIcon
          fill={isFocused ? "pink" : "#D9D9D9"}
          className="search-icon"
        />
      </button>
    </form>
  );
};

export default SearchBar;

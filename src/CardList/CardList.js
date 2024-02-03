import React from "react";

const CardList = () => {
  const books = [
    { id: 0, author: "이웅모", title: "Deep Dive" },
    { id: 1, author: "정유정", title: "7년의 밤" },
    { id: 2, author: "최진영", title: "이제야 언니에게" },
    { id: 3, author: "전지성", title: "그린 쇼크" },
    { id: 4, author: "노인경", title: "고슴도치 엑스" },
    { id: 5, author: "이민진", title: "백만장자를 위한 공짜 음식 1" },
  ];
  return (
    // 가로 스크롤바
    <div className="px-4">
      {/* 박스 속성: overflow-hidden, overflow-x-auto */}
      <ul className="flex w-full space-x-2 overflow-hidden overflow-x-auto scrollbar-hide">
        {books.map((item) => (
          // 아이템 속성: shrink-0
          // shrink-0을 사용하는 이유? flex가 자동으로 width를 줄이는 것을 막기 위함
          <li key={item.id} className="w-1/4 shrink-0">
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Card = ({ item }) => {
  console.log(item);
  return (
    <div>
      <figure
        className="pb-[80%] h-0 bg-center bg-cover bg-gray-200 bg-no-repeat"
        style={{
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2024/01/22/22/09/map-8526430_1280.jpg"})`,
        }}
      ></figure>
      <div className="bg-red-100 ">
        <p>{item.author}</p>
        <p>{item.title}</p>
      </div>
    </div>
  );
};
export default CardList;

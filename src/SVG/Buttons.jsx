import { useState } from "react";

import { ReactComponent as HeartIcon } from "./../images/HeartIcon.svg";
import { ReactComponent as CouponIcon } from "./../images/CouponIcon.svg";
import { ReactComponent as MyPageIcon } from "./../images/MyPageIcon.svg";
const Buttons = () => {
  const [buttonsHover, setButtonsHover] = useState([false, false, false]); // 버튼

  /** 버튼 Hover 일 때 그라데이션 색 변경 */
  const handleButtonColor = (index, isHovered) => {
    setButtonsHover((prev) => {
      const newHover = [...prev];
      newHover[index] = isHovered;
      return newHover;
    });
  };

  return (
    <div className="App">
      {/* 헤더 버튼 3개 */}
      <div className="flex">
        {/* 쿠폰 버튼 */}
        <Button
          icon={
            <CouponIcon
              stroke={
                // 마우스가 호버될 때는 그라데이션, 해제될 때는 그레이
                buttonsHover[0] ? "url(#paint0_linear_306_2405)" : "#747474"
              }
            />
          }
          label="쿠폰함"
          index={0}
          handleButtonColor={handleButtonColor}
        />
        {/* 관심상점 버튼 */}
        <Button
          icon={
            <HeartIcon
              stroke={
                buttonsHover[1] ? "url(#paint0_linear_306_2405)" : "#747474"
              }
            />
          }
          label="관심상점"
          index={1}
          handleButtonColor={handleButtonColor}
        />
        {/* 마이 버튼 */}
        <Button
          icon={
            <MyPageIcon
              stroke={
                buttonsHover[2] ? "url(#paint0_linear_306_2405)" : "#747474"
              }
            />
          }
          label="마이"
          index={2}
          handleButtonColor={handleButtonColor}
        />
      </div>
    </div>
  );
};

//** 'Button': 버튼이 호버될 때와 호버가 해제될 때 색상을 변경한다 */
const Button = ({ icon, label, index, handleButtonColor }) => {
  return (
    // 버튼 요소에 마우스 진입시와 마우스 이탈시 handleButtonColor 함수를 호출하여 hover 상태를 갱신
    <button
      onMouseEnter={() => handleButtonColor(index, true)}
      onMouseLeave={() => handleButtonColor(index, false)}
      className="flex flex-col items-center  w-14 h-12 text-[#19191980] hover:text-[#FF0069] text-sm "
    >
      {/* 아이콘 */}
      {icon}
      {/* 텍스트 */}
      <p> {label}</p>
    </button>
  );
};
export default Buttons;

import { useState } from "react";

import { ReactComponent as HeartIcon } from "./../images/HeartIcon.svg";
import { ReactComponent as CouponIcon } from "./../images/CouponIcon.svg";
import { ReactComponent as MyPageIcon } from "./../images/MyPageIcon.svg";
const Buttons = () => {
  const [buttonsHover, setButtonsHover] = useState([false, false, false]); // 버튼

  /** 버튼 Hover 일 때 그라데이션 색 변경 */
  const handleButtonColor = (index, isHovered) => {
    console.log(index);
    setButtonsHover((prev) => {
      const newHover = [...prev];
      newHover[index] = isHovered;
      return newHover;
    });
  };
  return (
    <div className="App">
      {/* 헤더 버튼 3개 */}
      <ul className="flex">
        <Button
          icon={
            <CouponIcon
              stroke={
                buttonsHover[0] ? "url(#paint0_linear_306_2405)" : "#747474"
              }
            />
          }
          label="쿠폰함"
          index={0}
          handleButtonColor={handleButtonColor}
        />
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
      </ul>
    </div>
  );
};

//** 헤더 버튼 */
const Button = ({ icon, label, index, handleButtonColor }) => {
  return (
    <button
      onMouseEnter={() => handleButtonColor(index, true)}
      onMouseLeave={() => handleButtonColor(index, false)}
      className="flex flex-col items-center  w-14 h-12 text-[#19191980] hover:text-[#FF0069] text-sm "
    >
      {icon}
      <p> {label}</p>
    </button>
  );
};
export default Buttons;

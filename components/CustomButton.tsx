"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon,
}: Props) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="button icon"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;

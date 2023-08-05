"use client";

import { CarType } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import { useCallback, useState } from "react";
import Image from "next/image";
import CarDetails from "./CarDetails";

type Props = {
  car: CarType;
};

const CarCard = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, transmission, drive, make, model, year } = props.car;
  const carPrice = useCallback(() => calculateCarRent(city_mpg, year), []);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carPrice()}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex mt-2 w-full">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] ">
              {transmission === "a" ? "automatic" : "manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px] ">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px] ">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>

        <CarDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          car={props.car}
        />
      </div>
    </div>
  );
};

export default CarCard;
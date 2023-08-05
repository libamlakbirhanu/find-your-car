import { CarType } from "@/types";

export const fetchCars = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3c9aac868emshf7b3e44ef1a1479p1711c7jsne37eb14f9904",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

  const response = fetch(url, options);

  const cars = (await response).json();

  return cars;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

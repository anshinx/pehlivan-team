import React from "react";
import { cars } from "@/constants";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
function Car({ params }: { params: { car: string } }) {
  const selectedCar = cars[Number(params.car)];
  return (
    <div className="bg-[#1f1f1f] text-white flex flex-col gap-10 lg:p-10 lg:pt-24 py-16 min-h-[100vh]">
      <div className=" flex lg:flex-row flex-col gap-10 m-10 ">
        <div id="cardesc  " className="lg:w-[35vw]">
          <h1 className="text-4xl font-bold">{selectedCar.name}</h1>
          <div className="flex">
            TAKIM KAPTANI :<b>{selectedCar.teamLeader}</b>
          </div>
          <h2>{selectedCar.year}</h2>
          <h3>{selectedCar.awards.toString()}</h3>
          <p>{selectedCar.carDesc}</p>
        </div>

        <Carousel
          className="lg:w-[45vw]  rounded-lg"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {selectedCar.photos.map((photo, index) => (
              <CarouselItem key={index} className=" w-[80vw] h-[50vh] ">
                <Image
                  key={index}
                  src={photo}
                  alt="car"
                  width={1000}
                  height={1000}
                  style={{}}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Car;

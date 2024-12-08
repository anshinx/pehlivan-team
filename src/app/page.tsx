"use client";
import Motion from "@/components/motion/drag-on-load";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, BatteryCharging, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { members } from "@/constants/members";
import React from "react";
import MainPageHeader from "@/components/main-page-components/MainPageHeader";
import MainPageAboutCards from "@/components/main-page-components/MainPageAboutCards";
import MainPageCars from "@/components/main-page-components/MainPageCars";
import { useScroll } from "framer-motion";

import { motion } from "framer-motion";
import CurrentCar from "@/components/main-page-components/CurrentCar";

export default function Home() {
  const membersArray = JSON.parse(JSON.stringify(members));

  return (
    <div className="bg-gray-950 h-screen w-screen">
      <MainPageHeader />

      <MainPageAboutCards />

      <MainPageCars />

      <CurrentCar />

      <section
        id="achievements"
        className=" bg-slate-200 w-full py-12 md:py-24 lg:py-32"
      >
        <div className="pl-2 pr-2 px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Başarılarımız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Tübitak Efficiency Challenge - 2015
                </h3>
                <p className="text-gray-600">Tasarım Ödüllü</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  FormulaG Güneş Arabaları Yarışı - 2014
                </h3>
                <p className="text-gray-600">Kurul Özel Ödülü</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  FormulaG Güneş Arabaları Yarışı - 2014
                </h3>
                <p className="text-gray-600">Üçünülük Ödülü</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Tübitak Efficiency Challenge - 2016
                </h3>
                <p className="text-gray-600">İkincilik Ödülü</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Tübitak Efficiency Challenge - 2016
                </h3>
                <p className="text-gray-600">
                  Communication Award - En İyi Sunum Ödülü
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="pl-2 pr-2 px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Ekibimizle Tanışın
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {membersArray.map((member: any) => (
              <a key={member.name} className="" href={`/members/${member.id}`}>
                <Card key={member.name}>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <div className="w-24 h-24 rounded-full bg-gray-300">
                      <Image
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-600 text-center">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-black text-white"
      >
        <div className="pl-2 pr-2 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Yolculuğumuza Katılın
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                Elektrikli araçlar ve sürdürülebilir teknolojiyle ilgileniyor
                musunuz? Daha fazla bilgi almak veya ekibimize katılmak için
                bizimle iletişime geçin!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2"></div>
            <Button asChild className=" bg-white text-black hover:bg-gray-200">
              <a href="mailto:pehli1team@gmail.com" className="text-black">
                Bize Ulaşın
              </a>
            </Button>
            <div className="flex flex-col">
              <div>
                Takım Kaptanı :{" "}
                <a href="tel:+905433213813" className="font-bold text-xl">
                  Fatih Coşar : +90 543 321 3813
                </a>
              </div>
              <div>
                Takım Kaptan Yardımcısı :{" "}
                <a href="tel:+905307617004" className="font-bold text-xl">
                  Eşref Kaan Kurtoğlu : +90 530 761 7004
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

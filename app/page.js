import React from "react";
import ImageGallery from "./ImageGallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <div className="flex flex-col justify-center lg:px-1">
          <div className="">
            <Image
              className="relative mx-auto"
              src="/logo.png"
              alt="App Logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <div className="min-w-max">
            <h1 className="text-white text-center">
              {" "}
              ค่าส่วนกลางหมู่บ้านจัดสรร สิรารมย์พลัสเวลโกรว์
            </h1>
          </div>
        </div>
        <ImageGallery />
      </div>
    </main>
  );
}

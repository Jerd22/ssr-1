"use client";

import React from "react";
import ImageGallery from "./ImageGallery";
import Image from "next/image";
import liff from "@line/liff";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const AuthLine = () => {
    setLoading(true);
    liff
      .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
      .then(() => {
        if (liff.isLoggedIn()) {
          //await liff.ready;
          //const profile = await liff.getProfile();
          //setProfile(profile);
          //console.log(profile);
          router.push("/member");
        } else {
          liff.login();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div id="globalLoader">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Loading_Key.gif"
          alt="Loading..."
          width={32}
          height={32}
        />
      </div>
    );
  } else {
    return (
      <main className="flex-1 min-h-screen top-14 relative w-screen">
        <Navbar />
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
          <h1 className="text-white text-lg text-center px-auto my-12">
            ยินดีต้อนรับสู่เว็ปไซต์ อย่างเป็นทางการ
          </h1>
        </div>
        <div className="mx-auto w-full items-center justify-between font-mono text-sm flex flex-col">
          <div className="">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white rounded p-3"
              type="button"
              style={{ width: "auto" }}
              onClick={AuthLine}
            >
              สมัครสมาชิก และ เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </main>
    );
  }
}

"use client";

import liff from "@line/liff";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    function GetLine() {
      liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID }).then(async () => {
        if (liff.isLoggedIn()) {
          await liff.ready;
          const profile = await liff.getProfile();
          //console.log(profile);
          setUser(profile);
          setLoading(false);
        } else {
          router.refresh(); // dirty fix, but it works
          router.push("/", { scroll: false });
          //liff.login();
        }
      });
    }

    GetLine();
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
      <div className="flex-1 min-h-screen relative pt-16 w-screen">
        <div className="w-full h-12 text-center text-white ">
          <h5 className="text-lg">ยินดีต้อนรับ</h5>
          <p className="">{user.displayName}</p>
        </div>
        <div className=" w-max mx-auto mt-10 overflow-y-auto bg-transparent text-white rounded">
          <ul className="space-y-1 w-80">
            <li className="w-full h-12 p-3 hover:bg-gray-400 border">
              <a href="/member/commonfee">
                <p className="">
                  <svg
                    className="w-6 h-6 text-white float-start mx-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  ค่าส่วนกลาง
                </p>
              </a>
            </li>
            <li className="w-full h-12 p-3 hover:bg-gray-400 border">
              <a href="/member/resident" className="">
                <svg
                  className="w-6 h-6 text-white float-start mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <p>สมาชิกที่อาศัย</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

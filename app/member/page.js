"use client";

import liff from "@line/liff";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
          //router.refresh(); // dirty fix, but it works
          //router.push("/", { scroll: false });
          liff.login();
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
          <p className="">{user?.displayName}</p>
        </div>
        <div className="w-max mx-auto mt-10 overflow-y-auto bg-transparent text-white rounded p-3">
          <ul className="space-y-1 w-80 p-2">
            <li className="w-full h-12 p-3 hover:bg-gray-400 border m-2">
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
            <li className="w-full h-12 p-3 hover:bg-gray-400 border m-2">
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
            <li className="w-full h-12 p-3 hover:bg-gray-400 border m-2">
              <a href="/member/cars" className="">
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
                    d="M 3.78125 5.273438 C 4.371094 3.894531 5.730469 3 7.230469 3 L 16.773438 3 C 18.273438 3 19.628906 3.894531 20.21875 5.273438 L 21.40625 8.042969 C 21.519531 8.308594 21.722656 8.523438 21.976562 8.652344 C 22.726562 9.027344 23.261719 9.722656 23.425781 10.542969 L 23.929688 13.0625 C 23.976562 13.304688 24.003906 13.550781 24 13.796875 L 24 14.417969 C 24 15.636719 23.417969 16.730469 22.5 17.410156 L 22.5 20.25 C 22.5 20.664062 22.164062 21 21.75 21 L 18.75 21 C 18.335938 21 18 20.664062 18 20.25 L 18 18.242188 C 16.0625 18.316406 13.882812 18.375 12 18.375 C 10.117188 18.375 7.941406 18.316406 6 18.242188 L 6 20.25 C 6 20.664062 5.664062 21 5.25 21 L 2.25 21 C 1.835938 21 1.5 20.664062 1.5 20.25 L 1.5 17.410156 C 0.585938 16.730469 0 15.636719 0 14.417969 L 0 13.796875 C 0 13.550781 0.0273438 13.304688 0.0742188 13.0625 L 0.578125 10.542969 C 0.742188 9.722656 1.273438 9.023438 2.023438 8.652344 C 2.28125 8.523438 2.484375 8.308594 2.59375 8.042969 Z M 4.5 15 C 5.328125 15 6 14.328125 6 13.5 C 6 12.671875 5.328125 12 4.5 12 C 3.671875 12 3 12.671875 3 13.5 C 3 14.328125 3.671875 15 4.5 15 M 19.5 15 C 20.328125 15 21 14.328125 21 13.5 C 21 12.671875 20.328125 12 19.5 12 C 18.671875 12 18 12.671875 18 13.5 C 18 14.328125 18.671875 15 19.5 15 M 9 12 C 8.171875 12 7.5 12.671875 7.5 13.5 C 7.5 14.328125 8.171875 15 9 15 L 15 15 C 15.828125 15 16.5 14.328125 16.5 13.5 C 16.5 12.671875 15.828125 12 15 12 Z M 4.359375 7.785156 C 4.238281 8.03125 4.261719 8.320312 4.414062 8.546875 C 4.570312 8.773438 4.832031 8.902344 5.105469 8.878906 C 6.46875 8.769531 10.128906 8.625 12 8.625 C 13.871094 8.625 17.53125 8.769531 18.894531 8.878906 C 19.167969 8.902344 19.429688 8.773438 19.585938 8.546875 C 19.738281 8.320312 19.761719 8.03125 19.640625 7.785156 L 18.207031 4.914062 C 18.078125 4.660156 17.820312 4.5 17.535156 4.5 L 6.464844 4.5 C 6.179688 4.5 5.921875 4.660156 5.792969 4.914062 Z M 4.359375 7.785156 "
                  />
                </svg>
                <p> ยานพาหนะ </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

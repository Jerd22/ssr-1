import React from "react";
import Link from "next/link";
import Image from "next/image";
//import Logo from "./Logo";
//import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" z-10 w-full bg-transparent fixed top-0 py-2 h-14 shadow-sm shadow-white">
      <div className="container mx-auto px-0 h-full">
        <div className="flex justify-between items-center h-full">
          <Image
            alt="Brand SSR+"
            width={42}
            height={42}
            src="/brand.png"
            className=" relative my-auto mx-1 w-auto h-auto"
            priority
          />
          <h5 className=" text-white">หมู่บ้านสิรารมย์พลัส เวลโกรว์</h5>
          <ul className="hidden md:flex gap-x-6 text-white ml-auto">
            <li>
              <Link href="/member">
                <p>
                  <svg
                    className="w-6 h-6 text-white dark:text-white float-start"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  สมาชิก
                </p>
              </Link>
            </li>
            <li>
              <Link href="/committee">
                <p>
                  <svg
                    className="w-6 h-6 float-start text-white dark:text-white"
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
                      d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    />
                  </svg>
                  คณะกรรมการ
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>
                  <svg
                    className="w-6 h-6 float-start text-white dark:text-white"
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
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"
                    />
                  </svg>
                  ติดต่อ
                </p>
              </Link>
            </li>
          </ul>
          {/*<Button />*/}
          <button type="button" className="inline-flex items-center md:hidden">
            {/* Menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
//import Logo from "./Logo";
//import Button from "./Button";

const Navbar = () => {
  const [userMenu, setUserMenu] = React.useState(false);
  const [pageMenu, setPageMenu] = React.useState(false);

  const UserMenu = () => {
    setUserMenu(!userMenu);
  };

  const PageMenu = () => {
    setPageMenu(!pageMenu);
  };

  const pathname = usePathname();

  return (
    <>
      {/*
      <nav className="z-10 w-full bg-transparent top-0 py-2 h-14 shadow-sm shadow-white">
        <div className="container mx-auto px-0 h-full">
          <div className="flex justify-between items-center h-full">
            <div className=" relative py-2 my-auto mx-2 w-auto h-auto">
              <Image
                alt="Brand SRR+"
                width={42}
                height={42}
                src="/brand.png"
                className=" float-left"
              />
              <a href="/" className=" text-nowrap">
                {" "}
                <h5 className="text-white">หมู่บ้านสิรารมย์พลัส เวลโกรว์</h5>
              </a>
            </div>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-multi-level"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
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
            </div>

            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-multi-level"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
*/}
      <nav className="z-10 bg-transparent top-0">
        <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={PageMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {!pageMenu ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className=" block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 py-2 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center mx-2 my-auto">
                <Image
                  alt="Brand SRR+"
                  width={58}
                  height={58}
                  src="/brand.png"
                  className="h-12 w-auto"
                  priority="false"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className={`rounded-md p-3 inline-flex text-sm font-medium ${
                      pathname === "/"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } `}
                    aria-current="page"
                  >
                    <svg
                      className="w-6 h-6 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>{" "}
                    <h6 className=" bg-transparent">หน้าแรก</h6>
                  </a>
                  <a
                    href="/member"
                    className={`rounded-md p-3 inline-flex text-sm font-medium ${
                      pathname === "/member"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } `}
                    aria-current="page"
                  >
                    <svg
                      className="w-6 h-6 text-white dark:text-white"
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
                        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>{" "}
                    <h6 className=" bg-transparent">สมาชิก</h6>
                  </a>
                  <a
                    href="/committee"
                    className={`rounded-md p-3 inline-flex text-sm font-medium ${
                      pathname === "/committee"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } `}
                    aria-current="page"
                  >
                    <svg
                      className="w-6 h-6 text-white dark:text-white"
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
                    </svg>{" "}
                    <h6 className=" bg-transparent">คณะกรรมการ</h6>
                  </a>
                  <a
                    href="/contacts"
                    className={`rounded-md p-3 inline-flex text-sm font-medium ${
                      pathname === "/contacts"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } `}
                  >
                    <svg
                      className="w-6 h-6 text-white dark:text-white"
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
                    </svg>{" "}
                    <h6 className=" bg-transparent">ติดต่อ</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2">
              <button
                type="button"
                className="relative rounded-full bg-white p-1 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18"
                    stroke="currentColor"
                    strokeWidth="null"
                    className="my-path"
                  ></path>
                  <path
                    d="M17.7271 9L18.3933 12.2569C18.6247 13.3885 19.2163 14.4147 20.0796 15.1821L20.1787 15.2701C20.658 15.6961 20.7756 16.3986 20.4612 16.9575C20.099 17.6015 19.4176 18 18.6788 18H5.32088C4.58204 18 3.90065 17.6015 3.53843 16.9575C3.22404 16.3986 3.34165 15.6961 3.82094 15.2701L3.92 15.1821C4.78328 14.4147 5.3749 13.3885 5.60636 12.2569L6.59803 7.40872C7.12291 4.84266 9.38062 3 11.9998 3"
                    stroke="currentColor"
                    strokeWidth="null"
                    strokeLinecap="round"
                    className="my-path"
                  ></path>
                  <path
                    d="M18 5C18 6.10457 17.1046 7 16 7C14.8954 7 14 6.10457 14 5C14 3.89543 14.8954 3 16 3C17.1046 3 18 3.89543 18 5Z"
                    stroke="currentColor"
                    strokeWidth="null"
                    className="my-path"
                  ></path>
                </svg>
              </button>
              {/*
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                onClick={UserMenu}
              >*/}
              <button
                id="user-menu-button"
                onClick={UserMenu}
                type="button"
                className="relative rounded-full bg-white p-1 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6998 9.3001C14.6998 10.7913 13.491 12.0001 11.9998 12.0001C10.5086 12.0001 9.2998 10.7913 9.2998 9.3001C9.2998 7.80893 10.5086 6.6001 11.9998 6.6001C13.491 6.6001 14.6998 7.80893 14.6998 9.3001Z"
                    stroke="currentColor"
                    strokeWidth="null"
                    className="my-path"
                  ></path>
                  <path
                    d="M6.6001 19.2002C6.6001 16.7149 9.01776 14.7002 12.0001 14.7002C14.9824 14.7002 17.4001 16.7149 17.4001 19.2002"
                    stroke="currentColor"
                    strokeWidth="null"
                    className="my-path"
                  ></path>
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="null"
                    className="my-path"
                  ></path>
                </svg>
                {/*
                    <Image
                      className="h-8 w-8 rounded-full"
                      width={32}
                      height={32}
                      src="/person.png"
                      alt=""
                    />
                    */}
              </button>

              {userMenu && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    โปรไฟล์
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    ตั้งค่า
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    ออกจากระบบ
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="sm:hidden  px-4" id="mobile-menu">
          {pageMenu && (
            <div className="py-3 px-3 bg-gray-900 rounded-sm">
              <a
                href="/"
                className="block pt-2 pl-2 rounded-md bg-gray-900 text-sm font-medium text-white"
                aria-current="page"
              >
                <span className="inline-flex ">
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>{" "}
                  <h6>หน้าแรก</h6>
                </span>
              </a>
              <a
                href="/member"
                className="block pt-2 pl-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-current="page"
              >
                <span className=" inline-flex">
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
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
                      d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>{" "}
                  <h6>สมาชิก</h6>
                </span>
              </a>
              <a
                href="#"
                className="block pt-2 pl-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-current="page"
              >
                <span className=" inline-flex">
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
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
                  </svg>{" "}
                  <h6>คณะกรรมการ</h6>
                </span>
              </a>
              <a
                href="#"
                className="block pt-2 pl-2 rounded-md  text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-current="page"
              >
                <span className=" inline-flex">
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
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
                  </svg>{" "}
                  <h6>ติดต่อ</h6>
                </span>
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // ส่งเบอร์โทรศัพท์ไปยัง API ของคุณเพื่อขอ OTP
      const response = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (data.success) {
        // แสดงข้อความแจ้งว่า OTP ถูกส่งไปยังเบอร์โทรศัพท์แล้ว
        alert("OTP ถูกส่งไปยังเบอร์โทรศัพท์ของคุณแล้ว");
      } else {
        // แสดงข้อความแจ้งข้อผิดพลาด
        setErrorMessage(data.error);
      }
    } catch (error) {
      // แสดงข้อความแจ้งข้อผิดพลาด
      console.error(error);
      setErrorMessage("เกิดข้อผิดพลาด");
    }

    setIsSubmitting(false);
  };

  const handleVerifyOtp = async () => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // ส่ง OTP ไปยัง API ของคุณเพื่อยืนยันตัวตน
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      const data = await response.json();

      if (data.success) {
        // เข้าสู่ระบบผู้ใช้
        console.log("เข้าสู่ระบบสำเร็จ!");
        // นำทางไปยังหน้าอื่น (เช่น หน้าหลัก)
      } else {
        // แสดงข้อความแจ้งข้อผิดพลาด
        setErrorMessage(data.error);
      }
    } catch (error) {
      // แสดงข้อความแจ้งข้อผิดพลาด
      console.error(error);
      setErrorMessage("เกิดข้อผิดพลาด");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex-1 min-h-screen">
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
        <h1 className=" text-white text-center px-auto my-12">
          เข้าสู่ระบบด้วยเบอร์โทรศัพท์
        </h1>
      </div>

      <div className="min-w-max px-12 md:px-40 sm:px-6 xl:px-60 lg:px-60 rounded">
        <input
          className=" p-4"
          style={{
            border: "1px solid #666",
            boxSizing: "border-box",
            borderRadius: 10,
            fontSize: 14,

            width: "100%",
          }}
          type="tel"
          placeholder="เบอร์โทรศัพท์"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white rounded w-auto py-3 my-2"
          type="button"
          style={{ width: "100%" }}
          disabled={isSubmitting}
          onClick={handleSubmit}
        >
          ขอ OTP
        </button>
      </div>

      {otp && (
        <div className="min-w-max px-12 md:px-40 sm:px-6 xl:px-60 lg:px-60 rounded">
          <input
            type="tel"
            placeholder="OTP"
            value={otp}
            onChange={handleOtpChange}
          />

          <input
            variant="primary"
            disabled={isSubmitting}
            onClick={handleVerifyOtp}
          >
            ยืนยัน OTP
          </input>
        </div>
      )}

      {errorMessage && (
        <div className=" text-red-600 shadow-slate-300  px-12 md:px-40 sm:px-6 xl:px-60 lg:px-60 rounded text-center">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

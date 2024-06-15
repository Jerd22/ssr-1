import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "หมู่บ้านสิรารมย์พลัสเวลโกรว์",
  description: "แสดงค่าส่วนกลาง หมู่บ้านสิรารมย์พลัสเวลโกรว์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}

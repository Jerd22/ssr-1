import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ค่าส่วนกลาง",
  description: "แสดงค่าส่วนกลาง หมู่บ้านสิรารมย์พลัสเวลโกรว์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

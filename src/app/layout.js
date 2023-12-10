import { IRANSansWeb, IRANYekanWeb } from "@/styles/fonts";
import "./globals.css";

export const metadata = {
  title: "ابوالفضل رمضان دوست",
  description: "وب سایت ابوالفضل رمضان دوست",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${IRANSansWeb.className} ${IRANSansWeb.variable} ${IRANYekanWeb.variable}`}>{children}</body>
    </html>
  );
}

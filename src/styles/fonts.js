import localFont from "next/font/local";

const IRANSansWeb = localFont({
  variable: "--font-IRANSansWeb",
  src: [
    {
      path: "./fonts/IRANSansWeb/woff2/IRANSansWeb.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb/woff2/IRANSansWeb_UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb/woff2/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb/woff2/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb/woff2/IRANSansWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb/woff2/IRANSansWeb_Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

const IRANYekanWeb = localFont({
  variable: "--font-IRANYekanWeb",
  src: [
    {
      path: "./fonts/IRANYekanWeb/woff2/IRANYekanWeb.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanWeb/woff2/IRANYekanWeb_Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanWeb/woff2/IRANYekanWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanWeb/woff2/IRANYekanWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanWeb/woff2/IRANYekanWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanWeb/woff2/IRANYekanWeb_ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanWeb/woff2/IRANYekanWeb_Black.woff2",
      weight: "850",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanWeb/woff2/IRANYekanWeb_ExtraBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export { IRANSansWeb, IRANYekanWeb };

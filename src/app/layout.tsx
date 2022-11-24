import "../../styles/globals.css";
import React from "react";

interface UIPageProps {
  children: React.ReactNode;
}

const UIRootLayout = async (props: UIPageProps) => {
  return (
    <html lang="en">
      <head>
        <title>Test</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
};
export default UIRootLayout;

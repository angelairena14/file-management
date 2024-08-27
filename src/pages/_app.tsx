import Sidebar from "@/components/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Home from "./upload-file";

function FileManagement({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-2 flex-grow">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default FileManagement;

import { NextPage } from "next";
import Footer from "../molecules/Footer";
import PrimaryNavigation from "../molecules/PrimaryNavigation";
import { useState, useEffect } from "react"
import Axios  from "axios";
import axios from "axios";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {


  return (
    <>
      <div className="min-h-screen flex w-full flex-col dark:bg-[#1a202c] ">
        <PrimaryNavigation />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default BlankTemplate;

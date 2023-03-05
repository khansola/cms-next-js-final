import { CommonSEO } from "@/components/SEO";
import Footer from "@/components/molecules/Footer";
import BlankTemplate from "@/components/templates/BlankTemplate";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Section from "@/components/molecules/Section";
import ImageHome from "@/components/molecules/ImageHome";
import ProgramList from "@/components/molecules/ProgramList";
import { DarkMode } from "@mui/icons-material";
import DarkModeToggle from "@/components/molecules/DarkModeToggle";
import axios from "axios";
import react, { useEffect, useState } from "react";
import test from "node:test";

const index = (props:any) => {

  return (
    <BlankTemplate >
      <CommonSEO
        title="Home"
        description="Description of Create Next Page by Faizmul"
      />
      
      <DarkModeToggle />
      <ImageHome />
      <Section />
      <ProgramList />
    </BlankTemplate>
  );
};

export default index;


// export async function getStaticProps (){
//   const data = await axios.get("http://localhost:8080/v1/articles")
//   return {
//     props:{
//       data:data.data
//     }
//   }
  
// }

import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Section from "@/components/molecules/Section";
import ImageHome from "@/components/molecules/ImageHome";
import ProgramList from "@/components/molecules/ProgramList";
import DarkModeToggle from "@/components/molecules/DarkModeToggle";
import axios from "axios";
import Galery from "@/components/molecules/Article1";
import Article1 from "@/components/molecules/Galery";

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
      <Article1 />
      <Galery />
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

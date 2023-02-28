import { CommonSEO } from "@/components/SEO";
import Footer from "@/components/molecules/Footer";
import BlankTemplate from "@/components/templates/BlankTemplate";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Section from "@/components/molecules/Section";
import ImageHome from "@/components/molecules/ImageHome";
import ProgramList from "@/components/molecules/ProgramList";

const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO
        title="Home"
        description="Description of Create Next Page by Faizmul"
      />

      <ImageHome />
      <ProgramList />
      <Section />
    </BlankTemplate>
  );
};

export default index;

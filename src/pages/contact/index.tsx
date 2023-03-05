import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Contact from "@/components/molecules/Contact";
import ImageContent from "@/components/molecules/ImageContent";
import SosialMedia from "@/components/molecules/SosialMedia";
import DarkModeToggle from "@/components/molecules/DarkModeToggle";
import Maps from "@/components/molecules/Maps";

const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO
        title="Home"
        description="Description of Create Next Page by Russ"
      />
      <div className="w-full flex gap-14 justify-beetween pb-20 md:bg-none bg-puan object-fill ">
        <ImageContent />
        <DarkModeToggle />
        <Contact />
      </div>
      <div>
      <DarkModeToggle />
      <Maps />


      </div>
      <div>
      <SosialMedia />
      </div>
    </BlankTemplate>
  );
};

export default index;

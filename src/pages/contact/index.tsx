import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Contact from "@/components/molecules/Contact";
import ImageContent from "@/components/molecules/ImageContent";
import Location from "@/components/molecules/Location";
import SosialMedia from "@/components/molecules/SosialMedia";

const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO
        title="Home"
        description="Description of Create Next Page by Russ"
      />
      <div className="w-full flex gap-14 justify-beetween pb-20 ">
        <ImageContent />
        <Contact />
      </div>
      <div>
      <Location />
      </div>
      <div>
      <SosialMedia />
      </div>
    </BlankTemplate>
  );
};

export default index;

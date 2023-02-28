import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Contact from "@/components/molecules/Contact";
import ImageContent from "@/components/molecules/ImageContent";

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
    </BlankTemplate>
  );
};

export default index;

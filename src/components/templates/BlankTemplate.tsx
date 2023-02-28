import { NextPage } from "next";
import Footer from "../molecules/Footer";
import PrimaryNavigation from "../molecules/PrimaryNavigation";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex w-full flex-col ">
        <PrimaryNavigation />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default BlankTemplate;

import Image from "next/image";

const section = () => {
  return (
    <>
      <div
        className="flex flex-row  flex-wrap justify-around py-20
      "
      >
        <div>
          <Image
            src="/images/Section.jpg"
            alt="sehijra"
            width={750}
            height={500}
          />
        </div>
        <div className="w-[0.1rem]"></div>
        <div className="w-[17rem] flex justify-around flex-col">
          <div>
            <h3 className="pb-5 text-[22px] font-semibold text-[#5D5A88]">
              Lorem Ipsum Title
            </h3>
            <p className="text-[18px] font-normal text-[#9795B5]">
              Web design partially overlaps web engineering in the broader scope
              of web development
            </p>
          </div>
          <div>
            <h3 className="pb-5 text-[22px] font-semibold text-[#5D5A88]">
              Lorem Ipsum Title
            </h3>
            <p className="text-[18px] font-normal text-[#9795B5]">
              Paper prototypes should be considered when the following is true
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default section;

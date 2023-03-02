import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";




const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};
console.log({ divStyle });

const slideImages = [
  {
    url: "/images/image-home1.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "/images/image-home2.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "/images/image-home3.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
];



const ImageHome = () => {
  return (
      <div className="slide-container ">
      <Slide duration={3000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="flex flex-col"
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <div className=" flex flex-col justify-center absolute mt-48   ">
                <Link href="www.facebook.com">
                  <Image
                    src="/images/Facebook2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="www.twitter.com">
                  <Image
                    src="/images/Twitter2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="www.instagram.com">
                  <Image
                    src="/images/Instagram2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="www.linkedin.com">
                  <Image
                    src="/images/LinkedIn2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="www.youtube.com">
                  <Image
                    src="/images/YouTube2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div>
                <h1 className=" text-5xl bg-gradient-to-r from-[#A03c78] to-purple-400 bg-clip-text text-transparent relative ml-20 mt-60 w-[25%] blinking-cursor font-extrabold">
                  {" "}
                  {slideImage.caption}{" "}
                </h1>
                <p className=" mt-5 w-2/6 text-white ml-20">
                  {slideImage.desc}
                </p>
              </div>
              <div className="ml-20 bg-white w-[27%] md:w[22.5%] rounded-full mt-5 h-14 flex    ">
                <Button style="px-[4%] ml-5  " title="PELAJARI LEBIH LANJUT" />
                <span className="pt-3 pl-3 text-[20px]">🡪</span>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageHome;

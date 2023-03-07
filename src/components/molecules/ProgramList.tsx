import Button from "../atoms/Button";
import Cards from "../atoms/Cards";
import React, { useEffect, useState } from "react";
import axios from "axios";

const List = [
  {
    image: "/images/Container1.png",
    caption: "Pelatihan manajemen organısası bagı pengurus dan anggota SEHJIRA",
  },
  {
    image: "/images/Container2.png",
    caption: "Kelas Kursus Komputer tingkat dasar dan Mahir",
  },
  {
    image: "/images/Container3.png",
    caption: "Kelas bahasa Isyarat Bisindo dan ASL/ISL",
  },
  {
    image: "/images/Container4.png",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
];

const ProgramList = () => {
  return (

    <div className=" flex flex-col items-center justify-center mt-10 gap-5  ">

      <div className=" text-center text-[#843C74] pb-5 font-extrabold ">
        <h1 className=" text-3xl">Program Unggulan Sehjira</h1>
      </div>
      <div className=" flex flex-wrap items-center gap-10">
        {List.map((e, i) => {
          return <Cards
            key={i}
            image={e.image}
            caption={e.caption}
          />;
        })}
      </div>
      <div className=" text-[#843C74]  mt-5 text-center text-[24px] font-extrabold ">
        <Button style="p-3 border-4 rounded-xl border-[#843C74]  " title="Lihat Semua Program Unggulan" />
      </div>
    </div>
  );
};

export default ProgramList;

// type articles = {
//   author_name: string;
//   date: {
//   created_at: string;
//   updated_at: string;
//   };
//   excerpt: string;
//   image_thumbnail_url: string;
//   slug: string;
//   tags: [string, string, string];
//   title: string;
//   };

// const ProgramList = () => {
//   const [data, setData] = useState<articles[]>([])
//   useEffect (() => {
//   axios.get("http://localhost:8080/v1/articles").then((test) => {

//   setData(test.data.data.articles)

//   })  
//   },[]);
//   console.log(data);

{/* <div>
{data.map((v,i) => {
return (
  <div key={i}>
    <p>{v.tags[i]}</p>
  </div>
)
})};
</div> */}

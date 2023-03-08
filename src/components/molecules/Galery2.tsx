import React from 'react'
import Button from '../atoms/Button'
import CardRectangle from '../atoms/CardRectangle';
import Share from '../atoms/Share';

const Galery = () => {
    const Rectangle = [
        {
            image: "/images/Card.jpg",
        },
        {
            image: "/images/Card.jpg",
        },
        {
            image: "/images/Card.jpg",
        },
        {
            image: "/images/Card.jpg",
        },
        {
            image: "/images/Card.jpg",
        },
        {
            image: "/images/Card.jpg",
        },
        {
            image: "/images/Card.jpg",
        },
        {
            image: "/images/Card.jpg",
        },
        {
            image: "/images/Card.jpg",
        },
    ];
    return (
        <div className='mt-16 px-[5%]' >
            <h1 className='text-[#843C74] text-3xl mt-5 '>
                Galery Kami
            </h1>
            <div className=" flex flex-wrap justify-center gap-16 mt-5">
                {Rectangle.map((e, i) => {
                    return <CardRectangle
                        key={i}
                        image={e.image}
                        
                    >
                    <Share />
                    </CardRectangle >
                })}
            </div>
            <div className=" text-white mt-7 text-center text-[15px] font-extrabold ">
                <Button style=" py-2 px-9 bg-[#843C74] rounded border-[#843C74]  " title="Muat Lebih Banyak" />
            </div>
        </div>
    )
}

export default Galery
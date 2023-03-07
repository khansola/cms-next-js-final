import Image from 'next/image'
import React from 'react'

const Program = () => {
    return (
        <div className='px-[7%]'>
            <div className=''>
                <h1 className=' text-4xl'>
                    Pelatihan Kemandirian Remaja Tuna Rungu Ke-5
                </h1>
            </div>
            <div>
                <Image
                    src="/images/f.jpg"
                    alt="sehjira"
                    height={200}
                    width={450}
                />
            </div>
        </div>
    )
}

export default Program
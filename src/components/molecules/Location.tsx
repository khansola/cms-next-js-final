import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../atoms/Button'

const Location = () => {
    return (
        <div className='flex p-20 bg-slate-50 '>
            <div>
                <Link href="/">
                    <Image
                        src="/images/location-gps.jpg"
                        alt="image"
                        width={900}
                        height={900}
                    />
                </Link>
            </div>
            <div className='p-28' >
                <h2 className=' font-dmsans text-[#A03C78] text-3xl'>Lokasi kami</h2>
                <p className='pt-10 w-[100%]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim laoreet massa non.
                </p>
                <div className="pt-14 gap-10">
                    <ul className='flex gap-16'>
                        <li>
                            <Button title="Send message" />
                        </li>
                        <li>                    <Button title="Hubungi Whatapps" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Location
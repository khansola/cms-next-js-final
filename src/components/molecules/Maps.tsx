import React, { useState } from "react";
import Map from "../atoms/Map";
import Button from "../atoms/Button";

type props = {
    TileLayer: any;
    Marker: any;
};

const Maps = () => {
    const DEFAULT_CENTER: number[] = [-6.209820, 106.708148];
    return (
        <div className="flex flex-wrap justify-evenly items-center  ">
            <div className="w-[521.35px] h-[521.35px] ">
                <Map width="200" height="200" center={DEFAULT_CENTER} zoom={12}>
                    {({ TileLayer, Marker }: props) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={DEFAULT_CENTER}></Marker>
                        </>
                    )}
                </Map>
            </div>
            <div className="w-[30%] justify-center align-middle">
                <h2 className=' font-dmsans text-[#A03C78] text-4xl font-extrabold '>Lokasi kami</h2>
                <p className='pt-10 w-[100%]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim laoreet massa non.
                </p>
                <div className="pt-14 gap-10">
                    <ul className='flex gap-16'>
                        <li>
                            <Button title="Send message" />
                        </li>
                        <li>
                            <Button title="Hubungi Whatapps" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default Maps;


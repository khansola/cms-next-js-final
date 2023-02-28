import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

const Section3 = () => {
    const ProgramList = [{
        image: "/images/lihatjuga1.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    {
        image: "/images/lihatjuga2.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    {
        image: "/images/lihatjuga3.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    ];


    return (
        <div>
            {
                ProgramList.map((e, i) => {
                    return (
                        <div key={i} className='flex flex-wrap justify-center'>
                            <Card sx={{ maxWidth: 420, height: 450 }}>
                                <div className='w-[100%]'>
                                    <Image
                                        src={e.image}
                                        alt={"vector.png"}
                                        width={400}
                                        height={220}
                                    ></Image>
                                </div>
                                <CardContent>
                                    <Typography className='' gutterBottom variant="h5" component="div">
                                        {e.caption}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Section3
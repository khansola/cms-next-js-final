import * as React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";


type ProgramList = {
    image: string;
    onButtonClick?: () => void
};

type Props = ProgramList;

const CardRectangle = (props: Props) => {
    return (
        <div className="flex flex-wrap justify-center gap-5">
            <div>
                <Card sx={{ maxWidth: 300, height: 250 }}>
                    <div>
                        <Image
                            src={props.image}
                            alt={"vector.png"}
                            width={350}
                            height={220}
                        ></Image>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CardRectangle;

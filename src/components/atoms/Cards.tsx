import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Image from "next/image";

type ProgramList = {
  image: string;
  caption: string;
  desc?: string;
};

type Props = ProgramList;

const Cards = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      <div>
        <Card sx={{ maxWidth: 300, height: 400 }}>
          <div>
            <Image
              src={props.image}
              alt={"vector.png"}
              width={350}
              height={220}
            ></Image>
          </div>
          <CardContent>
            <Typography className="" gutterBottom variant="h5" component="div">
              {props.caption}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cards;

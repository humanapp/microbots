import React, { useState } from "react";
import { Stage, Container, Sprite, Graphics, useTick } from "@pixi/react";
import { Color } from "pixi.js";
import { Rect } from "./Rect";

type Props = {};

const Content = () => {
  let [angle, setAngle] = useState(0);
  useTick(() => {
    setAngle(angle + 0.15);
  });
  return <Rect x={100} y={100} angle={angle} borderColor="red" fillColor="black" width={100} height={50} />
};

export const Canvas: React.FC<Props> = ({}) => {
  return (
    <Stage
      width={400}
      height={400}
      options={{
        backgroundColor: new Color("gray").toNumber(),
      }}
    >
      <Content />
    </Stage>
  );
};

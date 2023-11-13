import React, { useMemo } from "react";
import { useCallback } from "react";
import { Graphics, Container } from "@pixi/react";
import { Color, Graphics as PixiGraphics } from "pixi.js"

type Props = {
  x: number;
  y: number;
  angle: number;
  width: number;
  height: number;
  fillColor: string;
  borderColor: string;
};

export const Rect: React.FC<Props> = ({
  x,
  y,
  angle,
  width,
  height,
  fillColor,
  borderColor,
}) => {
  const fc = useMemo(() => {
    return new Color(fillColor).toNumber();
  }, [fillColor]);
  const bc = useMemo(() => {
    return new Color(borderColor).toNumber();
  }, [borderColor]);

  const draw = useCallback(
    (g: PixiGraphics) => {
      g.clear();
      g.beginFill(bc);
      g.lineStyle(4, fc, 1);
      g.moveTo(0, 0);
      g.lineTo(width, 0);
      g.lineTo(width, height);
      g.lineTo(0, height);
      g.lineTo(0, 0);
      g.endFill();
    },
    [fc, bc, width, height]
  );

  return (
    <Container x={x} y={y} angle={angle} anchor={0.5} pivot={[width / 2, height / 2]}>
      <Graphics draw={draw} />
    </Container>
  );
};

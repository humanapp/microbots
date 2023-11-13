import { nanoid } from "nanoid";
import * as storage from "../services/storage";
import { Scene } from "../types";
import Box2D from "box2d-wasm";

export type AppState = {
  entities: Scene.Entity[];
};

export const initialAppState: AppState = {
  entities: [
    {
      id: nanoid(6),
      x: 20,
      y: 20,
      angle: 0,
      width: 40,
      height: 30,
      fillColor: "yellow",
      borderColor: "black",
      children: [],
    } as Scene.Rect,
  ],
};

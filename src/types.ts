import Box2D from "box2d-wasm"

export namespace Scene {

  export type Entity = {
    id: string;
    x: number;
    y: number;
    angle: number;
    parent?: string; // id of parent
    children: string[]; // id[] of children
  }

  export type Rect = Entity & {
    width: number;
    height: number;
    fillColor: string;
    borderColor: string;
    body?: Box2D.b2Body;
  };
}

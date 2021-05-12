import { v4 as uuid } from "uuid"
import * as vec from "utils/vec"
import { BaseLibShape, RectangleShape, ShapeType } from "types"

const Rectangle: BaseLibShape<ShapeType.Rectangle> = {
  create(props): RectangleShape {
    return {
      id: uuid(),
      type: ShapeType.Rectangle,
      name: "Rectangle",
      parentId: "page0",
      childIndex: 0,
      point: [0, 0],
      size: [1, 1],
      rotation: 0,
      style: {},
      ...props,
    }
  },

  render({ id, size }) {
    return <rect id={id} width={size[0]} height={size[1]} />
  },

  getBounds(shape) {
    const {
      point: [x, y],
      size: [width, height],
    } = shape

    return {
      minX: x,
      maxX: x + width,
      minY: y,
      maxY: y + height,
      width,
      height,
    }
  },

  hitTest(shape) {
    return true
  },

  rotate(shape) {
    return shape
  },

  translate(shape) {
    return shape
  },

  scale(shape, scale: number) {
    return shape
  },

  stretch(shape, scaleX: number, scaleY: number) {
    return shape
  },
}

export default Rectangle
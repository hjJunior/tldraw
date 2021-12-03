/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import {
  TLNuBounds,
  SVGContainer,
  TLNuShape,
  TLNuIndicatorProps,
  TLNuComponentProps,
  TLNuResizeInfo,
  BoundsUtils,
} from '@tldraw/next'
import { observer } from 'mobx-react-lite'
import { observable, computed, makeObservable } from 'mobx'
import { NuBaseShape, NuBaseShapeProps } from './NuBaseShape'

export interface NuBoxShapeProps extends NuBaseShapeProps {
  size: number[]
}

export class NuBoxShape extends NuBaseShape<NuBoxShapeProps> {
  constructor(props = {} as NuBoxShapeProps) {
    super(props)
    const { size = [100, 100] } = props
    this.size = size
    makeObservable(this)
  }

  static id = 'box'

  @observable size: number[]

  Component = observer(({ events }: TLNuComponentProps) => {
    const {
      size: [w, h],
      stroke,
      fill,
      strokeWidth,
    } = this

    return (
      <SVGContainer {...events}>
        <rect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width={Math.max(0.01, w - strokeWidth)}
          height={Math.max(0.01, h - strokeWidth)}
          stroke={stroke}
          fill={fill}
          strokeWidth={strokeWidth}
          pointerEvents="all"
        />
      </SVGContainer>
    )
  })

  Indicator = (props: TLNuIndicatorProps) => {
    return (
      <rect
        className="nu-indicator"
        width={this.size[0]}
        height={this.size[1]}
        strokeWidth={2}
        fill="transparent"
      />
    )
  }

  @computed get bounds(): TLNuBounds {
    const [x, y] = this.point
    const [width, height] = this.size
    return {
      minX: x,
      minY: y,
      maxX: x + width,
      maxY: y + height,
      width,
      height,
    }
  }

  resize = (bounds: TLNuBounds, info: TLNuResizeInfo<NuBoxShapeProps>) => {
    this.update({
      point: [bounds.minX, bounds.minY],
      size: [Math.max(1, bounds.width), Math.max(1, bounds.height)],
    })
  }
}

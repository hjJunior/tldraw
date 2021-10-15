import { TLBoundsCorner, TLBoundsEdge, Utils } from '@tldraw/core'
import { Vec } from '@tldraw/vec'
import { SessionType, TLDrawShape, TLDrawStatus } from '~types'
import type { Session } from '~types'
import type { Data } from '~types'
import { TLDR } from '~state/tldr'

export class TransformSingleSession implements Session {
  type = SessionType.TransformSingle
  status = TLDrawStatus.Transforming
  transformType: TLBoundsEdge | TLBoundsCorner
  origin: number[]
  scaleX = 1
  scaleY = 1
  isCreate: boolean
  snapshot: TransformSingleSnapshot

  constructor(
    data: Data,
    point: number[],
    transformType: TLBoundsEdge | TLBoundsCorner = TLBoundsCorner.BottomRight,
    isCreate = false
  ) {
    this.origin = point
    this.transformType = transformType
    this.snapshot = getTransformSingleSnapshot(data, transformType)
    this.isCreate = isCreate
  }

  start = () => void null

  update = (data: Data, point: number[], shiftKey: boolean) => {
    const { transformType } = this

    const { initialShapeBounds, initialShape, id } = this.snapshot

    const shapes = {} as Record<string, Partial<TLDrawShape>>

    const shape = TLDR.getShape(data, id, data.appState.currentPageId)

    const utils = TLDR.getShapeUtils(shape)

    const newBounds = Utils.getTransformedBoundingBox(
      initialShapeBounds,
      transformType,
      Vec.sub(point, this.origin),
      shape.rotation,
      shiftKey || shape.isAspectRatioLocked || utils.isAspectRatioLocked
    )

    const change = TLDR.getShapeUtils(shape).transformSingle(shape, newBounds, {
      initialShape,
      type: this.transformType,
      scaleX: newBounds.scaleX,
      scaleY: newBounds.scaleY,
      transformOrigin: [0.5, 0.5],
    })

    if (change) {
      shapes[shape.id] = change
    }

    return {
      document: {
        pages: {
          [data.appState.currentPageId]: {
            shapes,
          },
        },
      },
    }
  }

  cancel = (data: Data) => {
    const { initialShape } = this.snapshot

    const shapes = {} as Record<string, Partial<TLDrawShape>>

    shapes[initialShape.id] = initialShape

    return {
      document: {
        pages: {
          [data.appState.currentPageId]: {
            shapes,
          },
        },
      },
    }
  }

  complete(data: Data) {
    if (!this.snapshot.hasUnlockedShape) return data

    const { initialShape } = this.snapshot

    const beforeShapes = {} as Record<string, Partial<TLDrawShape> | undefined>
    const afterShapes = {} as Record<string, Partial<TLDrawShape>>

    beforeShapes[initialShape.id] = this.isCreate ? undefined : initialShape

    afterShapes[initialShape.id] = TLDR.onSessionComplete(
      TLDR.getShape(data, initialShape.id, data.appState.currentPageId)
    )

    return {
      id: 'transform_single',
      before: {
        document: {
          pages: {
            [data.appState.currentPageId]: {
              shapes: beforeShapes,
            },
          },
          pageStates: {
            [data.appState.currentPageId]: {
              selectedIds: this.isCreate ? [] : [initialShape.id],
              editingId: undefined,
              hoveredId: undefined,
            },
          },
        },
      },
      after: {
        document: {
          pages: {
            [data.appState.currentPageId]: {
              shapes: afterShapes,
            },
          },
          pageStates: {
            [data.appState.currentPageId]: {
              selectedIds: [initialShape.id],
              editingId: undefined,
              hoveredId: undefined,
            },
          },
        },
      },
    }
  }
}

export function getTransformSingleSnapshot(
  data: Data,
  transformType: TLBoundsEdge | TLBoundsCorner
) {
  const shape = TLDR.getShape(
    data,
    TLDR.getSelectedIds(data, data.appState.currentPageId)[0],
    data.appState.currentPageId
  )

  if (!shape) {
    throw Error('You must have one shape selected.')
  }

  const bounds = TLDR.getBounds(shape)

  return {
    id: shape.id,
    hasUnlockedShape: !shape.isLocked,
    type: transformType,
    initialShape: Utils.deepClone(shape),
    initialShapeBounds: bounds,
  }
}

export type TransformSingleSnapshot = ReturnType<typeof getTransformSingleSnapshot>

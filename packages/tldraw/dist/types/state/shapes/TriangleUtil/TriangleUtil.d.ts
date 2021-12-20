import * as React from 'react';
import { TLBounds } from '@tldraw/core';
import { TriangleShape, TDShapeType, TDMeta, TDShape } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '../shared';
declare type T = TriangleShape;
declare type E = SVGSVGElement;
export declare class TriangleUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Triangle;
    canBind: boolean;
    canClone: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<TriangleShape, SVGSVGElement, TDMeta>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & React.RefAttributes<SVGSVGElement>>;
    Indicator: (props: {
        shape: TriangleShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
    private getPoints;
    shouldRender: (prev: T, next: T) => boolean;
    getBounds: (shape: T) => TLBounds;
    getExpandedBounds: (shape: T) => TLBounds;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
    hitTestBounds: (shape: T, bounds: TLBounds) => boolean;
    getBindingPoint: <K extends TDShape>(shape: T, fromShape: K, point: number[], origin: number[], direction: number[], bindAnywhere: boolean) => {
        point: number[];
        distance: number;
    } | undefined;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export declare function getTrianglePoints(shape: T, offset?: number, rotation?: number): number[][];
export declare function getTriangleCentroid(shape: T): number[];
export {};
//# sourceMappingURL=TriangleUtil.d.ts.map
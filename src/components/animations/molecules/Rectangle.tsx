import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { getAnimation } from '../../../utilities/gooeyService';

type RectangleProps = {
    $x: string;
    $y: string;
    $rx: string;
    $width: string;
    $height: string;
    $fill: string;
    $minTime: number;
    $returnFunc: (time: number, delay: number) => FlattenSimpleInterpolation;
};

const Rectangle = styled.rect<RectangleProps>`
    x: ${({ $x }) => $x};
    y: ${({ $y }) => $y};
    rx: ${({ $rx }) => $rx};
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    fill: ${({ $fill }) => $fill};
    ${({ $minTime, $returnFunc }) =>
        getAnimation($minTime, $minTime * 2, $returnFunc)};
    transform-origin: 50%;
`;

export default Rectangle;

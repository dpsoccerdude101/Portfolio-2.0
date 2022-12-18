import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { getAnimation } from '../../../utilities/gooeyService';

type CircleProps = {
    $cx: string;
    $cy: string;
    $r: string;
    $fill: string;
    $minTime: number;
    $returnFunc: (time: number, delay: number) => FlattenSimpleInterpolation;
};

const Circle = styled.circle<CircleProps>`
    cx: ${({ $cx }) => $cx};
    cy: ${({ $cy }) => $cy};
    r: ${({ $r }) => $r};
    fill: ${({ $fill }) => $fill};
    ${({ $minTime, $returnFunc }) =>
        getAnimation($minTime, $minTime * 2, $returnFunc)};
    transform-origin: 50%;
`;

export default Circle;

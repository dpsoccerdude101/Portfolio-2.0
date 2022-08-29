import styled from 'styled-components';
import { getAnimation } from '../../../utilities/gooeyService';

type CircleProps = {
    $cx: string;
    $cy: string;
    $r: string;
    $fill: string;
    $minTime: number;
    $returnFunc: (time: number, delay: number) => string;
};

const Circle = styled.circle<CircleProps>`
    cx: ${({ $cx }) => $cx};
    cy: ${({ $cy }) => $cy};
    r: ${({ $r }) => $r};
    fill: ${({ $fill }) => $fill};
    animation: ${({ $minTime, $returnFunc }) =>
        getAnimation($minTime, $minTime * 2, $returnFunc)};
`;

export default Circle;

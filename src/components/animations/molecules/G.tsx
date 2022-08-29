import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { getAnimation } from '../../../utilities/gooeyService';

type GProps = {
    $minTime: number;
    $returnFunc: (time: number, delay: number) => FlattenSimpleInterpolation;
};

const G = styled.g<GProps>`
    ${({ $minTime, $returnFunc }) =>
        getAnimation($minTime, $minTime * 2, $returnFunc)};
    transform-origin: 50%;
`;

export default G;

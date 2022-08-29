import styled from 'styled-components';
import { getAnimation } from '../../../utilities/gooeyService';

type GProps = {
    $minTime: number;
    $returnFunc: (time: number, delay: number) => string;
};

const G = styled.g<GProps>`
    animation: ${({ $minTime, $returnFunc }) =>
        getAnimation($minTime, $minTime * 2, $returnFunc)};
`;

export default G;

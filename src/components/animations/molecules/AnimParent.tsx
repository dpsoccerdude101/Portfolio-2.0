import styled from 'styled-components';
import {
    getGooTranslation,
    getScreenSize,
} from '../../../utilities/gooeyService';

type SVGProps = {
    $index: number;
    $length: number;
};

const AnimParent = styled.svg<SVGProps>`
    position: absolute;
    transform: ${({ $index, $length }) =>
        getGooTranslation($index, $length, getScreenSize())};
`;

export default AnimParent;

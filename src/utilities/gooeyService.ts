import { isMobile } from 'react-device-detect';
import { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';

const randomNumFromInterval = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(randomNumFromInterval(min, max));

const getNominalLength = (
    index: number,
    length: number,
    axisLength: number,
    minValue: number
) => {
    return (index / length) * axisLength + minValue;
};

const getNormallyDistributedElement = (
    index: number,
    length: number,
    axisLength: number,
    minValue: number
) => {
    const sectorLength = getNominalLength(index, length, axisLength, minValue);
    const intervalLength = axisLength / length;
    const divisor = randomNumFromInterval(index === 0 ? 0 : -0.5, 0.5);
    const quasiHalfIntervalLength = divisor * intervalLength;

    return sectorLength + quasiHalfIntervalLength;
};

const getScreenSize = (): [length: number, width: number] => {
    const body = document.body,
        html = document.documentElement;

    const getMaxHeight = () =>
        Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight,
            isMobile ? 2000 : 1400
        );

    const getMaxWidth = () =>
        Math.max(
            body.scrollWidth,
            body.offsetWidth,
            html.clientWidth,
            html.scrollWidth,
            html.offsetWidth
        );

    return [getMaxHeight(), getMaxWidth()];
};

const getGooTranslation = (
    index: number,
    totalLength: number,
    screenSize: [length: number, width: number]
) => {
    return `translate(${randomIntFromInterval(
        -150,
        screenSize[1] - 150
    )}px, ${getNormallyDistributedElement(
        index,
        totalLength,
        screenSize[0],
        -60
    )}px)` as const;
};

const rotate = keyframes`
0% {
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`;

const rotate_back = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(-360deg);
}`;

const sway = keyframes`
 100% {
        transform: translateX(10%);
    }
`;
const drop = keyframes`
100% {
        transform: translateY(45%);
    }
`;
const rise = keyframes`
100% {
        transform: translateY(-20%);
    }
`;
const hero_one = keyframes`
0% {
    transform: rotate(0deg) translate(0%, 0%);
}
100% {
        transform: rotate(360deg) translate(17.5%, 17.5%);
    }
`;
const hero_two = keyframes`
0% {
    transform: rotate(0deg) translate(0%, 0%);
}
 100% {
        transform: rotate(360deg) translate(17.5%, -17.5%);
    }
`;
const hero_three = keyframes`
0% {
    transform: rotate(0deg) translate(0%, 0%);
}
100% {
        transform: rotate(360deg) translate(-17.5%, 17.5%);
    }
`;
const hero_four = keyframes`
0% {
    transform: rotate(0deg) translate(0%, 0%);
}
100% {
        transform: rotate(360deg) translate(-17.5%, -17.5%);
    }
`;
const blob_one = keyframes`
0% {
    transform: rotate(0deg) translate(0%, 0%);
}
100% {
        transform: rotate(-360deg) translate(-12.5%, -12.5%);
    }
`;
const blob_two = keyframes`
0% {
    transform: rotate(0deg) translate(0%, 0%);
}
100% {
        transform: rotate(-360deg) translate(-12.5%, -12.5%);
    }
`;

const returnFuncs = {
    g: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s linear ${delay}ms infinite normal none running
                ${rotate_back};
        `,

    g1: (time: number, delay: number): FlattenSimpleInterpolation => css`
        animation: ${time}s linear ${delay}ms infinite normal none running
            ${rotate};
    `,
    circle1: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s ease-in-out -${delay * 3}ms infinite alternate none
                running ${blob_two};
        `,
    circle2: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s ease-in-out -${delay * 3}ms infinite alternate none
                running ${blob_two};
        `,
    circle3: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s ease-in-out -${delay * 3}ms infinite alternate none
                running ${blob_two};
        `,
    circle4: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s ease-in-out -${delay * 3}ms infinite alternate none
                running ${blob_one};
        `,
    rect1: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s ease-in-out -${delay * 3}ms infinite alternate none
                running ${hero_one};
        `,

    rect2: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s ease-in-out -${delay * 3}ms infinite alternate none
                running ${hero_three};
        `,
    rect3: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s ease-in-out -${delay * 3}ms infinite alternate none
                running ${hero_two};
        `,
    rect4: (time: number, delay: number): FlattenSimpleInterpolation =>
        css`
            animation: ${time}s ease-in-out -${delay * 3}ms infinite alternate none
                running ${hero_four};
        `,
};

const getAnimation = (
    minTime: number,
    maxTime: number,
    returnFunc: (
        time: number,
        animationDelay: number
    ) => FlattenSimpleInterpolation
) => {
    const time = randomIntFromInterval(minTime, maxTime);
    const delay = randomNumFromInterval(1, 4500);
    const animation = returnFunc(time, delay);
    return animation;
};

export {
    randomNumFromInterval,
    randomIntFromInterval,
    getNominalLength,
    getNormallyDistributedElement,
    getScreenSize,
    getGooTranslation,
    returnFuncs,
    getAnimation,
};

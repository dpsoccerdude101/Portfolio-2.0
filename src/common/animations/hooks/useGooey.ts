import { useState } from 'react';

const useGooey = (totalGoo: number) => {
    const [gooArr] = useState(
        [...Array(totalGoo)].map((x) =>
            Math.random() < 0.333 ? 'slow' : 'fast'
        )
    );
    return { vm: { gooArr } };
};

export default useGooey;

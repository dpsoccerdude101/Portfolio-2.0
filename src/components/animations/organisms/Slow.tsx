import { returnFuncs } from '../../../utilities/gooeyService';
import AnimParent from '../molecules/AnimParent';
import Circle from '../molecules/Circle';
import G from '../molecules/G';

const Slow = ({ index, length }: { index: number; length: number }) => (
    <AnimParent $index={index} $length={length}>
        <defs>
            <linearGradient id='gradient'>
                <stop offset='0' stopColor='#f0f'></stop>
                <stop offset='1' stopColor='#0ff'></stop>
            </linearGradient>
        </defs>
        <G $minTime={18} $returnFunc={returnFuncs.g}>
            <Circle
                $cx='50%'
                $cy='50%'
                $r='60px'
                $fill='url(#gradient)'
                $minTime={24}
                $returnFunc={returnFuncs.circle1}
            />
            <Circle
                $cx='50%'
                $cy='50%'
                $r='48px'
                $fill='url(#gradient)'
                $minTime={18}
                $returnFunc={returnFuncs.circle2}
            />
            <Circle
                $cx='50%'
                $cy='50%'
                $r='45px'
                $fill='url(#gradient)'
                $minTime={12}
                $returnFunc={returnFuncs.circle3}
            />

            <Circle
                $cx='50%'
                $cy='50%'
                $r='36px'
                $fill='url(#gradient)'
                $minTime={6}
                $returnFunc={returnFuncs.circle4}
            />
        </G>
    </AnimParent>
);

export default Slow;

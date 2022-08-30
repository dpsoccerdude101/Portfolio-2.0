import { returnFuncs } from '../../../utilities/gooeyService';
import G from '../molecules/G';
import AnimParent from '../molecules/AnimParent';
import Rectangle from '../molecules/Rectangle';

const Fast = ({ index, length }: { index: number; length: number }) => (
    <AnimParent $index={index} $length={length}>
        <defs>
            <linearGradient id='gradient'>
                <stop offset='0' stopColor='#f0f'></stop>
                <stop offset='1' stopColor='#0ff'></stop>
            </linearGradient>
        </defs>

        <G $minTime={18} $returnFunc={returnFuncs.g1}>
            <Rectangle
                $x='82.5%'
                $y='82.5%'
                $rx='15.75%'
                $width='35%'
                $height='35%'
                $fill='url(#gradient)'
                $minTime={16}
                $returnFunc={returnFuncs.rect1}
            />
            <Rectangle
                $x='80%'
                $y='80%'
                $rx='18%'
                $width='40%'
                $height='40%'
                $fill='url(#gradient)'
                $minTime={24}
                $returnFunc={returnFuncs.rect2}
            />
            <Rectangle
                $x='75%'
                $y='75%'
                $rx='22.5%'
                $width='50%'
                $height='50%'
                $fill='url(#gradient)'
                $minTime={16}
                $returnFunc={returnFuncs.rect3}
            />
            <Rectangle
                $x='70%'
                $y='70%'
                $rx='27%'
                $width='60%'
                $height='60%'
                $fill='url(#gradient)'
                $minTime={32}
                $returnFunc={returnFuncs.rect4}
            />
        </G>
    </AnimParent>
);

export default Fast;

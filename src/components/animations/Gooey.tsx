import Goo from 'gooey-react';
import Fast from './organisms/Fast';
import Slow from './organisms/Slow';

type GooeyProps = {
    children?: React.ReactNode;
    className?: string | undefined;
    composite?: boolean | undefined;
    intensity?: 'medium' | 'strong' | 'weak' | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    delay?: string | number | undefined;
    total: number;
};

const Gooey = (props: GooeyProps) => (
    <Goo {...props}>
        {[...Array(props.total)].map((_, index, arr) => {
            return Math.random() < 0.333 ? (
                <Slow index={index} length={arr.length} key={`${index}slow`} />
            ) : (
                <Fast index={index} length={arr.length} key={`${index}fast`} />
            );
        })}
    </Goo>
);

export default Gooey;

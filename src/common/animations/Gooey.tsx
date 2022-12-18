import Goo from 'gooey-react';
import useGooey from './hooks/useGooey';
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

const Gooey = (props: GooeyProps) => {
    const { vm } = useGooey(props.total);
    return (
        <Goo {...props}>
            {vm.gooArr.map((item, index, arr) =>
                item === 'slow' ? (
                    <Slow
                        index={index}
                        length={arr.length}
                        key={`${index}slow`}
                    />
                ) : (
                    <Fast
                        index={index}
                        length={arr.length}
                        key={`${index}fast`}
                    />
                )
            )}
        </Goo>
    );
};

export default Gooey;

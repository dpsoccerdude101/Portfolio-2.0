import Goo from 'gooey-react';

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
    <Goo style={{}} {...props}>
        {[...Array(props.total)].map((elem, index, arr) => {
            const randTime = Math.random();
            return (
                <svg
                    role='img'
                    className='w-64 h-64'
                    style={{
                        position: 'absolute',
                        transform: `translate(${
                            Math.floor(Math.random() * 120) - 20
                        }vw, ${
                            Math.floor(
                                Math.random() *
                                    (((index + 1) / arr.length) * 110)
                            ) - 10
                        }vh)`,
                        //width: '100vw',
                    }}
                >
                    <defs>
                        <linearGradient id='gradient'>
                            <stop offset='0' stop-color='#f0f'></stop>
                            <stop offset='1' stop-color='#0ff'></stop>
                        </linearGradient>
                    </defs>
                    <g
                        style={{
                            animation: `${
                                randTime * 36 + 36 / 2
                            }s linear 0s infinite normal none running rotate_back`,
                        }}
                    >
                        <circle
                            cx='50%'
                            cy='50%'
                            r='42'
                            fill='url(#gradient)'
                            style={{
                                animation: `${
                                    randTime * 48 + 48 / 2
                                }s ease-in-out -3s infinite alternate none running blob_four`,
                            }}
                        ></circle>
                        <circle
                            cx='50%'
                            cy='50%'
                            r='36'
                            fill='url(#gradient)'
                            style={{
                                animation: `${
                                    randTime * 36 + 36 / 2
                                }s ease-in-out -3s infinite alternate none running blob_three`,
                            }}
                        ></circle>
                        <circle
                            cx='50%'
                            cy='50%'
                            r='30'
                            fill='url(#gradient)'
                            style={{
                                animation: `${
                                    randTime * 24 + 24 / 2
                                }s ease-in-out -3s infinite alternate none running blob_two`,
                            }}
                        ></circle>
                        <circle
                            cx='50%'
                            cy='50%'
                            r='24'
                            fill='url(#gradient)'
                            style={{
                                animation: `${
                                    randTime * 12 + 12 / 2
                                }s ease-in-out -3s infinite alternate none running blob_one`,
                            }}
                        ></circle>
                    </g>
                </svg>
            );
        })}
    </Goo>
);

export default Gooey;

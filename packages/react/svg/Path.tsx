import { useRef, useState, useEffect } from 'react';

type Draw = {
    duration: number;
    delay?: number;
};

type PathProps = {
    commands: string[];
    fill?: string | boolean;
    draw?: Draw | false;
};

const Path: React.VFC<PathProps> = ({
    commands,
    fill = false,
    draw = false,
}) => {
    const path = useRef<SVGPathElement>(null);
    const [length, setLength] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (!path.current) throw Error(`'path' is not assigned`);

        setLength(path.current.getTotalLength());
    }, [path]);

    if (draw) {
        const { duration, delay = 0 } = draw;

        return (
            <>
                <path
                    d={commands.join(' ')}
                    fill={fill ? 'currentColor' : 'none'}
                    ref={path}
                />
                <style jsx>{`
                    @keyframes draw {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }

                    path {
                        stroke-dasharray: ${length};
                        stroke-dashoffset: ${length};
                        animation: draw ${duration}ms linear ${delay}ms forwards;
                    }
                `}</style>
            </>
        );
    }

    return (
        <path
            d={commands.join(' ')}
            fill={fill ? 'currentColor' : 'none'}
            ref={path}
        />
    );
};

export default Path;

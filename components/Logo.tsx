import SVG from './SVG';

const Logo = () => (
    <SVG.Wrapper width={32} height={32}>
        <title>Nico Logo</title>
        <desc>A minimalistic rendering of a bike chain</desc>

        <defs>
            <clipPath id="clip-bottom-left-edge">
                <polygon points="0,16 8,16 8,24 16,24 16,32 0,32" />
            </clipPath>
            <clipPath id="clip-centre-edge">
                <polygon points="8,8 8,16 16,16 16,24 24,24 24,8" />
            </clipPath>
            <clipPath id="clip-top-right-edge">
                <polygon points="16,0 16,8 24,8 24,16 32,16 32,0" />
            </clipPath>
            <clipPath id="clip-4">
                <rect x="16" y="7" width="9" height="9" />
            </clipPath>
            <clipPath id="clip-5">
                <rect x="7" y="16" width="9" height="9" />
            </clipPath>
        </defs>

        <g className="logo-edge">
            <g className="logo-circles-edge">
                <SVG.Circle
                    center={{ x: 7, y: 25 }}
                    radius={6}
                    stroke={2}
                    clip="bottom-left-edge"
                />
                <SVG.Circle
                    center={{ x: 16, y: 16 }}
                    radius={6}
                    stroke={2}
                    clip="centre-edge"
                />
                <SVG.Circle
                    center={{ x: 25, y: 7 }}
                    radius={6}
                    stroke={2}
                    clip="top-right-edge"
                />
            </g>

            <g className="logo-helpers-edge">
                <SVG.Circle
                    center={{ x: 16, y: 7 }}
                    radius={3}
                    stroke={2}
                    clip="4"
                />
                <SVG.Circle
                    center={{ x: 25, y: 16 }}
                    radius={3}
                    stroke={2}
                    clip="4"
                />
                <SVG.Circle
                    center={{ x: 7, y: 16 }}
                    radius={3}
                    stroke={2}
                    clip="5"
                />
                <SVG.Circle
                    center={{ x: 16, y: 25 }}
                    radius={3}
                    stroke={2}
                    clip="5"
                />
            </g>
        </g>

        <g className="logo-circles-centre">
            <SVG.Circle center={{ x: 7, y: 25 }} radius={2} stroke={2} />
            <SVG.Circle center={{ x: 16, y: 16 }} radius={2} stroke={2} />
            <SVG.Circle center={{ x: 25, y: 7 }} radius={2} stroke={2} />
        </g>
    </SVG.Wrapper>
);

export default Logo;

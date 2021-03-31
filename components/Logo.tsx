interface Props {
    className: string;
}

export default function Logo(props: Props) {
    return (
        <svg
            role="img"
            viewBox="0 0 32 32"
            className={props.className}
            fill="currentColor"
            stroke="currentColor"
        >
            <title>Nico Logo</title>
            <desc>A minimalistic rendering of a bike chain</desc>

            <defs>
                <clipPath id="1">
                    <polygon points="0,16 8,16 8,24 16,24 16,32 0,32" />
                </clipPath>
                <clipPath id="2">
                    <polygon points="8,8 8,16 16,16 16,24 24,24 24,8" />
                </clipPath>
                <clipPath id="3">
                    <polygon points="16,0 16,8 24,8 24,16 32,16 32,0" />
                </clipPath>
                <clipPath id="4">
                    <rect x="16" y="7" width="9" height="9" />
                </clipPath>
                <clipPath id="5">
                    <rect x="7" y="16" width="9" height="9" />
                </clipPath>
            </defs>

            <circle
                cx="7"
                cy="25"
                r="6"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#1)"
            />
            <circle
                cx="16"
                cy="16"
                r="6"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#2)"
            />
            <circle
                cx="25"
                cy="7"
                r="6"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#3)"
            />

            <circle
                cx="16"
                cy="7"
                r="3"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#4)"
            />
            <circle
                cx="25"
                cy="16"
                r="3"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#4)"
            />
            <circle
                cx="7"
                cy="16"
                r="3"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#5)"
            />
            <circle
                cx="16"
                cy="25"
                r="3"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#5)"
            />

            <circle cx="7" cy="25" r="2" fill="transparent" strokeWidth="2" />
            <circle cx="16" cy="16" r="2" fill="transparent" strokeWidth="2" />
            <circle cx="25" cy="7" r="2" fill="transparent" strokeWidth="2" />
        </svg>
    );
}

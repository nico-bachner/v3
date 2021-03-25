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
                    <rect x="16" y="7" width="9" height="9" />
                </clipPath>
                <clipPath id="2">
                    <rect x="7" y="16" width="9" height="9" />
                </clipPath>
            </defs>

            <circle cx="25" cy="7" r="6" fill="transparent" strokeWidth="2" />

            <rect
                x="16"
                y="7"
                width="9"
                height="9"
                stroke="none"
                fill="currentColor"
                className="text-white dark:text-black"
            />

            <circle cx="7" cy="25" r="6" fill="transparent" strokeWidth="2" />
            <circle cx="16" cy="16" r="6" fill="transparent" strokeWidth="2" />

            <rect
                x="7"
                y="16"
                width="9"
                height="9"
                stroke="none"
                fill="currentColor"
                className="text-white dark:text-black"
            />

            <circle
                cx="16"
                cy="7"
                r="3"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#1)"
            />
            <circle
                cx="25"
                cy="16"
                r="3"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#1)"
            />
            <circle
                cx="7"
                cy="16"
                r="3"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#2)"
            />
            <circle
                cx="16"
                cy="25"
                r="3"
                fill="transparent"
                strokeWidth="2"
                clipPath="url(#2)"
            />

            <circle cx="7" cy="25" r="2" fill="transparent" strokeWidth="2" />
            <circle cx="16" cy="16" r="2" fill="transparent" strokeWidth="2" />
            <circle cx="25" cy="7" r="2" fill="transparent" strokeWidth="2" />
        </svg>
    );
}

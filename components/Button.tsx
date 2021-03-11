interface Props {
    onClick: any;
    children: React.ReactNode;
}

export default function Button(props: Props) {
    return (
        <button
            onClick={props.onClick}
            className="m-4 text-blue hover:text-blue-light"
        >
            {props.children}
        </button>
    );
}

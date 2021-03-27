interface Props {
    children: React.ReactNode;
}

export default function Card(props: Props) {
    return (
        <div className="w-full p-6 text-left rounded shadow transition duration-300 ease-in-out hover:border-gray dark:border border-gray-dark hover:shadow-lg sm:px-8">
            {props.children}
        </div>
    );
}

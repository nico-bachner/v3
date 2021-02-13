export default function Card(props) {
    return (
        <div
            className={
                "w-full text-left border rounded dark:border-gray-700" +
                (props.link
                    ? " " + "hover:bg-gray-100 dark:hover:bg-gray-800" + " "
                    : " ") +
                props.className
            }
        >
            {props.children}
        </div>
    );
}

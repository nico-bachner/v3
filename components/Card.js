export default function Card(props) {
    return (
        <div
            className={
                "w-full text-left border rounded" +
                (props.link == "true"
                    ? " " +
                      "hover:bg-gray-lightest dark:hover:bg-gray-darkest" +
                      " "
                    : " ") +
                props.className
            }
        >
            {props.children}
        </div>
    );
}

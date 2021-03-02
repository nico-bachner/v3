export default function Card(props) {
    return (
        <div
            className={
                "w-full text-left border rounded" +
                (props.link == "true"
                    ? " " +
                      "transition duration-300 ease-in-out hover:shadow-xl hover:border-opacity-0 dark:hover:bg-gray-darkest" +
                      " "
                    : " ") +
                props.className
            }
        >
            {props.children}
        </div>
    );
}

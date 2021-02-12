import Link from "next/link";

export default function Button(props) {
    return (
        <Link href={props.href}>
            <button
                className={
                    "border font-medium text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700" +
                    " " +
                    props.className
                }
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </Link>
    );
}

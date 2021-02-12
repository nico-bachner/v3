import Link from "next/link";

export default function Card(props) {
    return (
        <Link href={props.href}>
            <button
                className={
                    "w-full text-left border rounded hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700" +
                    " " +
                    props.className
                }
            >
                {props.children}
            </button>
        </Link>
    );
}

import Link from './Link';

interface Props {
    href?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Card(props: Props) {
    if (props.href) {
        return (
            <Link
                href={props.href}
                className={
                    'w-full p-6 text-left transition duration-300 ease-in-out dark:border rounded shadow sm:px-8 hover:shadow-lg dark:hover:border-strong' +
                    ' ' +
                    props.className
                }
            >
                {props.children}
            </Link>
        );
    }
    return (
        <div
            className={
                'w-full p-6 text-left transition duration-300 ease-in-out dark:border rounded shadow sm:px-8' +
                ' ' +
                props.className
            }
        >
            {props.children}
        </div>
    );
}

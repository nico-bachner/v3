import { useRouter } from "next/router";

export default function Counter(props: {
    count: number;
    items: Array<Object>;
    modifier: Function;
}) {
    const { locale } = useRouter();

    return (
        <>
            <button
                onClick={() => {
                    if (props.count < props.items.length) {
                        props.modifier(props.count + 2);
                    }
                }}
                className={
                    props.count < props.items.length - 1
                        ? "text-blue"
                        : "cursor-default text-gray-light dark:text-gray-dark"
                }
            >
                {locale == "lu"
                    ? "Méi Weisen"
                    : locale == "de"
                    ? "Zeige Mehr"
                    : locale == "fr"
                    ? "Montrer Plus"
                    : locale == "da"
                    ? "Vise Flere"
                    : "Show More"}
            </button>
            <button
                onClick={() => {
                    if (props.count > 1) {
                        props.modifier(props.count - 2);
                    }
                }}
                className={
                    props.count > 2
                        ? "text-blue"
                        : "cursor-default text-gray-light dark:text-gray-dark"
                }
            >
                {locale == "lu"
                    ? "Manner Weisen"
                    : locale == "de"
                    ? "Zeige Weniger"
                    : locale == "fr"
                    ? "Montrer Moins"
                    : locale == "da"
                    ? "Vise Fære"
                    : "Show Less"}
            </button>
        </>
    );
}

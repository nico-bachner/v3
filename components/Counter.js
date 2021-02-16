import { useRouter } from "next/router";

export default function Counter({ count, items, modifier }) {
    const { locale } = useRouter();

    return (
        <>
            <button
                onClick={() => {
                    if (count < items.length) {
                        modifier(count + 2);
                    }
                }}
                className={count < items.length - 1 ? "link" : "disabled"}
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
                    if (count > 1) {
                        modifier(count - 2);
                    }
                }}
                className={count > 2 ? "link" : "disabled"}
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

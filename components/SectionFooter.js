import { useRouter } from "next/router";

import InternalLink from "./InternalLink";

export default function SectionFooter({ count, items, modifier, href }) {
    const { locale } = useRouter();

    return (
        <div className="flex p-4 space-x-4">
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
            <InternalLink href={href} className="flex-grow text-right link">
                {locale == "lu"
                    ? "Alleguer Weisen"
                    : locale == "de"
                    ? "Alle Zeigen"
                    : locale == "fr"
                    ? "Montrer Tous"
                    : locale == "da"
                    ? "Vise Alle"
                    : "Show All"}
            </InternalLink>
        </div>
    );
}

import { useRouter } from "next/router";

import InternalLink from "./InternalLink";

export default function SectionFooter(props) {
    const { locale } = useRouter();

    return (
        <div className="flex p-4 space-x-4">
            {props.children}
            <InternalLink
                href={props.href}
                className="flex-grow text-right link"
            >
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

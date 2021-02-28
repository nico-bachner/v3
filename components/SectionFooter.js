import { useRouter } from "next/router";

import InternalLink from "./InternalLink";

export default function SectionFooter(props) {
    const { locale } = useRouter();

    return (
        <div className="flex justify-between p-4 sm:space-x-8">
            {props.children}
            <InternalLink
                href={props.href}
                className="text-right sm:flex-grow text-blue hover:text-blue-light active:text-blue-dark"
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

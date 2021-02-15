import InternalLink from "../components/InternalLink";

export default function Custom404() {
    return (
        <>
            <h1>404</h1>
            <p className="text-2xl sm:text-3xl">Page Not Found</p>
            <p className="mb-8 subtitle">
                It seems the page you were looking for does not exist. You
                should double-check the url to make sure you're looking for the
                right page.
            </p>
            <InternalLink href="/" className="px-8 py-4 font-semibold button">
                Return to Homepage
            </InternalLink>
        </>
    );
}

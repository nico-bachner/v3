import InternalLink from "../components/InternalLink";

export default function Custom404() {
    return (
        <main>
            <h1>404</h1>
            <p className="my-4 text-2xl sm:text-3xl">Page Not Found</p>
            <p className="mb-8">
                It seems the page you were looking for does not exist. You
                should double-check the url to make sure you're looking for the
                right page.
            </p>
            <InternalLink
                href="/"
                className="px-8 py-4 font-medium text-black border rounded dark:text-white hover:bg-gray-lightest dark:hover:bg-gray-darkest dark:border-gray-dark"
            >
                Return to Homepage
            </InternalLink>
        </main>
    );
}

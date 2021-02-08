import "../styles/globals.css";

import Head from "next/head";
import Link from "next/link";

function App({ Component, pageProps }) {
    const meta = {
        description: "Aspiring Open Sourcerer",
    };
    const pages = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "About",
            url: "/about",
        },
        {
            title: "Projects",
            url: "/projects",
        },
        {
            title: "Articles",
            url: "/articles",
        },
    ];
    const other = [
        {
            title: "Source Code",
            url: "https://github.com/nico-bachner/v3",
        },
        {
            title: "Uses",
            url: "/uses",
        },
        {
            title: "CV",
            url: "https://read.cv/nicob",
        },
    ];
    const links = [
        {
            title: "GitHub",
            url: "https://github.com/nico-bachner",
        },
        {
            title: "DEV",
            url: "https://dev.to/nicob",
        },
        {
            title: "Stack Overflow",
            url: "https://stackoverflow.com/users/story/13506524",
        },
        {
            title: "Code Golf",
            url: "https://code.golf/golfers/nico-bachner",
        },
    ];

    return (
        <>
            <Head>
                <link rel="icon" href="/icon.svg" />
                <meta name="description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={meta.description} />
            </Head>

            <nav className="sticky top-0 flex items-center justify-between max-w-4xl px-8 py-4 mx-auto my-8 bg-white sm:py-8 dark:bg-black bg-blur">
                <a href="#content" className="sr-only focus:not-sr-only">
                    Skip to content
                </a>
                <a href="/">
                    <svg
                        role="img"
                        viewBox="0 0 512 512"
                        className="w-12 h-12"
                        fill="currentColor"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Icon</title>
                        <desc>A simplistic rendering of a bike chain</desc>
                        <path d="m105.548 359.888c-12.4 0-24.058 4.829-32.826 13.598-18.101 18.101-18.101 47.552 0 65.652 8.768 8.769 20.426 13.598 32.826 13.598s24.058-4.829 32.826-13.598c8.769-8.768 13.598-20.426 13.598-32.826s-4.829-24.059-13.598-32.826c-8.768-8.769-20.426-13.598-32.826-13.598zm11.613 58.037c-3.102 3.102-7.226 4.811-11.613 4.811s-8.511-1.709-11.613-4.811c-6.403-6.403-6.403-16.823 0-23.227 3.102-3.102 7.226-4.811 11.613-4.811s8.511 1.709 11.613 4.811c3.102 3.103 4.811 7.227 4.811 11.613s-1.709 8.512-4.811 11.614z" />
                        <path d="m255.964 209.472c-12.4 0-24.058 4.829-32.826 13.598-18.101 18.101-18.101 47.552 0 65.652 8.769 8.769 20.426 13.598 32.826 13.598s24.058-4.829 32.826-13.598c18.101-18.101 18.101-47.552 0-65.652-8.768-8.769-20.426-13.598-32.826-13.598zm11.613 58.037c-3.102 3.102-7.227 4.811-11.613 4.811-4.387 0-8.511-1.709-11.613-4.811-6.403-6.403-6.403-16.823 0-23.227 3.102-3.102 7.227-4.811 11.613-4.811 4.387 0 8.511 1.709 11.613 4.811 6.404 6.404 6.404 16.824 0 23.227z" />
                        <path d="m406.312 59.124c-12.4 0-24.058 4.829-32.826 13.598-18.101 18.101-18.101 47.552 0 65.652 8.768 8.769 20.426 13.598 32.826 13.598s24.058-4.829 32.826-13.598c18.101-18.101 18.101-47.552 0-65.652-8.768-8.769-20.426-13.598-32.826-13.598zm11.613 58.037c-3.102 3.102-7.227 4.811-11.613 4.811s-8.511-1.709-11.613-4.811c-6.403-6.403-6.403-16.823 0-23.227 3.102-3.102 7.227-4.811 11.613-4.811s8.511 1.709 11.613 4.811c6.403 6.404 6.403 16.824 0 23.227z" />
                        <path d="m481.814 31.97c-19.847-20.355-46.423-31.664-74.833-31.844-.23-.002-.457-.002-.687-.002-28.155 0-54.602 10.95-74.529 30.878-17.88 17.88-28.745 41.602-30.593 66.794l-.006.085c-2.232 28.023-24.169 50.242-52.16 52.831l-.723.067c-25.28 1.8-48.8 12.506-66.899 30.605-17.827 17.826-28.68 41.46-30.576 66.568l-.03.385c-2.264 27.989-24.188 50.17-52.156 52.756l-.969.09c-25.115 1.877-48.763 12.717-66.602 30.533-19.831 19.805-30.857 46.043-31.049 73.88-.191 27.843 10.479 54.228 30.043 74.294 20.022 20.535 46.836 31.845 75.502 31.846h.004c28.157 0 54.63-10.966 74.542-30.878 17.847-17.847 28.704-41.511 30.583-66.65l.089-.97c2.589-27.992 24.808-49.93 52.831-52.162l.238-.019c25.111-1.878 48.754-12.717 66.592-30.532 18.09-18.066 28.848-41.486 30.744-66.59l.099-1.079c2.589-27.998 24.756-49.936 52.708-52.162l.085-.006c25.168-1.847 48.872-12.694 66.745-30.544 19.831-19.805 30.857-46.043 31.049-73.88.192-27.843-10.477-54.228-30.042-74.294zm-172.586 277.328c-12.788 12.771-29.742 20.531-47.74 21.851l-.273.021c-42.605 3.395-76.385 36.746-80.32 79.306l-.126 1.393c-1.321 18.017-9.094 34.984-21.887 47.776-14.246 14.246-33.187 22.092-53.332 22.091-20.509-.001-39.695-8.094-54.023-22.789-14.017-14.376-21.661-33.249-21.524-53.145.137-19.895 8.038-38.667 22.249-52.859 12.787-12.771 29.742-20.53 47.741-21.851l1.393-.126c42.559-3.936 75.911-37.716 79.305-80.32l.001-.013.021-.26c1.321-18.018 9.094-34.984 21.886-47.776 14.246-14.246 33.187-22.092 53.333-22.092 20.508 0 39.693 8.094 54.022 22.79 14.016 14.376 21.66 33.249 21.523 53.144-.138 19.895-8.038 38.667-22.249 52.859zm150.381-150.381c-12.676 12.658-29.445 20.395-47.269 21.814l-.744.057c-24.062 1.917-45.3 13.428-59.927 30.767-4.975-10.655-11.772-20.521-20.237-29.204-9.111-9.345-19.632-16.772-31.09-22.1 17.315-14.647 28.81-35.905 30.729-59.988l.034-.44c1.357-17.953 9.122-34.855 21.874-47.608 14.373-14.373 33.483-22.188 53.813-22.09 20.325.129 39.34 8.222 53.542 22.788 14.016 14.376 21.66 33.249 21.523 53.144-.136 19.895-8.037 38.668-22.248 52.86z" />
                    </svg>
                </a>
                <ul className="justify-end flex-grow hidden space-x-8 sm:flex">
                    {pages.map((page, index) => {
                        return (
                            <li key={index}>
                                <Link href={page.url}>
                                    <a className="text-lg font-medium hover:text-blue-400">
                                        {page.title}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <nav className="fixed bottom-0 w-screen bg-white sm:hidden dark:bg-black bg-blur">
                <ul className="grid grid-cols-4 gap-2 px-8 py-2">
                    {pages.map((page, index) => {
                        return (
                            <li key={index}>
                                <Link href={page.url}>
                                    <button className="w-full py-4 text-sm font-bold hover:text-blue-400">
                                        {page.title}
                                    </button>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <main id="content" className="px-8 mx-auto max-w-prose">
                <Component {...pageProps} />
            </main>

            <footer className="px-8 mx-auto my-20 text-gray-400 dark:text-gray-600 max-w-prose">
                <hr className="dark:border-gray-700" />
                <div className="grid my-12 sm:grid-cols-3">
                    <ul>
                        {pages.map((page, index) => {
                            return (
                                <li
                                    key={index}
                                    className="my-4 transition hover:text-gray-500"
                                >
                                    <Link href={page.url}>
                                        <a>{page.title}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul>
                        {other.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="my-4 transition hover:text-gray-500"
                                >
                                    <Link href={item.url}>
                                        <a>{item.title}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul>
                        {links.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className="my-4 transition hover:text-gray-500"
                                >
                                    <Link href={link.url}>
                                        <a>{link.title}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default App;

import Link from './Link';

interface FooterProps {
    pages: Page[];
    links: Page[];
}

const Footer: React.VFC<FooterProps> = ({ pages, links }) => (
    <footer className="grid gap-12 mx-auto mt-16 mb-24 sm:grid-cols-2">
        <nav className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-4">
            {pages.map((page, index) => {
                return (
                    <Link
                        key={index}
                        href={page.href}
                        className={
                            'sm:text-lg transition duration-300 ease-in-out transform hover:text-stronger hover:-translate-y-1' +
                            ' ' +
                            (index < 4
                                ? 'text-left'
                                : 'text-right sm:text-center')
                        }
                    >
                        {page.title}
                    </Link>
                );
            })}
        </nav>
        <nav className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-4">
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.href}
                        className={
                            'sm:text-lg transition duration-300 ease-in-out transform hover:text-stronger hover:-translate-y-1' +
                            ' ' +
                            (index < 4
                                ? 'text-left sm:text-center'
                                : 'text-right')
                        }
                    >
                        {link.title}
                    </Link>
                );
            })}
        </nav>
    </footer>
);

export default Footer;

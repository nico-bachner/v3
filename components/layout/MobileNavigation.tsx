import { useRouter } from 'next/router';
import { useI18n } from '@lib/hooks/i18n';

import Link from '../Link';

const MobileNavigation: React.VFC = () => {
    const router = useRouter();
    const i18n = useI18n();

    return (
        <nav className="sticky bottom-0 z-50 flex w-full py-8 sm:hidden glass justify-evenly">
            {i18n.pages.slice(0, 4).map((page, index) => (
                <Link
                    key={index}
                    href={page.href}
                    className={`p-2 text-sm font-bold ${
                        router.pathname == page.href
                            ? 'text-light'
                            : 'text-stronger'
                    }`}
                >
                    {page.title}
                </Link>
            ))}
        </nav>
    );
};

export default MobileNavigation;

import styles from './Layout.module.css';

import NavBar from '@lib/components/NavBar';
import BottomNav from '@lib/components/BottomNav';
import Footer from '@lib/components/Footer';
import Breadcrumbs from '@lib/components/Breadcrumbs';

type LayoutProps = {
    width: 'sm' | 'md' | 'lg' | 'xl';
    breadcrumbs?: boolean;
    className?: string;
};

const Layout: React.FC<LayoutProps> = ({
    children,
    width,
    breadcrumbs = true,
    className,
}) => {
    return (
        <div className={styles.container}>
            <NavBar />
            {breadcrumbs && <Breadcrumbs />}
            <main
                className={[
                    styles.layout,
                    styles[`width-${width}`],
                    className,
                ].join(' ')}
            >
                {children}
            </main>
            <Footer />
            <BottomNav />
        </div>
    );
};

export default Layout;

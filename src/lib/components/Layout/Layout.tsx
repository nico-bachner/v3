import styles from './Layout.module.css';

import NavBar from '@lib/components/NavBar';
import BottomNav from '@lib/components/BottomNav';
import Footer from '@lib/components/Footer';
import Breadcrumbs from '@lib/components/Breadcrumbs';

type LayoutProps = {
    width: 'sm' | 'md' | 'lg' | 'xl';
    home?: boolean;
    className?: string;
};

const Layout: React.FC<LayoutProps> = ({
    children,
    width,
    home = false,
    className,
}) => {
    return (
        <div className={styles.container}>
            <NavBar />

            <div
                className={[
                    styles.layout,
                    styles[`width-${width}`],
                    className,
                ].join(' ')}
            >
                {!home && <Breadcrumbs />}

                <main>{children}</main>

                <Footer />
            </div>

            <BottomNav />
        </div>
    );
};

export default Layout;

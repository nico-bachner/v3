import styles from './Layout.module.css';

import NavBar from '@lib/components/NavBar';
import BottomNav from '@lib/components/BottomNav';
import Footer from '@lib/components/Footer';

type LayoutProps = {
    width: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, width, className }) => {
    return (
        <div className={styles.container}>
            <NavBar />
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

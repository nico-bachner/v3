import styles from './Layout.module.css';

import { Footer, Navigation, MobileNavigation } from '$lib/layout';

const Layout: React.FC = ({ children }) => (
    <>
        <Navigation />

        <div className={styles.container}>
            {children}
            <Footer />
        </div>

        <MobileNavigation />
    </>
);

export default Layout;

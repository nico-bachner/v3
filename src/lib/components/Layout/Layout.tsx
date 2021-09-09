import styles from './Layout.module.css';

type LayoutProps = {
    className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
    return (
        <main className={[styles.layout, className].join(' ')}>{children}</main>
    );
};

export default Layout;

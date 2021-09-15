import styles from './Layout.module.css';

type LayoutProps = {
    width: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, width, className }) => {
    return (
        <main
            className={[
                styles.layout,
                styles[`width-${width}`],
                className,
            ].join(' ')}
        >
            {children}
        </main>
    );
};

export default Layout;

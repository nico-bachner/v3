import { useAuth } from '$lib/hooks/useAuth';

const Auth: React.FC = ({ children }) => {
    const auth = useAuth();

    return <>{auth ? children : null}</>;
};

export default Auth;

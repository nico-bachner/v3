import { useRouter } from 'next/router';

const useCurrent = (href: string) => {
    const { pathname, query } = useRouter();

    return (
        href ==
        pathname
            .split('/')
            .map((arg) => {
                if (arg.includes('[') && arg.includes(']')) {
                    const key = arg.slice(1, -1);

                    return query[key];
                }

                return arg;
            })
            .join('/')
    );
};

export { useCurrent };

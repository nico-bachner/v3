import { useRouter } from 'next/router';

const usePath = () => {
    const { /* pathname, query, */ asPath } = useRouter();

    /*
    const path = pathname
        .split('/')
        .map((arg) => {
            if (arg.includes('[') && arg.includes(']')) {
                const key = arg
                    .replace(/\[/g, '')
                    .replace(/\]/g, '')
                    .replace('...', '');

                return query[key];
            }

            return arg;
        })
        .flat()
        .join('/');
    */

    const path = asPath;

    return path;
};

export { usePath };

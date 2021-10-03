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
        .join('/')
        .split('#')[0]!;
    */

    const path = asPath.split('#')[0]!;

    return path;
};

export { usePath };

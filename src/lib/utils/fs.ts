import { promises as fs } from 'fs';

type Props = {
    basePath: string[];
    path: string[];
    extension?: string;
};

type Get<T> = (props: Props) => Promise<T>;

const fetchFile: Get<string> = async ({ basePath, path, extension }) => {
    const fullPath = [...basePath, ...path].join('/');

    const fullFilePath = [fullPath, extension].join('.');

    const file = await fs.readFile(fullFilePath, 'utf-8');

    return file;
};

const fetchDirs: Get<string[][]> = async ({ basePath, path }) => {
    const files = await fs.readdir(
        [process.cwd(), ...basePath, ...path].join('/'),
        'utf-8'
    );

    return files
        .filter((file) => file.split('.').length == 1)
        .map((file) => [...path, file]);
};

const fetchPaths: Get<string[][]> = async ({ basePath, path, extension }) => {
    const files = await fs.readdir(
        [process.cwd(), ...basePath, ...path].join('/'),
        'utf-8'
    );

    if (extension) {
        return files
            .filter((file) => file.includes(extension))
            .map((file) => {
                const [slug] = file.split('.');

                return [...path, slug as string];
            });
    }

    return files.map((file) => {
        const [slug] = file.split('.');

        return [...path, slug as string];
    });
};

const fetchRecursivePaths: Get<string[][]> = async ({
    basePath,
    path,
    extension,
}) => {
    const paths1 = await fetchPaths({
        basePath,
        path,
        extension,
    });
    const dirs1 = await fetchDirs({
        basePath,
        path: [],
    });
    const paths2 = (
        await Promise.all(
            dirs1.map(
                async (path) =>
                    await fetchPaths({
                        basePath,
                        path,
                        extension,
                    })
            )
        )
    ).flat();
    const dirs2 = (
        await Promise.all(
            dirs1.map(
                async (path) =>
                    await fetchDirs({
                        basePath,
                        path,
                    })
            )
        )
    ).flat();
    const paths3 = (
        await Promise.all(
            dirs2.map(
                async (path) =>
                    await fetchPaths({
                        basePath,
                        path,
                        extension,
                    })
            )
        )
    ).flat();

    return [...paths1, ...paths2, ...paths3];
};

export { fetchFile, fetchPaths, fetchRecursivePaths };

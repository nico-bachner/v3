import { promises as fs } from 'fs';

type Props = {
    basePath: string[];
    path: string[];
    extension?: string;
};

type Get<T> = (props: Props) => Promise<T>;

export const getFile: Get<string> = async ({ basePath, path, extension }) => {
    const fullPath = [...basePath, ...path].join('/');

    const fullFilePath = [fullPath, extension].join('.');

    const file = await fs.readFile(fullFilePath, 'utf-8');

    return file;
};

export const getDirs: Get<string[][]> = async ({ basePath, path }) => {
    const files = await fs.readdir(
        [process.cwd(), ...basePath, ...path].join('/'),
        'utf-8'
    );

    return files
        .filter((file) => file.split('.').length == 1)
        .map((file) => [...path, file]);
};

export const getPaths: Get<string[][]> = async ({
    basePath,
    path,
    extension,
}) => {
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

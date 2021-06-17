import { promises as fs } from 'fs';

export const getFile = async (path: string) => await fs.readFile(path, 'utf-8');

export const getSlugs = async (path: string, extension?: string) => {
    const files = await fs.readdir(process.cwd() + '/' + path, 'utf-8');

    if (extension) {
        return files
            .filter((file) => file.includes(extension))
            .map((file) => {
                const [slug, extension] = file.split('.');

                return slug as string;
            });
    }

    return files.map((file) => {
        const [slug, extension] = file.split('.');

        return slug as string;
    });
};

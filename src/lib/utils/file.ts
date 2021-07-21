import matter from 'gray-matter';

type YAML = {
    [key: string]: string | number | boolean | Date;
};

export const getFileData = (file: string) => matter(file).data as YAML;

export const getFileContent = (file: string) => matter(file).content;

import matter from 'gray-matter';

type YAML = {
    [key: string]: string | number | boolean | Date;
};

const getFileData = (file: string) => matter(file).data as YAML;

const getFileContent = (file: string) => matter(file).content;

export { getFileData, getFileContent };

import matter from 'gray-matter';

export const getFileData = (file: string) => matter(file).data as YAML;

export const getFileContent = (file: string) => matter(file).content;

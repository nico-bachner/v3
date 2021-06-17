import matter from 'gray-matter';

export const getFileData = (file: string) => matter(file).data;

export const getFileContent = (file: string) => matter(file).content;

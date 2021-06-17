import readingTime from 'reading-time';

export const getReadingTime = (file: string) =>
    Math.round(readingTime(file).minutes);

import readingTime from 'reading-time';

const getReadingTime: Get<string, number> = (file) =>
    Math.round(readingTime(file).minutes);

export { getReadingTime };

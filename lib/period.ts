export const getPeriod = (from: Date, to: Date | undefined) => {
    const from_year = from.getFullYear();

    if (to) {
        const to_year = to.getFullYear();

        if (to_year == from_year) {
            return `${to_year}`;
        }

        return `${from_year} → ${to_year}`;
    }

    return `${from_year} → Present`;
};

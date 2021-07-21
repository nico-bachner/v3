type GitHubHistory = {
    commit: {
        author: {
            name: string;
            email: string;
            date: string;
        };
    };
};

type Props = {
    basePath: string[];
    path: string[];
    extension?: string;
};

type Get<T> = (props: Props) => Promise<T>;

export const getUpdated: Get<Date | undefined> = async ({
    basePath,
    path,
    extension,
}) => {
    const fullPath = [...basePath, ...path].join('/');
    const fullFilePath = [fullPath, extension].join('.');

    const res = await fetch(
        `https://api.github.com/repos/nico-bachner/v3/commits?path=${fullFilePath}`
    );
    const history: GitHubHistory[] = await res.json();
    const latest: GitHubHistory | undefined = history[0];

    if (latest) {
        return new Date(latest.commit.author.date);
    }
};

import type { NextApiRequest, NextApiResponse } from "next";
import type { GitHubRepository } from "../../lib/types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const GitHubRepositoriesResponse = await fetch(
        "https://api.github.com/users/nico-bachner/repos"
    );
    const GitHubRepositories = await GitHubRepositoriesResponse.json();

    const articles = GitHubRepositories.map(
        (GitHubRepository: GitHubRepository) => {
            return {
                name: GitHubRepository.name,
                description: GitHubRepository.description,
                url: GitHubRepository.html_url,
                isFork: GitHubRepository.fork,
                stars: GitHubRepository.stargazers_count,
            };
        }
    );

    return res.status(200).json(articles);
};

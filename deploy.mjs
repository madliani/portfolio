import { publish } from "gh-pages";

publish(
    "./dist",
    {
        branch: "main",
        repo: "https://github.com/madliani/madliani.github.io.git"
    },
    console.error
);

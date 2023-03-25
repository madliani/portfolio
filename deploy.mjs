import { publish } from "gh-pages";

function deploy() {
    publish(
        "dist",
        {
            branch: "main",
            repo: "https://github.com/crystallographer/crystallographer.github.io.git"
        },
        console.error
    );
}

deploy();

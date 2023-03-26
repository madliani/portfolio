import { publish } from "gh-pages";

try {
    publish("./dist", {
        branch: "main",
        repo: "https://github.com/crystallographer/crystallographer.github.io.git"
    });
} catch (error) {
    console.error(error);
}

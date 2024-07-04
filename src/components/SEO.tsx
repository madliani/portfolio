import { Helmet } from "react-helmet";

type Meta = { content: string; name: string };

type Properties = {
    description?: string;
    lang?: string;
    meta?: Meta[];
    title: string;
};

export const SEO = ({
    description = "My personal portfolio that was built with Bootstrap, React, styled-components and TypeScript.",
    lang = "en",
    meta = [],
    title
}: Properties) => {
    const htmlAttributes = {
        lang
    };
    const titleTemplates = "Rakhman A. | %s";

    return (
        <Helmet
            htmlAttributes={htmlAttributes}
            meta={[
                {
                    content: description,
                    name: "description"
                },
                {
                    content: description,
                    property: "og:description"
                },
                {
                    content:
                        "https://raw.githubusercontent.com/madliani/portfolio/main/src/assets/images/portfolio-homepage.png",
                    name: "og:image"
                },
                {
                    content: "madliani.vercel.app",
                    name: "og:site_name"
                },
                {
                    content: title,
                    property: "og:title"
                },
                ...meta
            ]}
            title={title}
            titleTemplate={titleTemplates}
        />
    );
};

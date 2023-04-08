import { Helmet } from "react-helmet";

type Meta = { name: string; content: string };

type Properties = {
    title: string;

    description?: string;
    lang?: string;
    meta?: Meta[];
};

export const SEO = function ({
    description = "My personal portfolio that was built with Bootstrap, React, styled-components and TypeScript.",
    lang = "en",
    meta = [],
    title
}: Properties) {
    // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
    const htmlAttributes = {
        lang
    };
    const titleTemplates = "Rakhman A. | %s";

    return (
        <Helmet
            htmlAttributes={htmlAttributes}
            // eslint-disable-next-line react-perf/jsx-no-new-array-as-prop
            meta={[
                {
                    name: "description",
                    content: description
                },
                {
                    property: "og:description",
                    content: description
                },
                {
                    name: "og:image",
                    content:
                        "https://raw.githubusercontent.com/crystallographer/portfolio/main/src/assets/images/portfolio-homepage.png"
                },
                {
                    name: "og:site_name",
                    content: "crystallographer.github.io"
                },
                {
                    property: "og:title",
                    content: title
                },
                ...meta
            ]}
            title={title}
            titleTemplate={titleTemplates}
        />
    );
};

import { Helmet } from "react-helmet";

interface SEOProps {
    description?: string;
    lang?: string;
    meta?: Array<{ name: string; content: string }>;
    title: string;
}

function SEO({
    description = "My personal portfolio that was built with Bootstrap, React, styled-components and TypeScript.",
    lang = "en",
    meta = [],
    title = "Rakhman A."
}: SEOProps) {
    const htmlAttributes = {
        lang
    };
    const titleTemplates = `${title} | %s`;

    return (
        <Helmet
            htmlAttributes={htmlAttributes}
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
}

export default SEO;

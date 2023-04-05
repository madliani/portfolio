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
    title
}: SEOProps) {
    const defaultTitle = "Rakhman A.";

    return (
        <Helmet
            // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={defaultTitle ? `${defaultTitle} | %s` : ""}
            meta={[
                {
                    name: "description",
                    content: description
                },
                {
                    property: "og:title",
                    content: title
                },
                {
                    property: "og:description",
                    content: description
                }
            ].concat(meta)}
        />
    );
}

export default SEO;

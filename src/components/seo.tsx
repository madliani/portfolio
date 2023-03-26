import { Helmet } from "react-helmet";

interface SEOProps {
    description?: string;
    lang?: string;
    meta?: Array<{ name: string; content: string }>;
    title: string;
}

function SEO({
    description = "My personal portfolio that was built with Bootstrap, React, SASS and TypeScript.",
    lang = "en",
    meta = [],
    title
}: SEOProps) {
    const defaultTitle = "The Portfolio";

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
                },
                {
                    property: "og:type",
                    content: "website"
                }
            ].concat(meta)}
        />
    );
}

export default SEO;

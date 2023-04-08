import { Projects } from "../components/projects";
import { SEO } from "../components/seo";
import { Layout } from "../layouts/layout";

export const Portfolio = function () {
    return (
        <>
            <SEO title="Portfolio" />
            <Layout>
                <div>
                    <Projects />
                </div>
            </Layout>
        </>
    );
};

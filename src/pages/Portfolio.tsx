import { Projects } from "../components/Projects";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";

export const Portfolio = () => {
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

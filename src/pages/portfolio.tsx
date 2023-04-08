import Projects from "../components/projects";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Portfolio = function () {
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

export default Portfolio;

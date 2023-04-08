import Projects from "../components/projects";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Portfolio = function () {
    return (
        <Layout>
            <SEO title="Portfolio" />
            <div>
                <Projects />
            </div>
        </Layout>
    );
};

export default Portfolio;

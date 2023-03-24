import Projects from "../components/projects";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Portfolio = () => {
    return (
        <Layout>
            <SEO title="Portfolio" />
            <div className="Portfolio">
                <Projects />
            </div>
        </Layout>
    );
};

export default Portfolio;

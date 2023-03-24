import Education from "../components/education";
import Experience from "../components/experience";
import Info from "../components/info";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <div className="About">
                <Info />
                <Experience />
                <Education />
            </div>
        </Layout>
    );
};

export default About;

import Banner from "../components/banner";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <div className="Home">
            <Banner />
        </div>
    </Layout>
);

export default Home;

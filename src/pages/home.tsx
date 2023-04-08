import Banner from "../components/banner";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Home = function () {
    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <Banner />
            </div>
        </Layout>
    );
};

export default Home;

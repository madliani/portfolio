import { Banner } from "../components/banner";
import { SEO } from "../components/seo";
import { Layout } from "../layouts/layout";

export const Home = function () {
    return (
        <>
            <SEO title="Home" />
            <Layout>
                <div>
                    <Banner />
                </div>
            </Layout>
        </>
    );
};

import { Banner } from "../components/Banner";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";

export const Home = () => {
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

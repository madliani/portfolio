import { Education } from "../components/education";
import { Experience } from "../components/experience";
import { Info } from "../components/info";
import { SEO } from "../components/seo";
import { Layout } from "../layouts/layout";

export const About = function () {
    return (
        <>
            <SEO title="About" />
            <Layout>
                <div>
                    <Info />
                    <Experience />
                    <Education />
                </div>
            </Layout>
        </>
    );
};

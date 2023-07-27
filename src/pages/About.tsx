import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Info } from "../components/Info";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";

export const About = () => {
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

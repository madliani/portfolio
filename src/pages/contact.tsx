import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";
import Footer from "../components/footer";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <div className="Contact">
                <ContactInfo />
                <ContactForm />
                <Footer />
            </div>
        </Layout>
    );
};

export default Contact;

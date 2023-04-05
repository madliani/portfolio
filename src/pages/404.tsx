import { Link } from "react-router-dom";

import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Jumbotron = styled.div`
    background: none;
    position: absolute;
    text-align: center;
    padding: 2rem 1rem;
    top: 20vh;
    width: 100%;
    margin: 0;

    @media (max-width: 768px) {
        top: 12vh;
    }
`;

const ErrorPage = () => {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <div>
                <Jumbotron className="jumbotron-fluid error-jumbotron">
                    <h1>
                        <span className="main-color">404</span> Page Not Found
                    </h1>
                    <h6>
                        Sorry but the page you are looking for is not available.
                    </h6>
                    <Link to="/">
                        <button className="primary-btn">Return home</button>
                    </Link>
                </Jumbotron>
            </div>
        </Layout>
    );
};

export default ErrorPage;

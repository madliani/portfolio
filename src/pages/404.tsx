import { Link } from "react-router-dom";
import styled from "styled-components";

import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Jumbotron = styled.div`
    position: absolute;
    top: 20vh;
    width: 100%;
    margin: 0;
    padding: 2rem 1rem;
    text-align: center;
    background: none;

    @media (width <= 768px) {
        top: 12vh;
    }
`;

const ErrorPage = function () {
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

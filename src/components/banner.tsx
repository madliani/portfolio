import Socials from "./socials";

const Banner: React.FC = () => {
    return (
        <div className="Banner">
            <div className="jumbotron jumbotron-fluid">
                <div className="banner-content">
                    <h1>
                        <span className="main-color">Rakhman</span>{" "}
                        Abdurakhmanov
                    </h1>
                    <h6>Front-end Developer</h6>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Banner;

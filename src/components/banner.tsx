import Socials from "./socials";

const Banner: React.FC = () => {
    return (
        <div className="Banner">
            <div className="jumbotron jumbotron-fluid">
                <div className="banner-content">
                    <h1>
                        <span className="main-color">Keaton</span> Sentak
                    </h1>
                    <h6>Software Engineer</h6>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Banner;

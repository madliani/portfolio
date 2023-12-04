import styled from "styled-components";

const PROFILE_IMAGE = process.env.PROFILE_IMAGE;

const AboutText = styled.div`
    line-height: 2rem;
`;

const ResumeButton = styled.button`
    margin: 2rem 0 1rem;
    padding: 18px 40px;

    color: var(--light) !important;

    background-color: var(--dark);
    border: 2px solid var(--green-alt);
    border-radius: 1.25rem;

    &:hover {
        color: var(--green-alt) !important;
        background-color: var(--dark);
    }
`;

const Image = styled.img`
    width: 300px;
    height: 350px;
    border-radius: 1.25rem;
`;

export const Info = () => {
    return (
        <div className="Info">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">About</span> Me
                        </h1>
                    </div>
                </div>
                <div className="row text-start">
                    <div className="col-md-6 about-section">
                        <AboutText>
                            I am a hardworking and responsible programmer with
                            two years of commercial development experience in
                            frontend. I have experience with React and
                            TypeScript. I have a good understanding of layout
                            design and excellent knowledge of JavaScript. But I
                            can learn any technology in a reasonable amount of
                            time if needed.
                        </AboutText>
                        <a
                            href={
                                "https://raw.githubusercontent.com/madliani/portfolio/main/assets/docs/CV.pdf"
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <ResumeButton>Download Resume</ResumeButton>
                        </a>
                    </div>
                    {PROFILE_IMAGE && (
                        <div className="col-md-6 mb-3 d-flex justify-content-center">
                            <Image
                                alt="Profile"
                                src={`data:image/png;base64,${PROFILE_IMAGE}`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

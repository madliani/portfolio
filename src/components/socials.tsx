import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const InlineItem = styled.li`
    display: inline-block;
    margin-top: 10px;

    a {
        height: 50px;
        width: 50px;
        background-color: var(--dark);
        color: var(--light);
        font-size: 20px;
        padding: 12px;
        border: 2px solid var(--greenAlt);
        border-radius: 1.25rem;
    }

    a:hover {
        background-color: var(--dark);
        color: var(--greenAlt);
    }

    &:not(:last-child) {
        margin-right: 15px;
    }
`;

const Socials: React.FC = () => {
    return (
        <div>
            <div className="col-sm-12 text-center">
                <ul>
                    {/* LinkedIn */}
                    <InlineItem>
                        <a
                            href="https://linkedin.com/in/rakhman-abdurakhmanov-976b4b253"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
                        </a>
                    </InlineItem>
                    {/* GitHub */}
                    <InlineItem>
                        <a
                            href="https://github.com/crystallographer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                        </a>
                    </InlineItem>
                    {/* Email */}
                    <InlineItem>
                        <a
                            href="mailto:r0475582@proton.me"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                        </a>
                    </InlineItem>
                </ul>
            </div>
        </div>
    );
};

export default Socials;

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const InlineItem = styled.li`
    display: inline-block;
    margin-top: 10px;

    a {
        width: 50px;
        height: 50px;
        padding: 12px;
        font-size: 20px;
        color: var(--light);
        background-color: var(--dark);
        border: 2px solid var(--green-alt);
        border-radius: 1.25rem;
    }

    a:hover {
        color: var(--green-alt);
        background-color: var(--dark);
    }

    &:not(:last-child) {
        margin-right: 15px;
    }
`;

const Socials: React.FC = function () {
    return (
        <div>
            <div className="col-sm-12 text-center">
                <ul>
                    <InlineItem>
                        <a
                            href="https://linkedin.com/in/rakhman-abdurakhmanov-976b4b253"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
                        </a>
                    </InlineItem>
                    <InlineItem>
                        <a
                            href="https://github.com/crystallographer"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                        </a>
                    </InlineItem>
                    <InlineItem>
                        <a
                            href="mailto:r0475582@proton.me"
                            rel="noopener noreferrer"
                            target="_blank"
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

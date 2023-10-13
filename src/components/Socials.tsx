import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

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

export const Socials = () => {
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
                            <FontAwesomeIcon fixedWidth icon={faLinkedinIn} />
                        </a>
                    </InlineItem>
                    <InlineItem>
                        <a
                            href="https://github.com/crystallographer"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon fixedWidth icon={faGithub} />
                        </a>
                    </InlineItem>
                    <InlineItem>
                        <a
                            href="mailto:madliani@hotmail.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon fixedWidth icon={faEnvelope} />
                        </a>
                    </InlineItem>
                </ul>
            </div>
        </div>
    );
};

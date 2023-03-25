import {
    faGithub,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials: React.FC = () => {
    return (
        <div className="Socials">
            <div className="col-sm-12 text-center">
                <ul className="social-list">
                    {/* LinkedIn */}
                    <li className="social-inline-item">
                        <a
                            href="https://linkedin.com/in/rakhman-abdurakhmanov-976b4b253"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
                        </a>
                    </li>
                    {/* GitHub */}
                    <li className="social-inline-item">
                        <a
                            href="https://github.com/crystallographer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                        </a>
                    </li>
                    {/* Email */}
                    <li className="social-inline-item">
                        <a
                            href="mailto:r0475582@proton.me"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Socials;

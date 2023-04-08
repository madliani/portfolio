import {
    faCode,
    faExternalLinkAlt,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "reactstrap";
import styled from "styled-components";

type Properties = {
    title: string;
    imgSrc: string;
    imgAlt: string;
    viewCode: string;
    projectDescription: string;
    modal: boolean;
    toggle: () => void;
    viewSite?: string;
};

const ModalBody = styled.div`
    background-color: var(--dark);
`;

const ModalWrapper = styled(({ children, ...properties }) => (
    <Modal {...properties}>{children}</Modal>
))`
    .close {
        position: absolute;
        z-index: 1;
        top: 12px;
        right: 24px;
        font-size: 26px;
        line-height: 40px;
        color: var(--light);
        opacity: 1;
        background-color: var(--dark);
        border: none;
    }
`;

const Title = styled.h2`
    color: var(--light);
`;

const Img = styled.img`
    border-radius: 6px;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled(({ children, ...properties }) => (
    <FontAwesomeIcon {...properties}>{children}</FontAwesomeIcon>
))`
    margin-right: 5px;
    color: var(--light);
`;

const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    color: var(--light) !important;
    background-color: var(--dark);
    border: 2px solid var(--green-alt);
    border-radius: 1.25rem;

    &:hover {
        color: var(--green-alt) !important;
        background-color: var(--dark);
    }

    &:hover ${Icon} {
        color: var(--green-alt) !important;
    }
`;

export const ProjectItemModal = function ({
    title,
    imgSrc,
    imgAlt,
    viewCode,
    viewSite,
    modal,
    toggle,
    projectDescription
}: Properties) {
    return (
        <ModalWrapper size="lg" isOpen={modal} toggle={toggle} role="dialog">
            <button
                onClick={toggle}
                type="button"
                className="close"
                aria-label="Close"
            >
                <span aria-hidden="true">
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </span>
            </button>
            <ModalBody className="modal-body text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <Title className="text-uppercase mb-3">
                                {title}
                            </Title>
                            <Img
                                className="img-fluid mb-3"
                                src={imgSrc}
                                alt={imgAlt}
                            />
                            <p>{projectDescription}</p>
                            <Links className="text-center">
                                {viewSite && (
                                    <div>
                                        <a
                                            href={viewSite}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <Button>
                                                <Icon
                                                    icon={faExternalLinkAlt}
                                                ></Icon>
                                                View Site
                                            </Button>
                                        </a>
                                    </div>
                                )}
                                <div>
                                    <a
                                        href={viewCode}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <Button>
                                            <Icon icon={faCode}></Icon>
                                            View Code
                                        </Button>
                                    </a>
                                </div>
                            </Links>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </ModalWrapper>
    );
};

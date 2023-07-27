import {
    faCode,
    faExternalLinkAlt,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "reactstrap";
import { styled } from "styled-components";

type Properties = {
    imgAlt: string;
    imgSrc: string;
    modal: boolean;
    projectDescription: string;
    title: string;
    toggle: () => void;
    viewCode: string;
    viewSite?: string;
};

const ModalBody = styled.div`
    background-color: var(--dark);
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Icon = styled(({ children, ...properties }) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
    imgAlt,
    imgSrc,
    modal,
    projectDescription,
    title,
    toggle,
    viewCode,
    viewSite
}: Properties) {
    return (
        <ModalWrapper isOpen={modal} role="dialog" size="lg" toggle={toggle}>
            <button
                aria-label="Close"
                className="close"
                onClick={toggle}
                type="button"
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
                                alt={imgAlt}
                                className="img-fluid mb-3"
                                src={imgSrc}
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
                                                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                                {/* @ts-ignore */}
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
                                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                            {/* @ts-ignore */}
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

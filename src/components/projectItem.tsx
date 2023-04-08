import {
    faCode,
    faExternalLinkAlt,
    faPlus,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Modal } from "reactstrap";
import styled from "styled-components";

type Properties = {
    title: string;
    imgSrc: string;
    imgAlt: string;
    viewCode: string;
    projectDescription: string;
    viewSite?: string;
};

const Item = styled.div`
    position: relative;
    display: block;
    margin-bottom: 30px;
`;

const ItemCaption = styled.div`
    cursor: pointer;
    position: absolute;
    opacity: 0;
    background-color: rgb(0 0 0 / 20%);
    border-radius: 6px;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 1;
    }

    @media (width <= 768px) {
        &:hover {
            opacity: 0;
        }
    }
`;

const Img = styled.img`
    width: 350px;
    height: 200px;
    border-radius: 6px;

    @media (width <= 768px) {
        width: 350px;
        height: 200px;
    }
`;

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

const ModalTitle = styled.h2`
    color: var(--light);
`;

const ModalImg = styled.img`
    border-radius: 6px;
`;

const ModalLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalIcon = styled(({ children, ...properties }) => (
    <FontAwesomeIcon {...properties}>{children}</FontAwesomeIcon>
))`
    margin-right: 5px;
    color: var(--light);
`;

const ModalButton = styled.button`
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

    &:hover ${ModalIcon} {
        color: var(--green-alt) !important;
    }
`;

const ProjectItem: React.FC<Properties> = function ({
    title,
    imgSrc,
    imgAlt,
    viewCode,
    viewSite,
    projectDescription
}: Properties) {
    const [modal, setModal] = useState<boolean>(false);
    // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
    const toggle = (): void => setModal(!modal);

    return (
        <>
            <div className="col-lg-4 col-md-6">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                <Item className="mx-auto" onClick={toggle}>
                    <ItemCaption className="d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="text-center text-white">
                            <FontAwesomeIcon
                                icon={faPlus}
                                size="3x"
                            ></FontAwesomeIcon>
                        </div>
                    </ItemCaption>
                    <Img className="img-fluid" src={imgSrc} alt={imgAlt} />
                    <p className="project-title">{title}</p>
                </Item>
            </div>
            <ModalWrapper
                size="lg"
                isOpen={modal}
                toggle={toggle}
                role="dialog"
            >
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
                                <ModalTitle className="text-uppercase mb-3">
                                    {title}
                                </ModalTitle>
                                <ModalImg
                                    className="img-fluid mb-3"
                                    src={imgSrc}
                                    alt={imgAlt}
                                />
                                <p>{projectDescription}</p>
                                <ModalLinks className="text-center">
                                    {viewSite && (
                                        <div>
                                            <a
                                                href={viewSite}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <ModalButton>
                                                    <ModalIcon
                                                        icon={faExternalLinkAlt}
                                                    ></ModalIcon>
                                                    View Site
                                                </ModalButton>
                                            </a>
                                        </div>
                                    )}
                                    <div>
                                        <a
                                            href={viewCode}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <ModalButton>
                                                <ModalIcon
                                                    icon={faCode}
                                                ></ModalIcon>
                                                View Code
                                            </ModalButton>
                                        </a>
                                    </div>
                                </ModalLinks>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalWrapper>
        </>
    );
};

export default ProjectItem;

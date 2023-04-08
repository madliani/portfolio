import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { ProjectItemModal } from "./ProjectItemModal";

type Properties = {
    imgAlt: string;
    imgHeight?: string;
    imgSrc: string;
    imgWidth?: string;
    projectDescription: string;
    title: string;
    viewCode: string;
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

export const ProjectItem = function ({
    imgAlt,
    imgHeight,
    imgSrc,
    imgWidth,
    projectDescription,
    title,
    viewCode,
    viewSite
}: Properties) {
    const Img = styled.img`
        width: ${imgWidth ?? "350px"};
        height: ${imgHeight ?? "200px"};
        border-radius: 6px;

        @media (width <= 768px) {
            width: 350px;
            height: 200px;
        }
    `;

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

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
                    <Img alt={imgAlt} className="img-fluid" src={imgSrc} />
                    <p className="project-title">{title}</p>
                </Item>
            </div>
            <ProjectItemModal
                imgAlt={imgAlt}
                imgSrc={imgSrc}
                modal={modal}
                projectDescription={projectDescription}
                title={title}
                toggle={toggle}
                viewCode={viewCode}
                viewSite={viewSite}
            />
        </>
    );
};

import React from "react";
import "./Card.css";

const Card = ({imageSrc, title, description, buttonText, link}) => {
    return(
        <div className="card">
            {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
            <div className="card-conteudo">
                <h2 className="card-titulo">{title}</h2>
                <p className="card-texto">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-button"
                >
                    {buttonText}   
                </a>
            </div>
        </div>
    );
};

export default Card;
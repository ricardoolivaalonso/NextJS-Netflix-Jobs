import { CardDescriptionElement } from "../03-elements/CardDescriptionElement"
import { CardTitleElement } from "../03-elements/CardTitleElement"
import { LinkElement } from "../03-elements/LinkElement"

export const GenericCardComponent = ({title, description, link, decorator = false, image}) => {
    return(
        <article className={`card ${!decorator ? 'card--s2': ''}`}>
            <div className="card__info">
                <div className="card__info-wrapper">
                    <CardTitleElement>{title}</CardTitleElement>
                    <CardDescriptionElement>{description}</CardDescriptionElement>
                    <LinkElement>{link}</LinkElement>
                </div>
            </div>
            { decorator && <div className="card__decorator"></div> }
            <div className="card__bg" style={{backgroundImage: `url(${image})`}}></div>
        </article>
    )
}
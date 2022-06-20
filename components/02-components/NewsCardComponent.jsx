import { CardDescriptionElement } from "../03-elements/CardDescriptionElement"
import { CardTitleElement } from "../03-elements/CardTitleElement"
import { LinkElement } from "../03-elements/LinkElement"
import parse from 'html-react-parser'

export const NewsCardComponent = ({category, title, description, link, image}) => {
    return(
        <article className="news-card">
            <h4 className="news-card__category">{category}</h4>
            <CardTitleElement>{title}</CardTitleElement>
            { description && <CardDescriptionElement>{parse(`${description}`)}</CardDescriptionElement>}
            { image && <img className="news-card__image" src={image} />  }
            <LinkElement>{link}</LinkElement>
        </article>
    )
}
export const TeamCardComponent = ({img, title, list}) => {
    return(
        <article className="teams-card">
            <img className="teams-card__img" src={img}/>
            <div className="teams-card__list">
                <h4 className="teams-card__title">{title}</h4>
                { list.map( l => <a className="teams-card__link" key={l} >{l}</a>) }             
            </div>
        </article>
    )
}
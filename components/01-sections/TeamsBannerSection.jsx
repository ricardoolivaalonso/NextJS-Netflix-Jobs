export const TeamsBannerSection = ({img}) => {
    return(
        <section className="teams-banner">
            <div className="teams-banner__bg">
                <img className="teams-banner__img" src={img} />
            </div>
        </section>
    )
}
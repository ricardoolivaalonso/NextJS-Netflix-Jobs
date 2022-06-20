export const LatestCardComponent = ({title, img}) => {
    return(
        <article className="latest-card">
            <div className="latest-card__bg">
                <img className="latest-card__img" src={img} />
            </div>
            <div className="latest-card__info">
                <svg className="latest-card__icon" viewBox="0 0 90 90" width={64} height={64}>
                    <path
                        fill="#FFF"
                        fillRule="evenodd"
                        d="M45 4C22.393 4 4 22.393 4 45s18.393 41 41 41 41-18.393 41-41S67.607 4 45 4m0 86C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45-20.187 45-45 45M32 27.387v34.9c0 1.06 1.136 1.728 2.056 1.208l30.902-17.45c.938-.53.938-1.885 0-2.414L34.056 26.18c-.92-.52-2.056.148-2.056 1.207"
                    />
                </svg>
                <h4 className="latest-card__title">{title}</h4>
            </div>
        </article>
    )
}
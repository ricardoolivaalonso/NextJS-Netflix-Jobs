import { GenericCardComponent } from "../02-components/GenericCardComponent"

export const CardSection = ({title, description, link, decorator, image}) => {
    console.log(image)
    return(
        <section className="cards">
            <div className="cards__wrapper">
                <GenericCardComponent 
                    title={title} 
                    description={description} 
                    link={link} 
                    decorator={decorator}
                    image={image}
                />
            </div>
        </section>
    )
}
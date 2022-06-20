import { TeamCardComponent } from "../02-components/TeamCardComponent"
import { CardTitleElement } from "../03-elements/CardTitleElement"

export const TeamsSection = ({title, data}) => {
    return(
        <section className="teams">
            <div className="teams__wrapper">
                <CardTitleElement>{title}</CardTitleElement>
                <div className="teams__list">
                    { data?.map( d => <TeamCardComponent key={d.id} img={d.img} title={d.title} list={d.list}/> )}                    
                </div>
            </div>
        </section>
    )
}
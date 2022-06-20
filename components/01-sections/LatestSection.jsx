import { LatestCardComponent } from "../02-components/LatestCardComponent"

const data = [
    {
        id: "1",
        title: "9 to 5 with Heather Dowdy",
        img: "assets/images/latest--item1.png"
    },
    {
        id: "2",
        title: "Reed Hastings' Top 5 Lessons Learned",
        img: "assets/images/latest--item2.png"
    },
    {
        id: "3",
        title: "Sowing the Seeds: Inclusion Takes Root at Netflix",
        img: "assets/images/latest--item3.png"
    },
]

export const LatestSection = () => {
    return(
        <section className="latest">
            <div className="latest__wrapper">
               { data.map( d => <LatestCardComponent key={d.id} title={d.title} img={d.img} /> ) }
            </div>
        </section>
    )
}
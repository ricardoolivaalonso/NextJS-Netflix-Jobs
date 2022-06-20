import { TeamsBannerSection } from "../../components/01-sections/TeamsBannerSection";
import { TeamsSection } from "../../components/01-sections/TeamsSection";

const img = "assets/images/locations-banner.jpeg"
const title = "Locations Across the Globe"
const data = [
    {
        id: "1",
        img: "assets/images/locations--item1.svg",
        title: "Product",
        list: [
            "Amsterdam, Netherlands",
            "Berlin, Germany",
            "London, United Kingdom",
            "Madrid, Spain",
            "Paris, France",
            "Rome, Italy",
            "Istanbul, Turkey",
            "Stockholm, Sweden",
            "Copenhagen, Denmark",
            "Warsaw, Poland"
        ]
    },
    {
        id: "2",
        img: "assets/images/locations--item2.svg",
        title: "Asia Pacific",
        list: [
            "Bangkok, Thailand",
            "Hsinchu City, Taiwan",
            "Manila, Philippines",
            "Mumbai, India",
            "Seoul, South Korea",
            "Singapore, Singapore",
            "Sydney, Australia",
            "Tokyo, Japan"
        ]
    },
    {
        id: "3",
        img: "assets/images/locations--item3.svg",
        title: "The United States Canada",
        list: [
            "Los Angeles, California",
            "Los Gatos, California",
            "New York, New York",
            "Salt Lake City, Utah",
            "Washington, DC",
            "Toronto, Canada"
        ]
    },
    {
        id: "4",
        img: "assets/images/locations--item4.svg",
        title: "Latin America",
        list: [
            "Alphaville, Brazil",
            "Mexico City, Mexico",
            "Buenos Aires, Argentina",
            "Bogota, Colombia"
        ]
    },
   
]

export default function LocationsPage(){
    return(
        <>
            <TeamsBannerSection img={img}/>
            <TeamsSection title={title} data={data}/>
        </>
    )
}
import { TeamsBannerSection } from "../../components/01-sections/TeamsBannerSection";
import { TeamsSection } from "../../components/01-sections/TeamsSection";

const img = "assets/images/teams-banner.jpeg"
const title = "Join Your Dream Team"
const data = [
    {
        id: "1",
        img: "assets/images/teams__item1.svg",
        title: "Product",
        list: [
            "Business Development",
            "Client and UI Engineering",
            "Consumer Insights",
            "Core Engineering",
            "Creative Production",
            "Data Platform",
            "Data Science and Engineering",
            "Design",
            "Partnership",
            "Product Management",
            "Security",
            "Studio Technologies",
            "Video Encoding and Streaming"
        ]
    },
    {
        id: "2",
        img: "assets/images/teams__item2.svg",
        title: "Content",
        list: [
            "Content Acquisition",
            "Content Legal",
            "Creative Content",
            "Post Production Management",
            "Production Services and Technology",
            "Production Management",
            "VFX",
            "Virtual Production",
            "Animation"
        ]
    },
    {
        id: "3",
        img: "assets/images/teams__item3.svg",
        title: "Corporate Functions",
        list: [
            "Communications",
            "Customer Service",
            "Corporate Real Estate, Employee Health, Workplace, and Security",
            "Finance",
            "Financial Planning and Analysis",
            "Legal and Public Policy",
            "Netflix Technology Services",
            "Strategy and Analysis",
            "Talent and Recruiting",
            "Travel and Transportation"
        ]
    },
    {
        id: "4",
        img: "assets/images/teams__item4.svg",
        title: "Marketing & Publicity",
        list: [
            "Editorial and Publishing",
            "Consumer Products",
            "Creative Marketing",
            "Creative Marketing Production",
            "Partner Marketing",
            "Publicity",
            "Regional Marketing"
        ]
    },
    {
        id: "5",
        img: "assets/images/teams__item5.svg",
        title: "Games",
        list: [
            "Night School Studio",
            "Netflix Games Studio",
            "Boss Fight Entertainment"
        ]
    }
]

export default function TeamsPage(){
    return(
        <>
            <TeamsBannerSection img={img}/>
            <TeamsSection title={title} data={data}/>
        </>
    )
}
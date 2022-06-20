import { NewsCardComponent } from "../02-components/NewsCardComponent"

const data = [
    {
        id: "1",
        category: 'TECH BLOG',
        title: "How Netflix Content Engineering makes a federated graph searchable (Part 2)",
        description: "By <span>Alex Hutter</span>, <span>Falguni Jhaveri</span>, and <span>Senthil Sayeebaba</span> <br><br/>In a <span>previous post</span>, we described the indexing architecture of Studio Search and how we scaled the architecture by building a config-driven self-s...",
        link: "READ MORE",
        Image: null
    },
    {
        id: "2",
        category: 'COMPANY NEWSROOM',
        title: "Introducing the 2022 Filmmakers of the Netflix-Ghetto Film School Partnership",
        description: null,
        link: "READ MORE",
        image: "assets/images/news--item1.png"
    }
]

export const NewsSection = () => {
    return(
        <section className="news">
            <div className="news__wrapper">
                {
                    data.map( d => 
                        <NewsCardComponent 
                            key={d.id} 
                            category={d.category}
                            title={d.title}
                            description={d.description}
                            link={d.link}
                            image={d.image}
                        />
                    )
                }
            </div>
        </section>
    )
}
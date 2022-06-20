import { BannerSection } from "../components/01-sections/BannerSection";
import { CardSection } from "../components/01-sections/CardSection";
import { LatestSection } from "../components/01-sections/LatestSection";
import { NewsSection } from "../components/01-sections/NewsSection";

export default function HomePage() {
	return (
		<>
			<BannerSection />
			<CardSection 
				title="Freedom and Responsibility"
				description="Our core philosophy is people over process. Our culture has been instrumental to our success and has helped us attract and retain stunning colleagues, making work here more satisfying."
				link="READ ABOUT OUR CULTURE"
				image="/assets/images/culture.jpg"
				decorator
			/>
			<CardSection 
				title="Streaming entertainment. Global original content. Product personalization."
				description="Our first original series debuted in 2013. Over the following decades, Streaming TV will replace linear, and we hope to keep leading by offering an amazing entertainment experience."
				link="SEE WHAT'S NEXT"
				image="/assets/images/series.jpg"
			/>
			<LatestSection />
			<NewsSection />
		</>
  )
}

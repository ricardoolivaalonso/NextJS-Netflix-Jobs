import { MasterLayout } from '../components/00-layouts/MasterLayout'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  	return (
		<MasterLayout>
			<Component {...pageProps} />
		</MasterLayout>
	)
}

export default MyApp

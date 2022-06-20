import { FacebookIconElement } from "../03-elements/FacebookIconElement"
import { InstagramIconElement } from "../03-elements/InstagramIconElement"
import { LogoElement } from "../03-elements/LogoElement"
import { TwitterIconElement } from "../03-elements/TwitterIconElement"

export const FooterSection = () => {
    return(
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <LogoElement w="140" h="38" color="#221f1f"/>
                </div>
                <div className="footer__info">
                    <div className="footer__info-icons">
                        <a className="footer__info-icon"><FacebookIconElement /></a>
                        <a className="footer__info-icon"><TwitterIconElement /></a>
                        <a className="footer__info-icon"><InstagramIconElement /></a>
                    </div>
                    <div className="footer__info-terms">
                        <a className="footer__info-term">about</a>
                        <a className="footer__info-term">privacy</a>
                        <a className="footer__info-term">cookie preferences</a>
                        <a className="footer__info-term">help center</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
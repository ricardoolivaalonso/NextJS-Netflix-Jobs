import { useRef } from "react"

export const BannerSection = () => {
    const inputRef = useRef()
    const formRef = useRef()

    const test = () => {
        document.activeElement === inputRef.current ? 
            formRef.current.classList.add('is-input-focused')
            :
            formRef.current.classList.remove('is-input-focused')
    }

    return(
        <section className="banner">
            <video className="banner__video"  src="assets/images/banner--video.mp4" poster="assets/images/banner--poster.png" autoPlay loop muted />
            <div className="banner__overlay">
                <div className="banner__info">
                    <h1 className="banner__info-title">A great workplace combines exceptional colleagues and hard problems.</h1>
                    <form className="banner__form" ref={formRef}>
                        <input className="banner__form-input" type="text" placeholder="Search jobs by keyword" ref={inputRef} onFocus={()=>test()} onBlur={()=>test()}/>
                        <svg className="banner__form-icon" viewBox="0 0 32 32">
                            <path
                                fill="#231F1F"
                                d="M24.762 21.83L32 29.19c-.774 1.19-1.504 1.93-2.77 2.81l-7.158-7.28c-2.322 1.87-5.257 2.987-8.45 2.987C6.1 27.707 0 21.504 0 13.853 0 6.203 6.1 0 13.623 0c7.524 0 13.624 6.202 13.624 13.853 0 2.97-.92 5.723-2.485 7.978zm-11.14 1.544c5.167 0 9.356-4.263 9.356-9.522 0-5.26-4.19-9.522-9.356-9.522-5.167 0-9.355 4.263-9.355 9.522 0 5.26 4.188 9.522 9.355 9.522z"
                            />
                        </svg>
                    </form>
                </div>
            </div>
        </section>
    )
}
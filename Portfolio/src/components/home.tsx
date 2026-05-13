import Carousel from './carousel';
import { Header } from './header';
import { FrequentlyAskedQuestions } from './faq';
import { ProjectCards } from './project-cards';
import AcomplishmentPage from './accomplishments';
import AboutPage from './about';
import ContactPage from './contact';

export function Homepage() {

    return(
        <>
            <div id="home" className='grid'><Header /></div>
            <div id="about"><AboutPage /></div>
            <Carousel/>
            <div id="projects"><ProjectCards /></div>
            <div id="accomplishments"><AcomplishmentPage/></div>
            <div id="faq"><FrequentlyAskedQuestions /></div>
            <div id="contact"><ContactPage /></div>
        </>
    )
}
import Carousel from './carousel';
import { Header } from './header';
import { FrequentlyAskedQuestions } from './faq';
import { ProjectCards } from './project-cards';
import AcomplishmentPage from './accomplishments';
export function Homepage() {

    return(
        <>
          <Header />
          <Carousel/>
          <AcomplishmentPage/>
          <ProjectCards />
          <FrequentlyAskedQuestions />
        </>
    )
}
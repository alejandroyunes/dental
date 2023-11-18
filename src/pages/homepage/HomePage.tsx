import { Helmet, HelmetProvider } from 'react-helmet-async'

import Billboard from '../../components/Billboard/Billboard'
import ThreeColumnCard from '../../components/ThreeColumnCard/ThreeColumnCard'
import ProAndConComponent from '../../components/ProAndCon/ProAndCon'
import TwoColumnInverted from '../../components/TwoColumnInverted/TwoColumnInverted'
import QuestionsAndAnswers from '../../components/QuestionAndAnswers/QuestionsAndAnswers'
import ThreeColumnProduct from '../../components/ThreeColumnProduct/ThreeColumnProduct'

//data
import { billboard } from './data/billboard/billboard'
import { firstThreeColumnCard } from './data/firstThreeColumnCard/firstThreeColumnCard'
import { proAndCons } from './data/proAndCons/proAndCons'
import { irrigatorProps } from './data/irrigatorTypes/irrigatorData';
import { firstThreeColumnProduct } from './data/firstThreeColumnProduct/firstThreeColumnProduct'
import { questions } from './data/questionsAndAnswers/questions'

export default function HomePage() {

  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content='Enhance Your Dental Health with a Dental Irrigator for Complete Oral Hygiene' />
          <title>Enhance Your Dental Health with a Dental Irrigator for Complete Oral Hygiene</title>
        </Helmet>
      </HelmetProvider>
      <Billboard {...billboard.billboard} />
      <ThreeColumnCard {...firstThreeColumnCard} />
      <ProAndConComponent {...proAndCons} />
      <TwoColumnInverted {...irrigatorProps} />
      <QuestionsAndAnswers {...questions} />
      <ThreeColumnCard {...firstThreeColumnCard} />
      <ThreeColumnProduct {...firstThreeColumnProduct} />
    </main>
  )
}


import { Helmet, HelmetProvider } from 'react-helmet-async'

import Billboard from '../../components/Billboard/Billboard'
import ThreeColumnCard from '../../components/ThreeColumnCard/ThreeColumnCard'
import ProAndConComponent from '../../components/ProAndCon/ProAndCon'
import TwoColumnInverted from '../../components/TwoColumnInverted/TwoColumnInverted'
import QuestionsAndAnswers from '../../components/QuestionAndAnswers/QuestionsAndAnswers'
import ThreeColumnProduct from '../../components/ThreeColumnProduct/ThreeColumnProduct'

import { billboard } from './data/billboard/billboard'

import { proAndCons, titleProps } from './data/proAndCons/proAndCons'
import { irrigatorProps } from './data/irrigatorTypes/irrigatorData';
import { questions } from './data/questionsAndAnswers/questions'
import Title from '../../components/Title/Title'
import { portableBest } from './data/portableBest/portableBest'
import { countertopBest } from './data/countertopBest/countertopBest'
import { firstThreeColumnProduct } from './data/firstThreeColumnProduct/firstThreeColumnProduct'

export default function () {

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
      <ThreeColumnCard {...portableBest} />

      <Title {...titleProps} />
      <ProAndConComponent {...proAndCons} />

      <ThreeColumnCard {...countertopBest} />

      <ThreeColumnProduct {...firstThreeColumnProduct} />

      <TwoColumnInverted {...irrigatorProps} />
      <QuestionsAndAnswers {...questions} />

    </main>
  )
}


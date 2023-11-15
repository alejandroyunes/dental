import Billboard from "../../components/Billboard/Billboard"
import ThreeRowTable from "../../components/ThreeRowTable/ThreeRowTable"
import IrrigatorTypes from "../../components/IrrigatorTypes/IrrigatorTypes"
import ProAndConComponent from "../../components/ProAndCon/ProAndConComponent"
import QuestionsAndAnswers from "../../components/QuestionAndAnswers/QuestionsAndAnswers"

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { billboard } from "./data/billboard/billboard"
import { questions } from "./data/questionsAndAnswers/questions"
import { proAndCons } from "./data/proAndCons/proAndCons"
import { irrigatorProps } from "./data/irrigatorTypes/irrigatorData";
import { firstThreeRowsTable } from "./data/firstThreeRowTable/firstThreeRowsTable"

export default function HomePage() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={billboard.meta} />
        </Helmet>
      </HelmetProvider>

      <Billboard {...billboard.billboard} />
      <ThreeRowTable {...firstThreeRowsTable} />
      <ProAndConComponent {...proAndCons} />
      <IrrigatorTypes {...irrigatorProps} />
      <QuestionsAndAnswers {...questions} />
    </>
  )
}

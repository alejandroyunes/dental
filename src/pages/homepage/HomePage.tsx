import Billboard from "../../components/Billboard/Billboard"
import ThreeRowTable from "../../components/ThreeRowTable/ThreeRowTable";

import { billboard } from "./data/billboard/billboard"
import { firstThreeRowsTable } from "./data/firstThreeRowTable/firstThreeRowsTable"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { proAndCons } from "./data/proAndCons/proAndCons"
import { irrigatorProps } from "./data/irrigatorTypes/irrigatorData";
import IrrigatorTypes from "../../components/IrrigatorTypes/IrrigatorTypes";
import QuestionsAndAnswers from "../../components/QuestionAndAnswers/QuestionsAndAnswers";
import { questions } from "./data/questionsAndAnswers/questions";
import ProAndConComponent from "../../components/ProAndCon/ProAndConComponent";

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

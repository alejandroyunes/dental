import { RouteObject } from "react-router-dom"

import HomePage from '../../pages/homepage/HomePage.tsx'
import ErrorPage from '../../pages/error-page.tsx'

import Layout from '../layout.tsx'
import Privacy from "../../components/Legal/Privacy/Privacy.tsx"
import Notice from "../../components/Legal/Notice/Notice.tsx"
import { Cookie } from "@mui/icons-material";
import Best from "../../pages/categories/best-irrigators/Best.tsx"
import Turewell600ML from "../../pages/categories/best-irrigators/article/Turewell600ML.tsx"


const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/best-irrigators',
        element: <Best />,
        errorElement: <ErrorPage />
      },
      {
        path: '/best/turewell-600ml-water-flossing-oral-irrigator',
        element: <Turewell600ML />,
        errorElement: <ErrorPage />
      },
      {
        path: '/privacy-policy',
        element: <Privacy />,
        errorElement: <ErrorPage />
      },
      {
        path: '/legal-notice',
        element: <Notice />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cookie-policy',
        element: <Cookie />,
        errorElement: <ErrorPage />
      },
    ]
  },
];

export default routerConfig
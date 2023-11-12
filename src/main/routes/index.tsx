import { RouteObject } from "react-router-dom"

import HomePage from '../../pages/homepage/HomePage.tsx'
import ErrorPage from '../../pages/error-page.tsx'

import Layout from '../layout.tsx'
import Privacy from "../../components/Legal/Privacy/Privacy.tsx"
import Notice from "../../components/Legal/Notice/Notice.tsx"
import { Cookie } from "@mui/icons-material";
import Article from "../../components/Article/Article.tsx"
import Best from "../../pages/categories/best-irrigators/Best.tsx"


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
        path: '/categories/:id',
        element: <Article />,
        errorElement: <ErrorPage />
      },
      {
        path: '/best-irrigators',
        element: <Best />,
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
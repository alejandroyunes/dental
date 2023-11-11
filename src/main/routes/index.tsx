import { RouteObject } from "react-router-dom"

import HomePage from '../../pages/homepage/HomePage.tsx'
import ErrorPage from '../../pages/error-page.tsx'

import Layout from '../layout.tsx'
import Privacy from "../../components/Legal/Privacy/Privacy.tsx";

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
        path: '/highlighted/:id',
        element: <h1>about</h1>,
        errorElement: <ErrorPage />
      },
      {
        path: '/blog',
        element: <h1>some</h1>,
        errorElement: <ErrorPage />
      },
      {
        path: '/privacy-policy',
        element: <Privacy />,
        errorElement: <ErrorPage />
      },
      {
        path: '/legal-notice',
        element: <h1>some</h1>,
        errorElement: <ErrorPage />
      },
      {
        path: '/cookie-policy',
        element: <h1>some</h1>,
        errorElement: <ErrorPage />
      },
    ]
  },
];

export default routerConfig
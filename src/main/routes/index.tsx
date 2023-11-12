import { RouteObject } from "react-router-dom"

import HomePage from '../../pages/homepage/HomePage.tsx'
import ErrorPage from '../../pages/error-page.tsx'

import Layout from '../layout.tsx'
import Privacy from "../../components/Legal/Privacy/Privacy.tsx";
import Notice from "../../components/Legal/Notice/Notice.tsx";
import Cookie from "../../components/Legal/Cookie/Cookie.tsx";

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
        element: <Notice />,
        errorElement: <ErrorPage />
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
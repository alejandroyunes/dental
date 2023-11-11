import { RouteObject } from "react-router-dom"

import HomePage from '../../pages/homepage/HomePage.tsx'
import About from '../../pages/about.tsx'
import Services from '../../pages/services.tsx'
import Blog from '../../pages/blog.tsx'
import Portfolio from '../../pages/portfolio.tsx'
import ErrorPage from '../../pages/error-page.tsx'

import BlogArticle from '../../components/Blog/BlogArticle/BlogArticle.tsx'
import Layout from '../layout.tsx'


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
        element: <BlogArticle />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about-us',
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: '/services',
        element: <Services />,
        errorElement: <ErrorPage />
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
        errorElement: <ErrorPage />
      },
      {
        path: '/blog',
        element: <Blog />,
        errorElement: <ErrorPage />
      },
      {
        path: '/blog-articles/:id',
        element: <BlogArticle />,
        errorElement: <ErrorPage />
      },
    ]
  },
];

export default routerConfig
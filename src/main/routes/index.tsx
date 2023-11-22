import { RouteObject } from "react-router-dom"

import HomePage from '../../pages/homepage/HomePage.tsx'
import ErrorPage from '../../pages/error-page.tsx'

import Layout from '../layout.tsx'
import Privacy from "../../components/Legal/Privacy/Privacy.tsx"
import Notice from "../../components/Legal/Notice/Notice.tsx"
import { Cookie } from "@mui/icons-material";
import Best from "../../pages/categories/best-irrigators/Best.tsx"
import Turewell600ML from "../../pages/categories/best-irrigators/article/best-portable/Turewell600ML.tsx"
import NicwellF5025 from "../../pages/categories/best-irrigators/article/best-portable/NicwellF5025.tsx"
import Waterpikwf02 from "../../pages/categories/best-irrigators/article/best-portable/Waterpikwf02.tsx"
import Colus300ml from "../../pages/categories/best-irrigators/article/best-portable/Colus300ml.tsx"
import BitvaeC2 from "../../pages/categories/best-irrigators/article/best-portable/BitvaeC2.tsx"
import NicefeelFC1592BK from "../../pages/categories/best-irrigators/article/best-portable/NicefeelFC1592-BK.tsx"

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
        path: '/best/turewell-FC165-water-flossing-oral-irrigator',
        element: <Turewell600ML />,
        errorElement: <ErrorPage />
      },
      {
        path: '/best/nicwell-f5025-water-flossing-oral-irrigator',
        element: <NicwellF5025 />,
        errorElement: <ErrorPage />
      },
      {
        path: '/best/waterpik-wf02-water-flossing-oral-irrigator',
        element: <Waterpikwf02 />,
        errorElement: <ErrorPage />
      },
      {
        path: '/best/coslus-F5020E-water-flossing-oral-irrigator',
        element: <Colus300ml />,
        errorElement: <ErrorPage />
      },
      {
        path: '/best/bitvae-c2-water-flossing-oral-irrigator',
        element: <BitvaeC2 />,
        errorElement: <ErrorPage />
      },
      {
        path: '/best/nicefeelFC1592bk-water-flossing-oral-irrigator',
        element: <NicefeelFC1592BK />,
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
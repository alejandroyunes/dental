import { RouteObject } from "react-router-dom"

import HomePage from '../../pages/homepage/HomePage.tsx'
import ErrorPage from '../../pages/error-page.tsx'

import Layout from '../layout.tsx'
import Privacy from "../../components/Legal/Privacy/Privacy.tsx"
import Notice from "../../components/Legal/Notice/Notice.tsx"
import Cookie from "../../components/Legal/Cookie/Cookie.tsx"

import Best from "../../pages/categories/best-irrigators/Best.tsx"
import Turewell600ML from "../../pages/categories/best-irrigators/article/best-counter/Turewell600ML.tsx"
import NicwellF5025 from "../../pages/categories/best-irrigators/article/best-portable/NicwellF5025.tsx"
import Waterpikwf02 from "../../pages/categories/best-irrigators/article/best-portable/Waterpikwf02.tsx"
import Colus300ml from "../../pages/categories/best-irrigators/article/best-portable/Colus300ml.tsx"
import BitvaeC2 from "../../pages/categories/best-irrigators/article/best-portable/BitvaeC2.tsx"
import NicefeelFC1592BK from "../../pages/categories/best-irrigators/article/best-portable/NicefeelFC1592-BK.tsx"
import InSmartFC256 from "../../pages/categories/best-irrigators/article/best-portable/InSmartFC256.tsx"
import H2oFlossHF9 from "../../pages/categories/best-irrigators/article/best-counter/H2oFlossHF9.tsx"
import SawgmoreB09 from "../../pages/categories/best-irrigators/article/best-counter/SawgmoreB09.tsx"

const bestPortableConfig = [
  {
    path: '/best-portable/waterpik-wf02-water-flossing-oral-irrigator',
    element: <Waterpikwf02 />,
    errorElement: <ErrorPage />
  },
  {
    path: '/best-portable/nicwell-f5025-water-flossing-oral-irrigator',
    element: <NicwellF5025 />,
    errorElement: <ErrorPage />
  },
  {
    path: '/best-portable/nicefeelFC1592bk-water-flossing-oral-irrigator',
    element: <NicefeelFC1592BK />,
    errorElement: <ErrorPage />
  },
  {
    path: '/best-portable/insmartFC256-water-flossing-oral-irrigator',
    element: <InSmartFC256 />,
    errorElement: <ErrorPage />
  },
  {
    path: '/best-portable/coslus-F5020E-water-flossing-oral-irrigator',
    element: <Colus300ml />,
    errorElement: <ErrorPage />
  },
  {
    path: '/best-portable/bitvae-c2-water-flossing-oral-irrigator',
    element: <BitvaeC2 />,
    errorElement: <ErrorPage />
  }
]

const bestCountertopConfig = [
  {
    path: '/best-countertop/turewell-FC165-water-flossing-oral-irrigator',
    element: <Turewell600ML />,
    errorElement: <ErrorPage />
  },
  {
    path: '/best-countertop/h2ofloss-hf9-water-flossing-oral-irrigator',
    element: <H2oFlossHF9 />,
    errorElement: <ErrorPage />
  },
  {
    path: '/best-countertop/sawgmore-B09-water-flossing-oral-irrigator',
    element: <SawgmoreB09 />,
    errorElement: <ErrorPage />
  }
]

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
      ...bestPortableConfig.map(config => ({
        path: config.path,
        element: config.element,
        errorElement: config.errorElement,
      })),
      ...bestCountertopConfig.map(config => ({
        path: config.path,
        element: config.element,
        errorElement: config.errorElement,
      })),
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
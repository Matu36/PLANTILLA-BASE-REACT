import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        //ESTE SERIA OTRO EJEMPLO

        // {
        //     path: "/agentes",
        //     element: <RedirectComponent />,
        //     children: [
        //       {
        //         path: "/agentes/ver-agentes",
        //         element: <Agentes />,
        //       },
        //       {
        //         path: "/agentes/crear-agente",
        //         element: <CrearAgente />,
        //       },
        //       {
        //         path: "/agentes/agente/:id",
        //         element: <Detail />,
        //       },
        //     ],
        //   },
      ],
    },
  ]

  // {
  //     basename: `/${
  //        process.env["APP_ENV"]
  //      }
  //    }
);

export default router;

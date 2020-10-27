import React from "react";

import Main from "./views/main";
import Unit1 from "./views/unit1";
import Unit2 from "./views/unit2";
import Unit3 from "./views/unit3";
import Unit4 from "./views/unit4";
import Unit5 from "./views/unit5";
import Unit6 from "./views/unit6";

const routes = [
  {
    path: '/',
    children: [
      { path: '/', element: <Main/>},
    ]
  },

  {
    path: 'commathproject',
    children: [
      { path: '/', element: <Main/>},

      { path: 'unit1', element: <Unit1/>},
      { path: 'unit2', element: <Unit2/>},
      { path: 'unit3', element: <Unit3/>},
      { path: 'unit4', element: <Unit4/>},
      { path: 'unit5', element: <Unit5/>},
      { path: 'unit6', element: <Unit6/>},
    ]
  },
];

export default routes;

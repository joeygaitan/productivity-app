import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from "react-router-dom";

import LandingPage from './Components/LandingPage/index';

const App:FC = () => {
  return (
    <div>
      <LandingPage/>
    </div>
  );
}

export default App;

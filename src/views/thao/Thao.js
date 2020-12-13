import React, { Component } from 'react';
import styled from 'styled-components';

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import DesignEdit from 'src/dashboard/DesignEdit';


export const Thao = (props) => {
  const match = useRouteMatch();
  console.log(match)
  return (
    <Switch>
      <Route path={match.path} exact={true}>
        <DesignEdit />
      </Route>
      <Route path={`${match.path}/new`} exact={true}>
        <DesignEdit />
      </Route>
      <Route path={`${match.path}/edit/:designId`} exact={true}>
        <DesignEdit />
      </Route>
    </Switch>
  );
};

// export default Thao;
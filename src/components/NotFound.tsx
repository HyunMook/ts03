import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

function NotFound(routerProps: RouteComponentProps) {
  console.log(routerProps);
  alert(
    '404 Not Found. \r페이지를 찾을 수 없습니다. \r경로: ' +
      routerProps.match.url
  );
  return <Redirect to="/" />;
}

export default NotFound;

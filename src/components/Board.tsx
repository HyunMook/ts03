import React from 'react';
import {
  Link,
  RouteComponentProps,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NotFound from './NotFound';
import { getSearchParamsToObject } from '../modules/common';

function Board({ match }: RouteComponentProps) {
  // console.log(props);
  return (
    <Switch>
      <Route
        exact
        path={match.url}
        component={() => <Redirect to="/board/1" />}
      />
      <Route exact path={`${match.url}/:page`} component={RenderBoard} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

function RenderBoard(props: RouteComponentProps) {
  const pageList = [1, 2, 3, 4, 5];
  const getParams = getSearchParamsToObject(props.location.search);

  console.log(getParams);

  return (
    <div className="contentWrapper">
      <div className="boardTableWrapper">
        <table id="boardTable">
          <thead>
            <tr>
              <th>번호</th>
              <th>작성자</th>
              <th>제목</th>
              <th>등록일자</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => props.history.push('/post/1')}>
              <td>1</td>
              <td>테스트</td>
              <td>샘플 제목입니다.</td>
              <td>2020-09-03 10:10:10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="boardPagination">
        <ul>
          {pageList.map((page) => (
            <li key={page}>
              <Link to={`/board/${page}`}>{page}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Board;

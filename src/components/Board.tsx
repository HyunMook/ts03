import React from 'react';
import {
  Link,
  RouteComponentProps,
  Switch,
  Route,
  Redirect,
  NavLink,
  useParams,
} from 'react-router-dom';
import NotFound from './NotFound';
import { getSearchParamsToObject } from '../modules/common';
import { IPostData } from '../types/project';

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

const PAGE_LIST_COUNT = 3;
interface IBoardRouteParam {
  page: string;
}

function RenderBoard(props: RouteComponentProps) {
  const params: IBoardRouteParam = useParams();
  const getSearchParams: object = getSearchParamsToObject(
    props.location.search
  );
  console.log(getSearchParams);
  const [postList, setPostList] = React.useState([]);

  // Sample Handling
  const sampleData = require('./samplePost.json');
  const pageList: number[] = new Array(
    Math.ceil(sampleData.length / PAGE_LIST_COUNT)
  )
    .fill(null)
    .map((sdt, idx) => idx + 1);

  React.useEffect(() => {
    setPostList(
      require('./samplePost.json').filter(
        (dt: IPostData, idx: number) =>
          idx < PAGE_LIST_COUNT * Number(params.page) &&
          idx >= PAGE_LIST_COUNT * (Number(params.page) - 1)
      )
    );
  }, [params.page]);

  const readPost = (seq: number | string) => {
    props.history.push('/post/read/' + seq);
  };

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
            {postList.map((p: IPostData, i) => (
              <tr key={i} onClick={(e) => readPost(p.seq)}>
                <td>{p.seq}</td>
                <td>테스트</td>
                <td>{p.title}</td>
                <td>2020-09-03 10:10:10</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="boardButtonsWrapper">
        <div id="boardButtons" className="row-flex jc-end">
          <Link className="btn ml-1" to="/post/write">
            글쓰기
          </Link>
        </div>
      </div>
      <div className="boardPaginationWrapper">
        <div id="boardPagination" className="row-flex jc-center">
          {pageList.map((page) => (
            <NavLink
              key={page}
              className="page ma-03 px-1 py-05"
              to={`/board/${page}`}
            >
              {page}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;

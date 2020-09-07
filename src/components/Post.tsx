import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Editor from 'rich-markdown-editor';
import { IPostData } from '../types/project';

interface IPostComponentParam {
  pType: 'write' | 'edit' | 'read';
}
interface IPostRouteParam {
  seq: string;
}
interface IStatePost {
  title?: string;
  content?: string;
}

function Post({ pType }: IPostComponentParam) {
  const params: IPostRouteParam = useParams();
  const postSeq = Number(params.seq);
  const [statePost, setStatePost] = React.useState<IStatePost>({});
  const [loadEditor, setLoadEditor] = React.useState(false);

  React.useEffect(() => {
    if (!postSeq) {
      if (window.confirm('작성하던거 불러올래?')) {
        const sdt = sessionStorage.getItem('writing') || '{}';
        console.log(sdt);
        setStatePost(JSON.parse(sdt));
      }
    } else {
      const sampleData = require('./samplePost.json');
      setStatePost(
        sampleData.filter((sdt: IPostData) => sdt.seq === postSeq)[0]
      );
    }
    setLoadEditor(true);
  }, [postSeq]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatePost({ ...statePost, title: e.target.value });
  };

  const saveContent = () => {
    sessionStorage.setItem('writing', JSON.stringify(statePost));
  };

  return (
    <div className="contentWrapper">
      <form id="postWrapper" className="col-flex" onSubmit={onSubmitHandler}>
        <section className="postTitle row-flex ai-center">
          <h3 className="pr-3">제목</h3>
          <div className="row-flex flex-1">
            <input
              type="text"
              name="title"
              className="flex-1"
              defaultValue={statePost.title}
              onChange={onChangeTitle}
            />
          </div>
        </section>
        <section className="postContent row-flex ai-start flex-1 brd-01-gray">
          <h3 className="pr-3">내용</h3>
          <div className="mdEditorWrapper flex-1">
            {loadEditor && (
              <Editor
                readOnly={pType === 'read'}
                defaultValue={statePost.content}
                onChange={(retVal) =>
                  setStatePost({
                    ...statePost,
                    content: retVal(),
                  })
                }
              />
            )}
          </div>
        </section>
        <section className="postButtons row-flex ai-center jc-end">
          <h3>메뉴</h3>
          <Link className="btn ml-1" to="/board">
            목록
          </Link>
          {pType === 'read' && (
            <Link className="btn ml-1" to={'/post/edit/' + postSeq}>
              글수정
            </Link>
          )}
          {pType !== 'read' && (
            <button className="btn ml-1" onClick={saveContent}>
              임시 저장
            </button>
          )}
          {pType !== 'read' && (
            <button className="btn ml-1" onClick={saveContent}>
              등록
            </button>
          )}
          {pType === 'read' && (
            <Link className="btn ml-1" to="/post/write">
              글쓰기
            </Link>
          )}
        </section>
      </form>
    </div>
  );
}

export default Post;

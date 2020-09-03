import React from 'react';
import { Link } from 'react-router-dom';

function Post() {
  return (
    <div className="contentWrapper">
      <div id="postWrapper">
        <section className="postTitle row-flex ai-center">
          <h3>제목</h3>
          <div className="flex-1 pl-1">샘플 제목입니다.</div>
        </section>
        <section className="postContent row-flex ai-center">
          <h3>내용</h3>
          <div className="flex-1 pl-1">샘플 내용입니다.</div>
        </section>
        <section className="postButtons row-flex ai-center jc-end">
          <h3>메뉴</h3>
          <Link to="/board">목록</Link>
        </section>
      </div>
    </div>
  );
}

export default Post;

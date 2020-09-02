import React from 'react';

function Board() {
  return (
    <div className="contentWrapper">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>제목</th>
            <th>등록일자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Board;

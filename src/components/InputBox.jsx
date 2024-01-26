import styled from "styled-components";
import { v4 } from "uuid";
import { useState } from "react";
const StyleDiv = styled.div`
  background-color: #44a570;
`;
const StyleButton = styled.button`
  margin: 10px;
  background-color: pink;
  color: #2a1ba8;
`;

export default function InputBox({ setTodoCard }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickAddButton = () => {
    if (!title || !content) {
      alert("다 써줘~");
      return;
    }
    setTodoCard((todoCard) => [...todoCard, { id: v4(), title, content }]);
    setTitle("");
    setContent("");
  };

  return (
    <StyleDiv>
      제목 :{" "}
      <input
        type="text"
        placeholder="제목입니다."
        onChange={onChangeTitle}
        value={title}
      />
      내용 :{" "}
      <input
        type="text"
        placeholder="내용입니다."
        onChange={onChangeContent}
        value={content}
      />
      <StyleButton onClick={onClickAddButton}>추가하기</StyleButton>
    </StyleDiv>
  );
}

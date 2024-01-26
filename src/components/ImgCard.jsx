import InputBox from "./InputBox";
import { useState } from "react";
import styled from "styled-components";

const StSpan = styled.span`
  color: #88239c63;
`;
const StButton = styled.button`
  background-color: white;
  border: 3px solid;
  color: #338f87;
  margin: 5px;
`;
const StDiv = styled.div`
  background-color: pink;
  border: "1px solid black";
`;
const CardDiv = styled.div`
  display: "flex";
  border: "1px solid black";
  width: "100px";
  height: "100px";
  margin: "20px";
`;

export default function ImgCard() {
  const [todoCard, setTodoCard] = useState([]);

  const onClickDeleteButton = (id) => {
    alert("삭제하게~?");
    const deleteButton = todoCard.filter((card) => card.id !== id);
    setTodoCard(deleteButton);
  };

  const onClickDoneButton = (id) => {
    const doneButton = todoCard.map((card) => {
      if (card.id === id) {
        card.done = !card.done;
      }
      return card;
    });
    setTodoCard([...doneButton]);
  };
  return (
    <StDiv>
      <InputBox setTodoCard={setTodoCard} />
      <span>Working...</span>
      {todoCard.map((card) =>
        !card.done ? (
          <CardDiv key={card.id}>
            <StSpan>{card.title}</StSpan>
            <StSpan>{card.content}</StSpan>
            <StButton onClick={() => onClickDoneButton(card.id)}>
              내려주세요
            </StButton>
            <StButton onClick={() => onClickDeleteButton(card.id)}>
              없애주세요
            </StButton>
          </CardDiv>
        ) : null
      )}
      <span>Done..</span>
      {todoCard.map((card) =>
        card.done ? (
          <CardDiv key={card.id}>
            <StSpan>{card.title}</StSpan>
            <StSpan>{card.content}</StSpan>
            <StButton onClick={() => onClickDoneButton(card.id)}>
              올려주세요
            </StButton>
            <StButton onClick={() => onClickDeleteButton(card.id)}>
              없애주세요
            </StButton>
          </CardDiv>
        ) : null
      )}
    </StDiv>
  );
}

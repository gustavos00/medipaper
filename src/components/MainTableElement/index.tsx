import { useEffect, useState } from "react";
import * as S from "./styles";

interface MainTableElementProps {
  isChecked: boolean;
  highlightedText: string;
  nonHighlightedText: string;
  idkText: string;
}

export function MainTableElement({
  isChecked,
  highlightedText,
  nonHighlightedText,
  idkText,
}: MainTableElementProps) {
  const [testState, setTestState] = useState(isChecked)

  useEffect(() => console.log('mudou porra'), [testState])

  return (
    <S.Container onClick={(e) => setTestState(!testState)}>
      <input type={"checkbox"} defaultChecked={testState} onClick={(e) => setTestState(!testState)} />
      <S.InfoContainer>
        <h1>{highlightedText}</h1>
        <p>{nonHighlightedText}</p>
      </S.InfoContainer>
    </S.Container>
  );
}

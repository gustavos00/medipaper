import * as S from "./styles";

export function Navbar() {
  return (
    <S.Container>
      <h1>Overview</h1>
      <S.UserContainer>
        <p>José Manuel</p>
        <S.Icon />
      </S.UserContainer>
    </S.Container>
  );
}

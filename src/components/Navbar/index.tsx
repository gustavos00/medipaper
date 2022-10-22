import * as S from "./styles";

export function Navbar() {
  return (
    <S.Container>
      <h1>Overview</h1>
      <S.UserContainer>
        <p>Duarte José Gravilha</p>
        <S.Icon src="https://thispersondoesnotexist.com/image" />
      </S.UserContainer>
    </S.Container>
  );
}

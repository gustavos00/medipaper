import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./Home.styles";

export function Home() {
  return (
    <>
      <Sidebar />
      <S.Content>
        <Navbar />
      </S.Content>
    </>
  );
}

import { InfoElement } from "../../components/InfoElement";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./Home.styles";

export function Home() {
  return (
    <>
      <Sidebar />
      <S.Content>
        <Navbar />

        <S.InfoElementsContainer>
          <InfoElement label={"this is just"} numberValue={5}/>
          <InfoElement label={"this is just"} numberValue={5}/>
          <InfoElement label={"this is just"} numberValue={5}/>
          <InfoElement label={"this is just"} numberValue={5}/>
        </S.InfoElementsContainer>

        
      </S.Content>
    </>
  );
}

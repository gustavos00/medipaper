import { InfoElement } from "../../components/InfoElement";
import { MainTableElement } from "../../components/MainTableElement";
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
          <InfoElement label={"Consultas Marcadas"} numberValue={5} />
          <InfoElement label={"Exames Marcados"} numberValue={5} />
          <InfoElement label={"Total de Consultas"} numberValue={5} />
          <InfoElement label={"Total de Exames"} numberValue={5} />
        </S.InfoElementsContainer>

        <S.Wrapper>
          <S.MainTableContainer>
            <h1>Consultas</h1>
            <S.MainTableContent>
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
            </S.MainTableContent>
          </S.MainTableContainer>

          <S.MainTableContainer>
            <h1>Pacientes</h1>
            <button>+</button>
            <S.MainTableContent>
              <MainTableElement
                isChecked={true}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
              <MainTableElement
                isChecked={false}
                highlightedText={"this is just a test"}
                nonHighlightedText={"this is just a test"}
                idkText={""}
              />
            </S.MainTableContent>
          </S.MainTableContainer>
        </S.Wrapper>
      </S.Content>
    </>
  );
}

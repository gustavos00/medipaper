import { useState } from 'react';
import { SidebarElement } from '../SidebarElement';
import * as S from './Sidebar.styles';

export function Sidebar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  console.log(sidebarIsOpen)

  return (
    <S.Container sidebarIsOpen onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
      <S.BrandContainer>
        <S.Icon />
        <h1>Medipaper</h1>
      </S.BrandContainer>
      <SidebarElement text={'Dashboard'} icon={''}/>
      <SidebarElement text={'Consultas'} icon={''}/>
      <SidebarElement text={'Pacientes'} icon={''}/>
      <SidebarElement text={'Exames'} icon={''}/>
      <SidebarElement text={'Recursos Humanos'} icon={''}/>

      <S.SidebarElementSplitter />
      <SidebarElement text={'Configurações'} icon={''}/>
      <SidebarElement text={'Informações Legais'} icon={''}/>

    </S.Container>
  );
}

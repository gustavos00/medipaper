import * as S from './styles';

interface SidebarElementProps {
  text: string;
  icon: string;
}

export function SidebarElement({ text, icon }: SidebarElementProps) {
  return (
    <S.Container>
      <S.Icon />
      <p>{text}</p>
    </S.Container>
  );
}

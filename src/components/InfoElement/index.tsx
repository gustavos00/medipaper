import * as S from './styles';

interface InfoElementProps {
  label: string;
  numberValue: number;
}

export function InfoElement({ label, numberValue }: InfoElementProps) {
  return (
    <S.Container>
      <p>{label}</p>
      <h1>{numberValue}</h1>
    </S.Container>
  );
}

import { ReactNode } from 'react';

import { Container } from './styles';

interface InfoElementProps {
  label: string;
  numberValue: number
}

export function InfoElement({ label, numberValue }: InfoElementProps) {
  return (
    <Container>
      <h1>InfoElement</h1>
    </Container>
  );
}

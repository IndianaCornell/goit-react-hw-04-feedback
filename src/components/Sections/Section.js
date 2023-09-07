import { Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}

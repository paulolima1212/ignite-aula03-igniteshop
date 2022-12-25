import { styled } from '../Styles';

const Button = styled('button', {
  backgroundColor: '$green500',
  fontSize: '1.2rem',
});

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Button>enviar</Button>
    </div>
  );
}

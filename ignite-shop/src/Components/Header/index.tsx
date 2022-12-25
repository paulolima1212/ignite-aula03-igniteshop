import { HeaderContainer } from '../../Styles/Components/Header/header';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo.src} alt='' />
    </HeaderContainer>
  );
}

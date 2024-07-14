import logo from '../assets/logo.png';
import HeaderContent from './HeaderContent';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-44"
      />
      <HeaderContent title="React" des="A community of artists and art-lovers."/>
      <HeaderContent title="React Project" des="A community of artists and art-lovers 2."/>
    </header>
  );
}

import React from 'react';
import Link from 'next/link';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <p>
          Design e desenvolver softwares
        </p>
        <p>
          Estamos em Maputo, Moçambique
        </p>
        <span>
          +258 85 21 92 413
        </span>
        <span>
          ogolfim@protonmail.com
        </span>
      </div>
      <div>
        <Link href="/apis">
          <a>
            APIs
          </a>
        </Link>

        <Link href="/ligue-nos">
          <a>
            Contacto
          </a>
        </Link>

        <Link href="/programador-carreira">
          <a>
            Emprego
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>
            Termos e privacidade
          </a>
        </Link>

        <Link href="/quem-somos">
          <a>
            Sobre-nós
          </a>
        </Link>

        <span>
          &copy; {new Date().getFullYear()} OGolfim - todos direitos reservados
        </span>
      </div>
    </Container>
  )
}

export default Footer;
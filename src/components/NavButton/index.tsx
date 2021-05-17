import React, { ButtonHTMLAttributes, memo, useState } from 'react';
import Link from 'next/link';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  url: string
  useClipPath: boolean
}

const NavButton = ({text, url, useClipPath}: ButtonProps) => {
  const [ opacity, setOpacity ] = useState(1);
  
  if(useClipPath) return (
    <Container>
      <Link 
        href={url}
      >
        <a>
          {text}
        </a>
      </Link>
      <span></span>
    </Container>
  )

  return (
    <Container
      onMouseEnter={() => setOpacity(0.8)}
      onMouseLeave={() => setOpacity(1)}
      style={{
        background: 'var(--color-orange)',
        border: 'none',
        opacity: opacity,
      }}
    >
      <Link
        href={url}
      >
        <a>
          {text}
        </a>
      </Link>
    </Container>
  )
}
  
export default NavButton;
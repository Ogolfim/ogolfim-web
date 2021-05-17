import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import Logo from '../../assets/images/logo';


import { 
  Container,
  MenuToggleBar,
  LogoContainer,
  Options,
  Option
} from './styles';
import Link from 'next/link';


const variants = {
  open: {
    x: 0,
    transition: {
      x: {duration: 0.8, stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: "-100vw",
    transition: {
      x: {duration: 0.8, stiffness: 1000}
    }
  }
};

const Path = (props: any) => (
  <motion.path
    transition={{ duration: 0.3 }}
    stroke-width="2"
    stroke="#000"
    {...props}
  />
);


const Header: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);


  return (
    <Container>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <LogoContainer>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </LogoContainer>

        <MenuToggleBar onClick={() => {toggleOpen()}}>
          <svg width={33} height={18}>
            <Path
              variants = {{
                closed: { d: "M 2 2.5 L 33 2.5" },
                open: { d: "M 2 1.3 L 33 1.2"}
              }}
            />
            <Path
              d="M 2 9.423 L 33 9.423"
            />
            <Path
              variants = {{
                closed: { d: "M 2 16.346 L 33 16.346" },
                open: { d: "M 2 17.446 L 33 17.546" }
              }}
            />
          </svg>
        </MenuToggleBar>

        <motion.nav
          variants = {
            (process.browser) && (
              (window.innerWidth < 738 ? true : false) ? variants : {}
            )
          }
        >
          <Options>
            <Option>
              <Link href="/apis">
                <a>
                  <span className="left">{'{'}</span>
                  APIs
                  <span className="right">{'}'}</span>
                </a>
              </Link>
            </Option>
            <Option>
              <Link href="/programador-carreira">
                <a>
                  <span className="left">{'{'}</span>
                  Emprego
                  <span className="right">{'}'}</span>
                </a>
              </Link>
            </Option>
            <Option>
              <Link href="/contacts">
                <a>
                  <span className="left">{'{'}</span>
                  Contactos
                  <span className="right">{'}'}</span>
                </a>
              </Link>
            </Option>
          </Options>
        </motion.nav>
      </motion.div>
    </Container>
  )
}

export default Header;
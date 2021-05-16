import Link from 'next/link';
import { Container } from './styles';

interface Props {
  Icon: () => JSX.Element
  title: string
  bodyText: string
  linkText: string
  url: string
}

const Speed = ({Icon, title, bodyText, url, linkText}: Props) => (
  <Container>
    <Icon />

    <h2>{title}</h2>
    <p>{bodyText}</p>
    <Link href={url}>
      <a style={{marginTop: '9rem'}}>
        {linkText}  
      </a>  
    </Link>
  </Container>
)

export default Speed;
import { FooterContainer, FooterContent } from './footer.styles';

import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as CodebaseIcon } from '../../assets/icons/code.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <span>Developed by Anoj</span>
        <div>
          <a
            href='https://github.com/anoj-kt'
            target={'_blank'}
            rel='noreferrer'
          >
            <GithubIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/anojkrishna'
            target={'_blank'}
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          <a
            href='https://github.com/anoj-kt/outfitz'
            target={'_blank'}
            rel='noreferrer'
          >
            <CodebaseIcon />
          </a>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

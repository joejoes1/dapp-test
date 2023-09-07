import { ReactComponent as Logo } from '@/assets/img/logo.svg';
import { ReactComponent as FbIcon } from '@/assets/socilas/fb.svg';
import { ReactComponent as YoutubeIcon } from '@/assets/socilas/youtube.svg';
import { ReactComponent as TwitterIcon } from '@/assets/socilas/twitter.svg';
import { ReactComponent as InstagramIcon } from '@/assets/socilas/instagram.svg';

const socials = [
  {
    key: 'fb',
    icon: <FbIcon />,
    link: '#',
  },
  {
    key: 'Twitter',
    icon: <TwitterIcon />,
    link: '#',
  },
  {
    key: 'youtube',
    icon: <YoutubeIcon />,
    link: '#',
  },
  {
    key: 'instagram',
    icon: <InstagramIcon />,
    link: '#',
  },
];

const navlinks = [
  {
    key: 'policy',
    link: '#',
    text: 'Privacy Policy',
  },
  {
    key: 'terms',
    link: '#',
    text: 'Terms & Conditions',
  },
  {
    key: 'cookie',
    link: '#',
    text: 'Cookie Policy',
  },
];

const AppFooter = () => {
  return (
    <footer className="font-body mb-0 mt-auto pb-45 pt-59 app-offset-container w-full sm:border-t border-lightGray sm:bg-bgLight bg-white">
      <div className="app-max-container mx-auto flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:justify-start sm:items-start">
        <div className="flex-1 min-h-[5rem] items-center mb-32 mt-70 sm:mb-0 sm:mt-0 text-center sm:text-left flex flex-col justify-between order-2 sm:order-none sm:items-start">
          {navlinks.map((link) => (
            <a key={link.key} href={link.link} className="block leading-4 text-textSecondary w-fit">
              {link.text}
            </a>
          ))}
        </div>
        <div className="flex-1 justify-center align-middle flex order-1 sm:order-none">
          <Logo />
        </div>
        <div className="flex flex-row-reverse gap-x-32 flex-1 order-3 sm:order-none">
          {socials.map((social) => (
            <a href={social.link} key={social.key} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
        <div className="w-full mx-auto text-center mt-[1.8125rem] order-4 sm:order-none">
          <span className="text-textTertiary">©2022 All rights reserved. Powered by SFXDX</span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;

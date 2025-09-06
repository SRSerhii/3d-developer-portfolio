import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    const currentLang = i18n.language;
    const targetPathWithHash = `/${currentLang}/#${id}`;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', targetPathWithHash);
    } else {
      navigate(targetPathWithHash);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", title: t('navbar.home') },
    { id: "services", title: t('navbar.services') },
    { id: "experience", title: t('navbar.experience') },
    { id: "tools", title: t('navbar.tools') },
    { id: "projects", title: t('navbar.projects') },
    { id: "contact", title: t('navbar.contact') },
  ];

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div className="pointer-events-none fixed top-[-200px] left-[-150px] w-[400px] h-[550px] bg-green-400 rounded-full opacity-50 blur-3xl z-[-1]"></div>
        <Link
          to={`/${i18n.language}`}
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            {t('meta.author')} &nbsp;
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`/${i18n.language}/#${nav.id}`}
                className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(nav.title);
                  handleNavClick(nav.id);
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className='lg:hidden flex flex-1 justify-end items-center pt-2 mr-10'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[36px] h-[36px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`/${i18n.language}/#${nav.id}`}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle(false);
                      setActive(nav.title);
                      handleNavClick(nav.id);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li><LanguageSwitcher /></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
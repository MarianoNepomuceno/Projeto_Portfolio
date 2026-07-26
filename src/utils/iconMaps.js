import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaJava, FaWhatsapp } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDatabase,
  FiServer,
  FiUsers,
  FiBarChart2,
  FiCpu,
  FiGlobe,
  FiShield,
} from 'react-icons/fi';

export const skillIconMap = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  php: SiPhp,
  java: FaJava,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
};

export const contactIconMap = {
  mail: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  whatsapp: FaWhatsapp,
};

export const categoryIconMap = {
  'Banco de Dados': FiDatabase,
  Backend: FiServer,
  JavaScript: SiJavascript,
  'Metodologias Ágeis': FiUsers,
  'Ciência de Dados': FiBarChart2,
  Computação: FiCpu,
  'Desenvolvimento Web': FiGlobe,
  Legislação: FiShield,
};

export const categorySlugMap = {
  'Banco de Dados': 'database',
  Backend: 'backend',
  JavaScript: 'javascript',
  'Metodologias Ágeis': 'agile',
  'Ciência de Dados': 'data-science',
  Computação: 'computing',
  'Desenvolvimento Web': 'web',
  Legislação: 'legislation',
};

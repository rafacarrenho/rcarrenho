import {
  FaApple,
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
  FaWindows
} from "react-icons/fa"
import { AiFillGitlab, AiOutlineGithub } from "react-icons/ai"

import * as S from "./styles"
import {
  SiJest,
  SiMaterialUi,
  SiRedux,
  SiStyledComponents,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si"

const techs = [
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    url: "https://www.javascript.com/"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/"
  },
  { name: "ReactJS", icon: <FaReact />, url: "https://pt-br.reactjs.org/" },
  { name: "React Native", icon: <FaReact />, url: "https://reactnative.dev/" },
  { name: "VueJS", icon: <FaVuejs />, url: "https://vuejs.org/" },
  { name: "Node", icon: <FaNodeJs />, url: "https://nodejs.org/en/" },
  { name: "Jest", icon: <SiJest />, url: "https://jestjs.io/pt-BR/" },
  { name: "Testing Library", icon: "", url: "https://testing-library.com/" },
  { name: "Git", icon: <FaGitAlt />, url: "https://git-scm.com/" },
  {
    name: "Github",
    icon: <AiOutlineGithub />,
    url: "https://github.com/rafacarrenho"
  },
  { name: "Gitlab", icon: <AiFillGitlab />, url: "https://about.gitlab.com/" },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    url: "https://www.w3.org/Style/CSS/Overview.en.html"
  },
  { name: "SASS", icon: <FaSass />, url: "https://sass-lang.com/" },
  {
    name: "Styled Components",
    icon: <SiStyledComponents />,
    url: "https://styled-components.com/"
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    url: "https://getbootstrap.com/"
  },
  {
    name: "Material UI",
    icon: <SiMaterialUi />,
    url: "https://material-ui.com/pt/"
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/"
  },
  {
    name: "Windows",
    icon: <FaWindows />,
    url: "https://www.microsoft.com/pt-br/windows/"
  },
  { name: "Linux", icon: <FaLinux />, url: "https://www.linux.org/" },
  {
    name: "MacOS",
    icon: <FaApple />,
    url: "https://www.apple.com/br/macos/big-sur/"
  },
  { name: "Redux", icon: <SiRedux />, url: "https://redux.js.org/" }
]
export const Techs = () => {
  return (
    <S.Wrapper>
      <S.Title>Tecnologias e Ferramentas</S.Title>
      <S.TechsContainer>
        {techs.map((tech) => (
          <a
            href={tech.url}
            key={tech.name}
            target="_blank"
            rel="noopener"
            title={tech.name}
          >
            {tech.icon} {tech.name}
          </a>
        ))}
      </S.TechsContainer>
    </S.Wrapper>
  )
}

import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import ViewContainer from "./view-container"
import Uses from "@/components/Uses"
import Sso from "@/components/Msft-sso"
import GoogleSso from "@/components/Google-sso"
import Motd from "@/components/Motd"
import Contact from "@/components/Contact"

interface IViewer {
  view: string;
  hideSidebar: boolean;
  setHideSidebar: (s: boolean) => void
}

const componentMap: { [key: string]: React.ComponentType } = {
  'about': About,
  'experience': Experience,
  'projects': Projects,
  'resume': Resume,
  'uses': Uses,
  'msft-sso': Sso,
  'google-sso': GoogleSso,
  'contact': Contact,
};

export default function Viewer({ view, hideSidebar, setHideSidebar }: IViewer) {
  const Component = componentMap[view] || Motd;

  return (
    <ViewContainer setHideSidebar={setHideSidebar} hideSidebar={hideSidebar} title={view ?? 'motd'}>
      <Component />
    </ViewContainer>
  );
}
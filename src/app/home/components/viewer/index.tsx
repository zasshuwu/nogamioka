import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import ViewContainer from "./view-container"
import Uses from "@/components/Uses"
import Sso from "@/components/Msft-sso"
import GoogleSso from "@/components/Google-sso"
import Motd from "@/components/Motd"

interface IViewer {
  view: string,
}

export default function Viewer({ view }: IViewer) {
  switch (view) {
    case 'about': {
      return <ViewContainer title={view}><About></About></ViewContainer>
    }
    case 'experience': {
      return <ViewContainer title={view}><Experience></Experience></ViewContainer>
    }
    case 'projects': {
      return <ViewContainer title={view}><Projects></Projects></ViewContainer>
    }
    case 'resume': {
      return <ViewContainer title={view}><Resume></Resume></ViewContainer>
    }
    case 'uses': {
      return <ViewContainer title={view}><Uses></Uses></ViewContainer>
    }
    case 'msft-sso': {
      return <ViewContainer title={view}><Sso></Sso></ViewContainer>
    }
    case 'google-sso': {
      return <ViewContainer title={view}><GoogleSso></GoogleSso></ViewContainer>
    }
    default: {
      return <ViewContainer title={'motd'}>
        <Motd></Motd>
      </ViewContainer>
    }
  }
}
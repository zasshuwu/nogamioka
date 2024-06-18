import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import ViewContainer from "./view-container"

interface IViewer {
  view: string
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
  }
}
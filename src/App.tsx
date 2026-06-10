import AppShell from "./components/AppShell"
import ContactSection from "./sections/ContactSection"
import FeaturesSection from "./sections/FeaturesSection"
import HeroSection from "./sections/HeroSection"
import WorkflowSection from "./sections/WorkflowSection"

function App() {
  return (
    <>
      <AppShell />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <ContactSection />
    </>
  )
}

export default App
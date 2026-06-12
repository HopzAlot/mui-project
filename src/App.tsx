import AppShell from "./components/AppShell"
import ContactSection from "./sections/ContactSection"
import FeaturesSection from "./sections/FeaturesSection"
import HeroSection from "./sections/HeroSection"
import OrdersSection from "./sections/OrdersSection"
import WorkflowSection from "./sections/WorkflowSection"

function App() {
  return (
    <>
      <AppShell />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <OrdersSection />
      <ContactSection />
    </>
  )
}

export default App
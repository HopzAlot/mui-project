import AppShell from "./components/AppShell"
import AuthDialog from "./components/auth/AuthDialog"
import ContactSection from "./sections/ContactSection"
import FeaturesSection from "./sections/FeaturesSection"
import HeroSection from "./sections/HeroSection"
import OrdersSection from "./sections/OrdersSection"
import WorkflowSection from "./sections/WorkflowSection"
import { useOrderDialogFlow } from "./hooks/useOrderDialogFlow"

function App() {
  const {
    orderDialogOpen,
    authDialogOpen,
    openOrderDialog,
    closeOrderDialog,
    closeAuthDialog,
    handleOrderNow,
    handleAuthenticated,
  } = useOrderDialogFlow()

  return (
    <>
      <AppShell />
      <HeroSection onOrderNow={handleOrderNow} />
      <FeaturesSection />
      <WorkflowSection />
      <OrdersSection
        orderDialogOpen={orderDialogOpen}
        onOrderDialogOpen={openOrderDialog}
        onOrderDialogClose={closeOrderDialog}
      />
      <ContactSection />
      <AuthDialog
        open={authDialogOpen}
        onClose={closeAuthDialog}
        onAuthenticated={handleAuthenticated}
      />
    </>
  )
}

export default App

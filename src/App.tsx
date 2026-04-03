import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Preloader from "@/components/Preloader";
import Index from "@/pages/Index";
import Portfolio from "@/pages/Portfolio";
import Artists from "@/pages/Artists";
import ArtistProfile from "@/pages/ArtistProfile";
import Process from "@/pages/Process";
import Booking from "@/pages/Booking";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:slug" element={<ArtistProfile />} />
          <Route path="/process" element={<Process />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  const [ready, setReady] = useState(false);
  const handleComplete = useCallback(() => setReady(true), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Preloader onComplete={handleComplete} />
          {ready && <AnimatedRoutes />}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Infrastructure from "./pages/Infrastructure";
import Academics from "./pages/Academics";
import StudentLife from "./pages/StudentLife";
import Gallery from "./pages/Gallery";
import NotableVisits from "./pages/NotableVisits";
import HallOfFame from "./pages/HallOfFame";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/student-life" element={<StudentLife />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/notable-visits" element={<NotableVisits />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/body/dashboard/Dashboard';
import ContactForm from './components/body/contactForm/ContactForm';
import Podcasts from './components/body/podcasts/Podcasts';


const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <StrictMode>
        <BrowserRouter basename="/">
      
            <Header />
            
            <div className="wrapper">

                <main>
                    <div className="main">
                        <Routes>
                            <Route path="/" element={ <Dashboard /> } />
                            <Route path="/contactForm" element={ <ContactForm /> } />
                            <Route path="/podcasts" element={ <Podcasts /> } />
                            {/* <Route path="/home" element={<PageHome />} /> */}
                            {/* <Route path="/about" element={<PageAbout />} />
                            <Route path="/work" element={<PageWork />} />
                            <Route path="/singlework/:id" element={<PageSingleWork />} />
                            <Route path="/contact"me element={<PageContact />} />
                            <Route path="*" element={<PageNotFound />} /> */}
                        </Routes>
                    </div>
                </main>
                
            </div>

            <Footer />
      
        </BrowserRouter>
    </StrictMode>
);
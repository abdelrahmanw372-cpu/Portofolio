import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
    const [isCursorActive, setIsCursorActive] = useState(false);

    useEffect(() => {
        // Check if device supports hover (not mobile)
        const hasHover = window.matchMedia('(hover: hover)').matches;
        setIsCursorActive(hasHover);

        // Add custom cursor class to body
        if (hasHover) {
            document.body.classList.add('custom-cursor-active');
        }

        return () => {
            document.body.classList.remove('custom-cursor-active');
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-dark-bg text-dark-text overflow-x-hidden">
            {/* Custom Cursor */}
            {isCursorActive && <CustomCursor theme="dark" />}

            {/* Animated Background */}
            <AnimatedBackground />

            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="relative z-10">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;

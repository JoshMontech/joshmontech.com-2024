"use client"
import React, { useRef, useEffect, useState, useCallback } from 'react';

const SECTIONS_COUNT = 5;
const SCROLL_DURATION = 500;
const WHEEL_DEBOUNCE = 50;

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Optimized smoothScroll function using useCallback
  const smoothScroll = useCallback((targetPosition: number, duration: number) => {
    const start = scrollContainerRef.current?.scrollTop || 0;
    const distance = targetPosition - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime > duration) {
        isScrollingRef.current = false;
        return;
      }

      const progress = elapsedTime / duration;
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress ** 3 
        : 1 - (-2 * progress + 2) ** 3 / 2;

      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = start + distance * easeInOutCubic;
      }

      requestAnimationFrame(animateScroll);
    };

    isScrollingRef.current = true;
    requestAnimationFrame(animateScroll);
  }, []);

  // Optimized scrollToSection function using useCallback
  const scrollToSection = useCallback((index: number) => {
    const targetSection = sectionRefs.current[index];
    if (targetSection && scrollContainerRef.current) {
      const containerHeight = scrollContainerRef.current.clientHeight;
      const sectionHeight = targetSection.clientHeight;
      const targetPosition = targetSection.offsetTop - (containerHeight / 2) + (sectionHeight / 2);
      smoothScroll(targetPosition, SCROLL_DURATION);
    }
    setActiveSection(index);
  }, [smoothScroll]);

  // Optimized handleScroll function using useCallback
  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current && !isScrollingRef.current) {
      const { scrollTop, clientHeight } = scrollContainerRef.current;
      const containerCenter = scrollTop + (clientHeight / 2);

      const newActiveSection = sectionRefs.current.reduce((closest, section, index) => {
        if (section) {
          const sectionCenter = section.offsetTop + (section.clientHeight / 2);
          const distance = Math.abs(containerCenter - sectionCenter);
          return distance < closest.distance ? { index, distance } : closest;
        }
        return closest;
      }, { index: 0, distance: Infinity }).index;

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    }
  }, []);

  // Optimized handleWheel function using useCallback
  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
    
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }

    wheelTimeoutRef.current = setTimeout(() => {
      const direction = event.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(0, Math.min(SECTIONS_COUNT - 1, activeSection + direction));
      scrollToSection(newIndex);
    }, WHEEL_DEBOUNCE);
  }, [activeSection, scrollToSection]);

  useEffect(() => {
       scrollToSection(0);
  }, [])

  // Combined useEffects
  useEffect(() => {
    const handleGlobalWheel = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        event.preventDefault();
        handleWheel(event);
      }
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleGlobalWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [handleWheel, scrollToSection]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      const newIndex = Math.max(0, Math.min(SECTIONS_COUNT - 1, activeSection + direction));
      scrollToSection(newIndex);
    }
  }, [activeSection, scrollToSection]);

  return (
    <div className="flex">
      <div className="left-section fixed w-[calc(50%-8px)] p-4">
        <div>Joshua Montgomery</div>
        <div>Front End Engineer</div>
        {Array.from({ length: SECTIONS_COUNT }).map((_, index) => (
          <div
            key={index}
            className={`cursor-pointer ${activeSection === index ? 'font-bold' : ''}`}
            onClick={() => scrollToSection(index)}
          >
            Section {index + 1}
          </div>
        ))}
      </div>
      <div className="right-section relative ml-[50%] w-[calc(50%-8px)] p-4 overflow-hidden">
        <div className="mask-container">
          <div 
            ref={scrollContainerRef}
            className="scroll-container overflow-y-auto h-screen"
            onScroll={handleScroll}
          >
            <div className="h-[50vh]"></div>
            <div>Joshua Montgomery</div>
            <div>Front End Engineer</div>
            {Array.from({ length: SECTIONS_COUNT }).map((_, index) => (
              <div
                key={index}
                ref={(el) => el && (sectionRefs.current[index] = el)}
                className="h-[400px] border border-black bg-blue-light w-full mb-4"
              >
                Section {index + 1}
              </div>
            ))}
            <div className="h-[50vh]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
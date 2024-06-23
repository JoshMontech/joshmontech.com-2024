"use client"
import React, { useRef, useEffect, useState, useCallback } from 'react';

const CATEGORIES = [
  {
    name: 'Category 1',
    sections: ['Section 1.1', 'Section 1.2']
  },
  {
    name: 'Category 2',
    sections: ['Section 2.1', 'Section 2.2', 'Section 2.3']
  },
  {
    name: 'Category 3',
    sections: ['Section 3.1', 'Section 3.2']
  }
];
const SCROLL_DURATION = 500;
const WHEEL_DEBOUNCE = 50;

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[][]>([]);
  const [activeSection, setActiveSection] = useState({ categoryIndex: 0, sectionIndex: 0 });
  const [activeCategory, setActiveCategory] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const scrollToSection = useCallback((categoryIndex: number, sectionIndex: number) => {
    const targetSection = sectionRefs.current[categoryIndex][sectionIndex];
    if (targetSection && scrollContainerRef.current) {
      const containerHeight = scrollContainerRef.current.clientHeight;
      const sectionHeight = targetSection.clientHeight;
      const targetPosition = targetSection.offsetTop - (containerHeight / 2) + (sectionHeight / 2);
      smoothScroll(targetPosition, SCROLL_DURATION);
    }
    setActiveSection({ categoryIndex, sectionIndex });
    setActiveCategory(categoryIndex);
  }, [smoothScroll]);

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current && !isScrollingRef.current) {
      const { scrollTop, clientHeight } = scrollContainerRef.current;
      const containerCenter = scrollTop + (clientHeight / 2);

      let newActiveCategory = activeCategory;
      let newActiveSection = activeSection;

      sectionRefs.current.forEach((category, categoryIndex) => {
        category.forEach((section, sectionIndex) => {
          if (section) {
            const sectionCenter = section.offsetTop + (section.clientHeight / 2);
            const distance = Math.abs(containerCenter - sectionCenter);
            if (distance < Infinity) {
              newActiveCategory = categoryIndex;
              newActiveSection = { categoryIndex, sectionIndex };
            }
          }
        });
      });

      if (newActiveSection.categoryIndex !== activeSection.categoryIndex || newActiveSection.sectionIndex !== activeSection.sectionIndex) {
        setActiveSection(newActiveSection);
        setActiveCategory(newActiveCategory);
      }
    }
  }, [activeCategory, activeSection]);

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
    
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }

    wheelTimeoutRef.current = setTimeout(() => {
      const direction = event.deltaY > 0 ? 1 : -1;
      let { categoryIndex, sectionIndex } = activeSection;
      if (direction > 0) {
        sectionIndex += 1;
        if (sectionIndex >= sectionRefs.current[categoryIndex].length) {
          sectionIndex = 0;
          categoryIndex = Math.min(categoryIndex + 1, CATEGORIES.length - 1);
          if (categoryIndex === activeSection.categoryIndex) {
            return; // Prevents bouncing back
          }
        }
      } else {
        sectionIndex -= 1;
        if (sectionIndex < 0) {
          categoryIndex = Math.max(categoryIndex - 1, 0);
          if (categoryIndex === activeSection.categoryIndex) {
            return; // Prevents bouncing back
          }
          sectionIndex = sectionRefs.current[categoryIndex].length - 1;
        }
      }
      scrollToSection(categoryIndex, sectionIndex);
    }, WHEEL_DEBOUNCE);
  }, [activeSection, scrollToSection]);

  useEffect(() => {
    scrollToSection(0, 0);
  }, []);

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
      let { categoryIndex, sectionIndex } = activeSection;
      if (direction > 0) {
        sectionIndex += 1;
        if (sectionIndex >= sectionRefs.current[categoryIndex].length) {
          sectionIndex = 0;
          categoryIndex = Math.min(categoryIndex + 1, CATEGORIES.length - 1);
          if (categoryIndex === activeSection.categoryIndex) {
            return; // Prevents bouncing back
          }
        }
      } else {
        sectionIndex -= 1;
        if (sectionIndex < 0) {
          categoryIndex = Math.max(categoryIndex - 1, 0);
          if (categoryIndex === activeSection.categoryIndex) {
            return; // Prevents bouncing back
          }
          sectionIndex = sectionRefs.current[categoryIndex].length - 1;
        }
      }
      scrollToSection(categoryIndex, sectionIndex);
    }
  }, [activeSection, scrollToSection]);
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left section for desktop, header for mobile */}
      <div className="sticky top-0 z-10 w-full md:w-[calc(50%-8px)] md:fixed md:h-screen px-4 shadow-md md:shadow-none">
        <div className="flex justify-between items-center md:flex-col md:items-start md:h-full">
          <div>
            <div className="text-lg font-bold">Joshua Montgomery</div>
            <div className="text-sm text-gray-600 md:mb-4">Front End Engineer</div>
          </div>
          <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
            {CATEGORIES.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className={`cursor-pointer px-2 py-1 rounded ${activeCategory === categoryIndex ? 'font-bold bg-gray-200' : ''}`}>
                  {category.name}
                </div>
                <div className="pl-4">
                  {category.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className={`cursor-pointer px-2 py-1 rounded ${activeSection.categoryIndex === categoryIndex && activeSection.sectionIndex === sectionIndex ? 'font-bold bg-gray-200' : ''}`}
                      onClick={() => scrollToSection(categoryIndex, sectionIndex)}
                    >
                      {section}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="md:ml-[50%] p-x4 overflow-hidden flex-1">
        <div className="mask-container">
          <div 
            ref={scrollContainerRef}
            className="scroll-container overflow-y-auto h-screen"
            onScroll={handleScroll}
          >
            <div className="h-[50vh]"></div>
            {CATEGORIES.map((category, categoryIndex) => (
              category.sections.map((section, sectionIndex) => (
                <div
                  key={`${categoryIndex}-${sectionIndex}`}
                  ref={(el) => {
                    if (el) {
                      if (!sectionRefs.current[categoryIndex]) {
                        sectionRefs.current[categoryIndex] = [];
                      }
                      sectionRefs.current[categoryIndex][sectionIndex] = el;
                    }
                  }}
                  className="min-h-screen md:min-h-[400px] border border-black bg-blue-light w-full mb-4 flex items-center justify-center text-2xl"
                >
                  {section}
                </div>
              ))
            ))}
            <div className="h-[50vh]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
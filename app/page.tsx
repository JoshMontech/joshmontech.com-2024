"use client"
import React, { useRef, useEffect, useState, useCallback } from 'react';
import ProfilePicture from '../components/ProfilePicture';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import Jobs from '../components/Jobs';
import GetInTouch from '../components/GetInTouch';
import SocialBadges from '../components/SocialBadges';
import Section from '../components/Section';
import { GlowCapture } from '@codaworks/react-glow';

interface Section {
  title: string;
  component: React.ComponentType;
}

interface Category {
  name: string;
  sections: Section[];
}

interface MostVisibleSection {
  categoryIndex: number; sectionIndex: number 
}

const CATEGORIES: Category[] = [
  {
    name: 'About Me',
    sections: [
      { title: 'Summary', component: About },
      { title: 'Skills & Technologies', component: Skills },
    ]
  },
  {
    name: 'Experience',
    sections: [
      { title: 'Professional', component: Jobs },
      { title: 'Projects', component: FeaturedProjects },
    ]
  },
  {
    name: 'Contact',
    sections: [
      { title: 'Get in Touch', component: GetInTouch },
    ]
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState({ categoryIndex: 0, sectionIndex: 0 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const intersectionRatios = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    console.log('Setting up Intersection Observer');
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Intersection Observer callback triggered');
        entries.forEach((entry) => {
          const [categoryIndex, sectionIndex] = entry.target.id.split('-').map(Number);
          intersectionRatios.current[`${categoryIndex}-${sectionIndex}`] = entry.intersectionRatio;
          console.log(`Section ${categoryIndex}-${sectionIndex} intersection ratio: ${entry.intersectionRatio}`);
        });

        let maxRatio = 0;
        let mostVisibleSection: MostVisibleSection | null = null;

        Object.entries(intersectionRatios.current).forEach(([key, ratio]) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            const [categoryIndex, sectionIndex] = key.split('-').map(Number);
            mostVisibleSection = { categoryIndex, sectionIndex };
          }
        });

        console.log('Current intersection ratios:', intersectionRatios.current);
        console.log('Most visible section:', mostVisibleSection);
        console.log('Current active section:', activeSection);
        
        if (mostVisibleSection && (
          (mostVisibleSection as MostVisibleSection).categoryIndex !== activeSection.categoryIndex ||
          (mostVisibleSection as MostVisibleSection).sectionIndex !== activeSection.sectionIndex
        )) {
          console.log('Updating active section to:', mostVisibleSection);
          setActiveSection(mostVisibleSection);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    console.log('Sections to observe:', Object.keys(sectionRefs.current));
    Object.entries(sectionRefs.current).forEach(([key, section]) => {
      if (section) {
        observer.observe(section);
        console.log(`Observing section: ${key}`);
      }
    });

    return () => {
      console.log('Cleaning up Intersection Observer');
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [activeSection]);

  const scrollToSection = useCallback((categoryIndex: number, sectionIndex: number) => {
    console.log(`Scrolling to section: ${categoryIndex}-${sectionIndex}`);
    const sectionId = `${categoryIndex}-${sectionIndex}`;
    const sectionElement = sectionRefs.current[sectionId];
    if (sectionElement && scrollContainerRef.current) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const scrollToCategory = (categoryIndex: number) => {
    console.log(`Scrolling to category: ${categoryIndex}`);
    scrollToSection(categoryIndex, 0);
  };

  console.log('Rendering with active section:', activeSection);

  return (
    <GlowCapture>
    <div className="flex relative mx-auto max-w-[1280px] px-4 xl:px-24 justify-end">
      {/* nav bar */}
      <div className="bg-[#020411] border-b border-blue-light md:border-none md:bg-inherit w-full fixed top-0 left-0 right-0 z-50 p-4 md:py-24 md:px-0 md:w-[45%] md:sticky md:h-screen flex flex-col md:items-center md:justify-between">   
        {/* pfp */}
        <div className='w-full'>
          <div className="flex items-center gap-4 mb-4 w-full">
            <ProfilePicture />
            <div className="flex flex-col">
              <div className="text-lg lg:text-3xl font-bold">Joshua Montgomery</div>
              <div className="text-sm lg:text-xl font-light">Senior Front End Engineer</div>
              <SocialBadges />
            </div>
          </div>
          
          {/* Mobile dropdown */}
          <div className="md:hidden bg-[#020411]">
            <div 
              className="cursor-pointer p-2 border rounded border-blue-light"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {CATEGORIES[activeSection.categoryIndex].name} - {CATEGORIES[activeSection.categoryIndex].sections[activeSection.sectionIndex].title}
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 border border-blue-light mt-4 p-2 bg-[#020411] mx-4 rounded">
                {CATEGORIES.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-2">
                    <div className="font-bold">{category.name}</div>
                    {category.sections.map((section, sectionIndex) => (
                      <div 
                        key={sectionIndex} 
                        className="pl-4 py-1 cursor-pointer"
                        onClick={() => {
                          scrollToSection(categoryIndex, sectionIndex);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {section.title}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block space-y-2 w-full ">
            {CATEGORIES.map((category, categoryIndex) => (
              <div key={categoryIndex} className="relative">
                <div 
                  className={`cursor-pointer px-2 py-1 rounded ${
                    activeSection.categoryIndex === categoryIndex ? 'font-bold' : 'font-light'
                  }`} 
                  onClick={() => scrollToCategory(categoryIndex)}
                >
                  {category.name}
                </div>
                <ul className="ml-5 pl-3 mt-2 relative">
                  {category.sections.map((section, sectionIndex) => (
                    <li
                      key={sectionIndex}
                      className={`cursor-pointer px-2 py-1 rounded relative w-fit ${
                        activeSection.categoryIndex === categoryIndex && activeSection.sectionIndex === sectionIndex 
                          ? 'font-bold' 
                          : 'font-light'
                      }`}
                      onClick={() => scrollToSection(categoryIndex, sectionIndex)}
                    >
                      {section.title}
                      <div 
                        className={`absolute bottom-0 left-0 h-[1px] rounded bg-[rgb(39,190,255)] transition-all duration-300 ease-in-out ${activeSection.categoryIndex === categoryIndex && activeSection.sectionIndex === sectionIndex ? 'w-full' : 'w-0'}`}
                      />
                    </li>
                  ))}
                  <div 
                    className={`absolute left-0 w-[1px] bg-[rgb(39,190,255)] rounded transition-all duration-300 ease-in-out top-0 ${activeSection.categoryIndex === categoryIndex ? 'h-full' : 'h-0'}`}
                  />
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex w-full text-xs pl-2 font-light">© joshmontech.com 2024</div>
      </div>

      {/* sections */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto mt-[181px] md:mt-24">
        <div className="">
          {CATEGORIES.map((category, categoryIndex) => (
            category.sections.map((section, sectionIndex) => {
              const SectionComponent = section.component;
              return (
                <div
                  key={`${categoryIndex}-${sectionIndex}`}
                  id={`${categoryIndex}-${sectionIndex}`}
                  ref={(el) => {
                    if (el) {
                      sectionRefs.current[`${categoryIndex}-${sectionIndex}`] = el;
                      console.log(`Ref set for section: ${categoryIndex}-${sectionIndex}`);
                    }
                  }}
                  className="w-full mb-4"
                >
                  <SectionComponent />
                </div>
              );
            })
          ))}
          <div className="h-[50vh]"></div>
        </div>
      </div>
    </div>
    </GlowCapture>
  );
}
"use client"
import React, { useRef, useEffect, useState } from 'react';
import ProfilePicture from './components/ProfilePicture';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Jobs from './components/Jobs';
import OtherWork from './components/OtherWork';
import GetInTouch from './components/GetInTouch';
import Resume from './components/Resume';

const CATEGORIES = [
  {
    name: 'Experience',
    sections: [
      { title: 'About Me', component: About },
      { title: 'Skills & Technologies', component: Skills },
      { title: 'Work Experience', component: Jobs }
    ]
  },
  {
    name: 'Projects',
    sections: [
      { title: 'Featured Projects', component: FeaturedProjects },
      { title: 'Other Work', component: OtherWork },
    ]
  },
  {
    name: 'Contact',
    sections: [
      { title: 'Get in Touch', component: GetInTouch },
      { title: 'Resume', component: Resume },
    ]
  }
];
export default function Home() {
  const [activeSection, setActiveSection] = useState({ categoryIndex: 0, sectionIndex: 0 });
  const sectionRefs = useRef({});
  const scrollContainerRef = useRef(null);
  const intersectionRatios = useRef({});

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
      let mostVisibleSection = null;

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
        mostVisibleSection.categoryIndex !== activeSection.categoryIndex ||
        mostVisibleSection.sectionIndex !== activeSection.sectionIndex
      )) {
        console.log('Updating active section to:', mostVisibleSection);
        setActiveSection(mostVisibleSection);
      }
    },
    {
      root: null, // Use the viewport as root
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

  const scrollToSection = (categoryIndex: number, sectionIndex: number) => {
    console.log(`Scrolling to section: ${categoryIndex}-${sectionIndex}`);
    const sectionId = `${categoryIndex}-${sectionIndex}`;
    const sectionElement = sectionRefs.current[sectionId];
    if (sectionElement && scrollContainerRef.current) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  console.log('Rendering with active section:', activeSection);

  return (
    <div className="flex relative mx-auto max-w-[1280px] px-6 justify-end">
      {/* Left section for desktop, header for mobile */}
      <div className="w-full fixed top-0 left-0 right-0 md:right-auto md:w-[30%] md:sticky md:h-screen flex items-center justify-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <ProfilePicture />
            <div className="flex flex-col gap-2 ">
              <div className="text-lg font-bold">Joshua Montgomery</div>
              <div className="text-sm text-gray-600">Front End Engineer</div>
            </div>
          </div>
          <div className="space-y-2">
            {CATEGORIES.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className={`cursor-pointer px-2 py-1 rounded ${activeSection.categoryIndex === categoryIndex ? 'font-bold bg-gray-200' : ''}`}>
                  {category.name}
                </div>
                <div className="pl-4">
                  {category.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className={`cursor-pointer px-2 py-1 rounded ${activeSection.categoryIndex === categoryIndex && activeSection.sectionIndex === sectionIndex ? 'font-bold bg-gray-200' : ''}`}
                      onClick={() => scrollToSection(categoryIndex, sectionIndex)}
                    >
                      {section.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div ref={scrollContainerRef} className="w-full md:w-[70%] overflow-y-auto">
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
                  className="min-h-screen md:min-h-[70vh] border border-blue-light w-full mb-4 flex flex-col items-center justify-center"
                >
                  {/* <h2 className="text-2xl font-bold mb-4">{section.title}</h2> */}
                  <SectionComponent />
                </div>
              );
            })
          ))}
          <div className="h-[50vh]"></div>
        </div>
      </div>
    </div>
  );
}
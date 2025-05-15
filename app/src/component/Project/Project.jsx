import arrProjectsData from '../../data/projects.json';

import { Navigation, ProjectSection } from '../';

import { useEffect } from 'react';

const Project = ({ strSlug }) => {
  const objProjectData = arrProjectsData.filter(
    objMember => objMember.strSlug === strSlug
  )[0];
  if (!objProjectData) return;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const objCoverArt = objProjectData.arrArt.filter(
    objMember => objMember.name === 'cover'
  )[0];

  return (
    <>
      <Navigation />
      <main>
        <div
          className={`
          ${'display--grid'}
          ${'grid--auto-flow--column'}
          ${'grid--children--grid-column--1-neg1'}
          ${'grid--children--last-child--margin--bottom--0'}
          ${'grid-gap--3rem'}
          ${'grid-template-columns--repeat-6-1fr'}
          ${'headlines--h6--color--foreground--darker'}
          ${'headlines--h6--text-transform--uppercase'}
          ${'headlines--h6-sibling--margin-top--0p75rem'}
          ${'margin--left--auto'}
          ${'margin--right--auto'}
          ${'max-width--480px'}
          ${'not-headlines--font-size--1p125em'}
          ${'not-headlines--max-width--prose'}
          ${'padding--left--1rem'}
          ${'padding--right--1rem'}
          ${'padding--bottom--1rem'}
          ${'padding--top--2rem'}
          ${'bp2--max-width--100pct-minus12rem'}
          ${'bp2--padding--bottom--3rem'}
          ${'bp2--padding--left--3rem'}
          ${'bp2--padding--right--3rem'}
          ${'bp2--padding--top--3rem'}
          ${'bp2--row-gap--5rem'}
          ${'bp3--column-gap--5rem'}
          ${'bp3--font-size--1p125rem'}
          ${'bp3--not-headlines--font-size--1p25em'}
          ${'bp3--padding--bottom--5rem'}
          ${'bp7--max-width--1308px'}
        `}>
          <img
            alt={objCoverArt.altText}
            src={objCoverArt.filename}
            width='100%'
            className={`${'bp4--grid-column--1-neg4'}`}
          />
          <h2 className={`${'h4'} ${'bp4--grid-column--4-neg1'}`}>
            {objProjectData.strHeadline}
          </h2>
          {objProjectData.arrSections.map((objMember, numIndex) => {
            return (
              <div
                className={`bp2--grid-column--${
                  !(numIndex % 2) ? '1-4' : '4-neg1'
                }`}
                key={strSlug + '-project-section-' + numIndex}>
                <ProjectSection
                  objSectionData={
                    objMember.strHeadline.toLowerCase() === 'tools'
                      ? { ...objMember, arrBullets: objProjectData.arrTools }
                      : objMember
                  }
                  strSlug={strSlug}
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Project;

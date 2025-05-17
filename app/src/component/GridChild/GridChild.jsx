import arrProjectCardsContent from '../../data/projects.json';
import { Link } from 'react-router';

const GridChild = ({ slug }) => {
  const {
    strSlug,
    strHeadline,
    strDescription,
    arrTools,
    arrArt = [],
  } = arrProjectCardsContent.find(objEntry => objEntry.strSlug === slug);

  const objCoverArt = arrArt.filter(objMember => objMember.name === 'cover')[0];

  return (
    <div>
      <img
        alt={objCoverArt.altText}
        src={`image/${objCoverArt.filename}` || ''}
        width='100%'
        className={`
          ${'border-radius--0p67rem'}
          ${'border--3px--solid--wayfinding'}
          ${'margin--bottom--1rem'}
          ${'bp4--grid-column--1-neg4'}
          ${'bp4--grid-row--1-4'}
          ${'bp6--grid-row--1-5'}
        `}
      />
      <h3 className='h4'>{strHeadline}</h3>
      <p
        className={`
            ${'font-family--adelle'}
            ${'line-height--1p5'}
            ${'bp2--font-size--1p125rem'}
            ${'bp3--font-size--1p25rem'}
        `}>
        {strDescription}
      </p>
      <ul
        className={`
            ${'display--grid'}
            ${'font-family--adelle'}
            ${'font-size--1p125em'}
            ${'grid-gap--0p5rem--3rem'}
            ${'grid-template-columns--1fr-1fr'}
            ${'list-style--none'}
            ${'margin--0'}
            ${'bp2--font-size--1p25em'}
            ${'bp3--font-size--1p375em'}
            ${'bp4--grid-template-columns--1fr-1fr-1fr'}
        `}>
        {arrTools.length &&
          arrTools.map(objMember => {
            return <li key={objMember + Math.random() * 10}>{objMember}</li>;
          })}
      </ul>
      <div
        className={`${'display--grid'} ${'margin--top--1rem'} ${'grid-template-columns--1fr-auto-1fr'} ${'grid-gap--1ch'}`}>
        <div
          className={`${'background-image--stroke--color-wayfinding'}`}></div>
        <div className={`${'padding--bottom--3rem'} ${'padding--top--3rem'}`}>
          <div className={`${'white-space--nowrap'}`}>
            <Link
              className={`${'font-weight--700'} ${'button'} ${'margin--left--auto'} ${'margin--right--auto'}`}
              to={`/project-${strSlug}`}>
              <span
                className={`${'attach'} ${'attach--icon'} ${'attach--icon--after'} ${'attach--icon--right-arrow'}`}>
                <span className={`${'padding--right--0p5ch'}`}>
                  <span className={`${'sr-only'}`}>Learn </span>Project Details
                  <span className={`${'sr-only'}`}> About "{strHeadline}"</span>
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`${'background-image--stroke--color-wayfinding'}`}></div>
      </div>
    </div>
  );
};

export default GridChild;

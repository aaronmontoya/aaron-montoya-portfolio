import { Link } from 'react-router';

const Navigation = () => {
  return (
    <header>
      <h1
        className={`
          ${'h4'}
          ${'font-size--1p9rem'}
          ${'font-weight--900'}
          ${'line-height--1'}
          ${'margin--left--auto'}
          ${'margin--right--auto'}
          ${'max-width--480px'}
          ${'padding--bottom--1rem'}
          ${'padding--left--1rem'}
          ${'padding--right--1rem'}
          ${'padding--top--3rem'}
          ${'text-align--center'}
          ${'bp1--font-size--2p5rem'}
          ${'bp2--font-size--3rem'}
          ${'bp2--font-size--3p3rem'}
          ${'bp2--max-width--100pct-minus12rem'}
          ${'bp2--padding--bottom--2rem'}
          ${'bp2--padding--left--3rem'}
          ${'bp2--padding--right--3rem'}
          ${'bp2--padding--top--5rem'}
          ${'bp3--font-size--4p8rem'}
          ${'bp4--font-size--5p7rem'}
          ${'bp5--font-size--5p9rem'}
          ${'bp6--font-size--8rem'}
          ${'bp7--font-size--8p99rem'}
          ${'bp7--max-width--1308px'}
      `}>
        AARON MONTOYA
      </h1>
      <div
        className={`
        ${'display--grid'}
        ${'grid-gap--1ch'}
        ${'grid-template-columns--auto-min-content-auto'}
        ${'margin--left--auto'}
        ${'margin--right--auto'}
        ${'max-width--480px'}
        ${'padding--bottom--1rem'}
        ${'padding--left--1rem'}
        ${'padding--right--1rem'}
        ${'padding--top--1rem'}
        ${'bp2--max-width--100pct-minus12rem'}
        ${'bp2--padding--left--3rem'}
        ${'bp2--padding--right--3rem'}
        ${'bp7--max-width--1308px'}
      `}>
        <div
          className={`${'background-image--stroke--color-wayfinding'}`}></div>
        <nav>
          <Link
            className={`${'font-weight--700'} ${'button'} ${'margin--left--auto'} ${'margin--right--auto'}`}
            to={{ pathname: '/', hash: '#projects' }}>
            <span
              className={`${'attach'} ${'attach--icon'} ${'attach--icon--before'} ${'attach--icon--left-arrow'}`}>
              <span className={`${'padding--left--0p5ch'}`}>Projects</span>
            </span>
          </Link>
        </nav>
        <div
          className={`${'background-image--stroke--color-wayfinding'}`}></div>
      </div>
    </header>
  );
};

export default Navigation;

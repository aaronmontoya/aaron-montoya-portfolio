import '../../presentation/App.css';
import { GridChild } from '../../component';
import { AaronMontoyaLogoMark } from '../../component';
import { IconOverlappingCircles } from '../../component';
import { IconAppWindow } from '../../component';
import { IconHeart } from '../../component';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (window.location.hash) {
      const objAnchor = document.getElementById(window.location.hash.slice(1));
      objAnchor &&
        window.scrollTo({
          top: objAnchor.getBoundingClientRect().top + window.pageYOffset,
          behavior: 'smooth',
        });
    }
  }, []);

  return (
    <>
      <div className={`${'height--100vh'}`}>
        <div
          className={`
            ${'padding--bottom--1rem'}
            ${'padding--left--1rem'}
            ${'padding--right--1rem'}
            ${'padding--top--1rem'}
            ${'height--100pct'}
            ${'box-sizing--border-box'}
            ${'display--flex'}
            ${'align-items--center'}
          `}>
          <header className={`${'width--100pct'}`}>
            <AaronMontoyaLogoMark
              className={`
                ${'fill--white'}
                ${'width--4p2rem'}
                ${'display--block'}
                ${'margin--left--auto'}
                ${'margin--right--auto'}
                ${'margin--bottom--0p5lh'}
              `}
            />
            <h1
              className={`
                ${'text-align--center'}
                ${'margin--left--auto'}
                ${'margin--right--auto'}
                ${'headlines--h5--color--foreground--darker'}
                ${'headlines--h5--text-transform--uppercase'}
              `}>
              <span
                className={`
                  ${'h5'}
                  ${'display--block'}
                  ${'margin--bottom--0p3lh'}
                  ${'font-size--1p375rem'}
                  ${'bp2--font-size--1p5rem'}
                  ${'bp3--font-size--1p85rem'}
                `}>
                <span
                  className={`
                    ${'color--accent'}
                    ${'display--block'}
                    ${'font-family--gelato-luxe'}
                    ${'font-size--2p4rem'}
                    ${'font-weight--900'}
                    ${'text-transform--capitalize'}
                    ${'line-height--1p25'}
                    ${'margin--bottom--0p2lh'}
                    ${'bp3--font-size--2p9rem'}
                `}>
                  Howdy!
                </span>{' '}
                My name is{' '}
              </span>
              <span
                className={`
                  ${'h3'}
                  ${'display--block'}
                  ${'font-weight--900'}
                  ${'line-height--1p15'}
                  ${'color--white'}
                  ${'bp2--font-size--3p3rem'}
                `}>
                AARON <span className={`${'display--block'}`}>MONTOYA</span>
              </span>
            </h1>
          </header>
        </div>
      </div>
      <main>
        <section className={`
          ${'margin--left--auto'}
          ${'margin--right--auto'}
          ${'max-width--25rem-minus4rem'}
          ${'padding--bottom--1rem'}
          ${'padding--left--1rem'}
          ${'padding--right--1rem'}
          ${'padding--top--6rem'}
          ${'bp1--max-width--42rem-minus10rem'}
          ${'bp1--padding--left--2rem'}
          ${'bp1--padding--right--2rem'}
          ${'bp1--padding--bottom--2rem'}
          ${'bp2--max-width--56rem-minus20rem'}
          ${'bp2--padding--bottom--5rem'}
          ${'bp2--padding--left--5rem'}
          ${'bp2--padding--right--5rem'}
          ${'bp3--max-width--72ch'}
          ${'bp3--padding--bottom--10rem'}
          ${'bp3--padding--left--10rem'}
          ${'bp3--padding--right--10rem'}
        `}>
          <h2 className={`${'sr-only'}`}>Skills</h2>
          <div
            className={`${'margin--bottom--4p5rem'} ${'font-family--adelle'} ${'display--grid'} ${'grid-gap--5rem'}`}>
            <div
              className={`
                ${'border--1px--solid--wayfinding'}
                ${'max-width--20ch--plus6rem'}
                ${'margin--left--auto'}
                ${'margin--right--auto'}
                ${'padding--3rem'}
                ${'border-radius--1rem'}
                ${'bp2--max-width--20ch--plus11rem'}
              `}>
              <div
                className={`${'display--grid'} ${'grid-gap--1p5rem'} ${'margin-top--neg5p5rem'}`}>
                <IconOverlappingCircles
                  className={`${'width--5rem'} ${'margin--left--auto'} ${'margin--right--auto'} ${'color--accent'}`}
                />
                <p
                  className={`${'h4'} ${'font-size--1p6rem'} ${'font-weight--500'} ${'margin--top--0'} ${'margin--bottom--0'} ${'bp2--font-size--2rem'} ${'line-height--1p4'}`}>
                  I make web apps and software, primarily by writing JavaScript,
                  HTML and CSS.
                </p>
              </div>
            </div>
            <div
              className={`
                ${'border--1px--solid--wayfinding'}
                ${'max-width--20ch--plus6rem'}
                ${'margin--left--auto'}
                ${'margin--right--auto'}
                ${'padding--3rem'}
                ${'border-radius--1rem'}
                ${'bp2--max-width--20ch--plus11rem'}
              `}>
              <div
                className={`${'display--grid'} ${'grid-gap--1p5rem'} ${'margin-top--neg5p5rem'}`}>
                <IconAppWindow
                  className={`${'width--5rem'} ${'margin--left--auto'} ${'margin--right--auto'} ${'color--accent'}`}
                />
                <p
                  className={`${'h4'} ${'font-size--1p6rem'} ${'font-weight--500'} ${'margin--top--0'} ${'margin--bottom--0'} ${'bp2--font-size--2rem'} ${'line-height--1p4'}`}>
                  I'm particularly good at making user interfaces, writing
                  frontend logic and integrating with microservices.
                </p>
              </div>
            </div>
            <div
              className={`
                ${'border--1px--solid--wayfinding'}
                ${'max-width--20ch--plus6rem'}
                ${'margin--left--auto'}
                ${'margin--right--auto'}
                ${'padding--3rem'}
                ${'border-radius--1rem'}
                ${'bp2--max-width--20ch--plus11rem'}
              `}>
              <div
                className={`${'display--grid'} ${'grid-gap--1p5rem'} ${'margin-top--neg5p5rem'}`}>
                <IconHeart
                  className={`${'width--5rem'} ${'margin--left--auto'} ${'margin--right--auto'} ${'color--accent'}`}
                />
                <p
                  className={`${'h4'} ${'font-size--1p6rem'} ${'font-weight--500'} ${'margin--top--0'} ${'margin--bottom--0'} ${'bp2--font-size--1p8rem'} ${'line-height--1p4'}`}>
                  I care about the people who use my work by making it
                  accessible, efficacious and reliable.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${'min-height--100vh'} ${'background-color--wayfinding-opacity-0p2'}`}>
          <div
            className={`
              ${'padding--bottom--5rem'}
              ${'padding--left--1rem'}
              ${'padding--right--1rem'}
              ${'padding--top--5rem'}
              ${'height--100pct'}
              ${'box-sizing--border-box'}
              ${'display--flex'}
              ${'align-items--center'}
              ${'max-width--45ch'}
              ${'margin--left--auto'}
              ${'margin--right--auto'}
            `}>
            <div>
              <h2 className={`${'sr-only'}`}>Contact</h2>
              <p
                className={`${'h4'} ${'font-family--adelle'} ${'line-height--1p4'} ${'font-size--1p6rem'} ${'margin--top--0'} ${'bp2--font-size--1p8rem'}`}>
                I'll happily research, design, build, implement and maintain web
                apps and websites for you and your clients.
              </p>
              <p
                className={`${'h4'} ${'font-family--adelle'} ${'line-height--1p4'} ${'font-size--1p6rem'} ${'bp2--font-size--1p8rem'}`}>
                I'm available to solve your problem—please feel free to email or
                call me to discuss.
              </p>
              <h2 className={`${'h4'} ${'font-weight--900'} ${'font-size--1p6rem'} ${'bp2--font-size--1p8rem'}`}>
                <span
                  className={`${'display--block'} ${'margin--bottom--1rem'} ${'line-height--1'}`}>
                  howdy@<wbr/>aaronmontoya.com
                </span>
                <span>970 270 4700</span>
              </h2>
            </div>
          </div>
        </section>
        <section className={`
          ${'margin--left--auto'}
          ${'margin--right--auto'}
          ${'max-width--25rem-minus4rem'}
          ${'padding--bottom--1rem'}
          ${'padding--left--1rem'}
          ${'padding--right--1rem'}
          ${'padding--top--6rem'}
          ${'bp1--max-width--42rem-minus10rem'}
          ${'bp1--padding--left--2rem'}
          ${'bp1--padding--right--2rem'}
          ${'bp1--padding--bottom--2rem'}
          ${'bp2--max-width--56rem-minus20rem'}
          ${'bp2--padding--bottom--5rem'}
          ${'bp2--padding--left--5rem'}
          ${'bp2--padding--right--5rem'}
          ${'bp3--max-width--72ch'}
          ${'bp3--padding--bottom--10rem'}
          ${'bp3--padding--left--10rem'}
          ${'bp3--padding--right--10rem'}
        `}>
          <span className={`${'sr-only'}`}>
            <a id='projects'>projects</a>
          </span>
          <h2 className={`${'h3'} ${'margin--bottom--1em'}`}>Projects</h2>
          <div className={`${'display--grid'} ${'grid-gap--3rem'}`}>
            <GridChild slug={'recharts'} />
            <GridChild slug={'lrng'} />
            <GridChild slug={'badgr'} />
            <GridChild slug={'bitchin'} />
            <GridChild slug={'mixer'} />
            <GridChild slug={'tribal'} />
            <GridChild slug={'education'} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;

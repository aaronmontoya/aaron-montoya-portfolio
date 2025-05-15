const ProjectSection = ({ objSectionData, strSlug }) => {
  if (!objSectionData) return;
  return (
    <>
      <h3 className={`${'h6'}`}>{objSectionData.strHeadline}</h3>
      <ul className={`${'links--dotted'} ${'font-family--adelle'}`}>
        {objSectionData.arrBullets.map((objBullet, numIndex) => {
          return (
            <li
              key={
                strSlug +
                '-project-section-' +
                objSectionData.strHeadline +
                '-' +
                numIndex + Math.random() * 100
              }>
              <div dangerouslySetInnerHTML={{ __html: objBullet }}></div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProjectSection;

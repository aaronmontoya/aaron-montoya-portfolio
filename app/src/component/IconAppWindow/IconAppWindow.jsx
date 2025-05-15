const IconAppWindow = props => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 768 768'>
      <defs>
        <linearGradient
          id='b'
          x1='60.65'
          y1='191.03'
          x2='1012.07'
          y2='758.81'
          gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='currentColor' stopOpacity='.2' />
          <stop offset='.06' stopColor='currentColor' stopOpacity='.27' />
          <stop offset='.32' stopColor='currentColor' stopOpacity='.53' />
          <stop offset='.54' stopColor='currentColor' stopOpacity='.73' />
          <stop offset='.74' stopColor='currentColor' stopOpacity='.88' />
          <stop offset='.9' stopColor='currentColor' stopOpacity='.97' />
          <stop offset='1' stopColor='currentColor' />
        </linearGradient>
      </defs>
      <rect width='768' height='768' rx='120' ry='120' fill='url(#b)' />
      <circle cx='155' cy='155' r='45' fill='#fff' opacity='.5' />
      <circle cx='285' cy='155' r='45' fill='#fff' opacity='.7' />
      <circle cx='414' cy='155' r='45' fill='#fff' opacity='.9' />
    </svg>
  );
};

export default IconAppWindow;

const IconHeart = props => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 480 480'>
      <defs>
        <linearGradient
          id='d'
          x1='-33.22'
          y1='65.48'
          x2='494.11'
          y2='334.16'
          gradientUnits='userSpaceOnUse'>
          <stop offset='.07' stopColor='currentColor' stopOpacity='.2' />
          <stop offset='.14' stopColor='currentColor' stopOpacity='.3' />
          <stop offset='.3' stopColor='currentColor' stopOpacity='.51' />
          <stop offset='.46' stopColor='currentColor' stopOpacity='.69' />
          <stop offset='.62' stopColor='currentColor' stopOpacity='.82' />
          <stop offset='.76' stopColor='currentColor' stopOpacity='.92' />
          <stop offset='.89' stopColor='currentColor' stopOpacity='.98' />
          <stop offset='1' stopColor='currentColor' />
        </linearGradient>
      </defs>
      <g id='c'>
        <path
          d='M480,127.88C480,57.4,422.87.27,352.39.27c-48.54,0-90.74,27.1-112.32,67C218.54,27.23,176.26,0,127.61,0,57.13,0,0,57.14,0,127.62c0,118.75,154.42,276.75,197.64,319.97,43.22,43.22,41.62,43.22,84.84,0,43.22-43.22,197.52-201.22,197.52-319.7Z'
          fill='url(#d)'
        />
      </g>
    </svg>
  );
};

export default IconHeart;

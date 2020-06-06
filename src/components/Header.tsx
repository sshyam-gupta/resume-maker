import Link from "next/link";
import { useState, useEffect } from "react";
import debounce from 'lodash/debounce'

const MENU_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Users",
    href: "/users",
  },
  {
    label: "Users API",
    href: "/api/users",
  },
];

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    console.log({
      currentScrollPos,
      visible
    })

    setPrevScrollpos(currentScrollPos)
    setVisible(visible)
  }, 50)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });


  return (
    <nav className="shadow-md fixed right-0 left-0 bg-gray-100 z-10">
      <div className="px-8 py-5 md:px-20 flex justify-between items-center">
        <Link href="/" scroll={false}>
          <a className={`font-bold text-2xl lg:text-4xl flex items-center ${visible && 'full-logo'}`}>
            <svg
              width="100"
              height="30"
              viewBox="0 0 100 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                strokeLinecap="round"
                fillRule="evenodd"
                fontSize="9pt"
                stroke="#333"
                strokeWidth="0.25mm"
                fill="none"
                style={{
                  stroke: '#333', strokeWidth: '0.25mm', fill: '#333'
                }}
              >
                <path
                  d="M 13.74 3.81 L 12.18 5.55 Q 11.01 4.62 9.885 4.185 A 6.567 6.567 0 0 0 7.71 3.754 A 7.518 7.518 0 0 0 7.47 3.75 Q 5.95 3.75 4.932 4.41 A 3.547 3.547 0 0 0 4.8 4.5 A 2.43 2.43 0 0 0 3.773 6.278 A 3.562 3.562 0 0 0 3.75 6.69 A 3.733 3.733 0 0 0 3.809 7.374 Q 3.885 7.782 4.059 8.112 A 2.258 2.258 0 0 0 4.11 8.205 A 2.152 2.152 0 0 0 4.485 8.669 Q 4.685 8.861 4.953 9.04 A 5.3 5.3 0 0 0 5.445 9.33 A 9.416 9.416 0 0 0 6.141 9.655 Q 6.88 9.967 7.929 10.3 A 35.117 35.117 0 0 0 8.28 10.41 A 25.05 25.05 0 0 1 9.65 10.873 Q 10.315 11.12 10.879 11.382 A 12.454 12.454 0 0 1 11.52 11.7 Q 12.81 12.39 13.605 13.605 A 4.652 4.652 0 0 1 14.234 15.115 Q 14.378 15.735 14.397 16.457 A 8.434 8.434 0 0 1 14.4 16.68 Q 14.4 18.48 13.515 19.86 A 5.678 5.678 0 0 1 11.656 21.65 A 7.162 7.162 0 0 1 10.965 22.02 Q 9.324 22.789 7.084 22.8 A 13.253 13.253 0 0 1 7.02 22.8 A 11.253 11.253 0 0 1 3.706 22.334 A 9.006 9.006 0 0 1 0 20.13 L 1.56 18.39 A 11.289 11.289 0 0 0 2.967 19.369 A 8.984 8.984 0 0 0 4.11 19.935 A 7.113 7.113 0 0 0 6.026 20.409 A 8.846 8.846 0 0 0 6.99 20.46 A 6.425 6.425 0 0 0 8.415 20.31 A 4.575 4.575 0 0 0 10.17 19.515 A 3.071 3.071 0 0 0 11.393 17.363 A 4.568 4.568 0 0 0 11.43 16.77 A 4.425 4.425 0 0 0 11.375 16.054 Q 11.284 15.497 11.04 15.075 A 2.624 2.624 0 0 0 10.593 14.51 Q 10.237 14.164 9.705 13.86 Q 8.76 13.32 6.96 12.78 Q 3.78 11.82 2.31 10.47 A 4.457 4.457 0 0 1 0.91 7.775 A 6.371 6.371 0 0 1 0.84 6.81 A 5.028 5.028 0 0 1 1.23 4.821 A 4.831 4.831 0 0 1 1.665 4.02 A 5.317 5.317 0 0 1 3.441 2.378 A 6.571 6.571 0 0 1 3.975 2.1 A 7.372 7.372 0 0 1 6.153 1.484 A 9.361 9.361 0 0 1 7.35 1.41 Q 9.113 1.41 10.44 1.834 A 6.874 6.874 0 0 1 10.89 1.995 A 8.88 8.88 0 0 1 12.692 2.978 A 11.346 11.346 0 0 1 13.74 3.81 Z"
                  id="0"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 30.48 11.1 L 30.48 22.44 L 27.72 22.44 L 27.72 11.49 A 6.98 6.98 0 0 0 27.68 10.712 Q 27.559 9.638 27.075 9.12 A 2.069 2.069 0 0 0 26.103 8.544 Q 25.775 8.451 25.384 8.434 A 4.154 4.154 0 0 0 25.2 8.43 Q 23.97 8.43 23.01 9.15 A 6.172 6.172 0 0 0 22.136 9.957 Q 21.754 10.381 21.393 10.912 A 11.047 11.047 0 0 0 21.21 11.19 L 21.21 22.44 L 18.45 22.44 L 18.45 0.3 L 21.21 0 L 21.21 8.82 A 6.947 6.947 0 0 1 22.654 7.329 A 5.268 5.268 0 0 1 25.89 6.27 A 5.815 5.815 0 0 1 27.292 6.429 A 3.952 3.952 0 0 1 29.265 7.56 A 4.292 4.292 0 0 1 30.295 9.489 Q 30.48 10.221 30.48 11.1 Z"
                  id="1"
                  vectorEffect="non-scaling-stroke"
                  className={`${visible ? 'visible show-path' : 'invisible hide-path'}`}
                />
                <path
                  d="M 47.64 6.63 L 42.36 22.53 A 13.365 13.365 0 0 1 41.483 24.582 Q 40.85 25.761 40.023 26.635 A 8.091 8.091 0 0 1 39.765 26.895 Q 38.1 28.5 35.01 28.83 L 34.71 26.67 Q 35.814 26.479 36.603 26.168 A 5.258 5.258 0 0 0 37.2 25.89 A 4.532 4.532 0 0 0 38.216 25.141 A 4.009 4.009 0 0 0 38.685 24.585 A 6.281 6.281 0 0 0 39.091 23.911 Q 39.276 23.558 39.452 23.137 A 13.835 13.835 0 0 0 39.72 22.44 L 38.79 22.44 L 33.48 6.63 L 36.42 6.63 L 40.65 20.43 L 44.79 6.63 L 47.64 6.63 Z"
                  id="2"
                  vectorEffect="non-scaling-stroke"
                  className={`${visible ? 'visible show-path' : 'invisible hide-path'}`}
                />
                <path
                  d="M 62.76 20.88 L 62.13 22.8 Q 61.14 22.679 60.461 22.306 A 3.031 3.031 0 0 1 60.15 22.11 A 2.651 2.651 0 0 1 59.446 21.34 Q 59.249 21.02 59.104 20.619 A 4.929 4.929 0 0 1 59.04 20.43 A 5.12 5.12 0 0 1 55.313 22.736 A 7.314 7.314 0 0 1 54.33 22.8 Q 51.99 22.8 50.64 21.48 A 4.428 4.428 0 0 1 49.33 18.742 A 6.113 6.113 0 0 1 49.29 18.03 Q 49.29 15.51 51.105 14.16 A 6.111 6.111 0 0 1 52.964 13.243 Q 53.795 12.986 54.798 12.881 A 14.031 14.031 0 0 1 56.25 12.81 L 58.68 12.81 L 58.68 11.64 Q 58.68 10.648 58.397 9.99 A 2.09 2.09 0 0 0 57.87 9.24 A 2.498 2.498 0 0 0 57.033 8.761 Q 56.661 8.629 56.201 8.569 A 6.383 6.383 0 0 0 55.38 8.52 Q 53.64 8.52 51.12 9.36 L 50.43 7.35 A 19.163 19.163 0 0 1 53.008 6.593 Q 54.418 6.29 55.717 6.271 A 11.863 11.863 0 0 1 55.89 6.27 A 9.113 9.113 0 0 1 57.422 6.39 Q 59.09 6.675 60.06 7.635 A 4.432 4.432 0 0 1 61.21 9.655 Q 61.404 10.361 61.434 11.203 A 8.81 8.81 0 0 1 61.44 11.52 L 61.44 18.75 A 4.472 4.472 0 0 0 61.466 19.251 Q 61.533 19.841 61.77 20.175 A 1.774 1.774 0 0 0 62.286 20.653 A 2.518 2.518 0 0 0 62.76 20.88 Z M 58.68 18.27 L 58.68 14.64 L 56.61 14.64 A 8.726 8.726 0 0 0 55.039 14.769 Q 52.355 15.262 52.236 17.653 A 4.546 4.546 0 0 0 52.23 17.88 Q 52.23 19.29 52.92 20.01 A 2.19 2.19 0 0 0 53.872 20.582 Q 54.222 20.691 54.645 20.72 A 4.637 4.637 0 0 0 54.96 20.73 A 3.818 3.818 0 0 0 58.028 19.244 A 6.254 6.254 0 0 0 58.68 18.27 Z"
                  id="3"
                  vectorEffect="non-scaling-stroke"
                  className={`${visible ? 'visible show-path' : 'invisible hide-path'}`}
                />
                <path
                  d="M 87.27 11.1 L 87.27 22.44 L 84.51 22.44 L 84.51 11.49 A 6.213 6.213 0 0 0 84.422 10.392 Q 84.078 8.485 82.389 8.432 A 3.115 3.115 0 0 0 82.29 8.43 A 3.361 3.361 0 0 0 81.272 8.578 A 2.814 2.814 0 0 0 80.31 9.105 Q 79.5 9.78 78.57 11.22 L 78.57 22.44 L 75.81 22.44 L 75.81 11.49 A 6.213 6.213 0 0 0 75.722 10.392 Q 75.378 8.485 73.689 8.432 A 3.115 3.115 0 0 0 73.59 8.43 A 3.443 3.443 0 0 0 72.599 8.567 A 2.786 2.786 0 0 0 71.58 9.12 A 5.973 5.973 0 0 0 71.012 9.679 Q 70.461 10.295 69.87 11.22 L 69.87 22.44 L 67.11 22.44 L 67.11 6.63 L 69.48 6.63 L 69.72 8.94 Q 71.49 6.27 74.28 6.27 A 4.804 4.804 0 0 1 75.523 6.424 A 3.802 3.802 0 0 1 76.785 7.02 Q 77.82 7.77 78.27 9.12 A 8.95 8.95 0 0 1 79.153 8.002 Q 79.701 7.416 80.306 7.018 A 5.601 5.601 0 0 1 80.325 7.005 A 4.501 4.501 0 0 1 82.24 6.316 A 5.796 5.796 0 0 1 82.98 6.27 A 4.709 4.709 0 0 1 84.41 6.477 A 3.762 3.762 0 0 1 86.1 7.575 Q 87.226 8.831 87.268 10.935 A 8.233 8.233 0 0 1 87.27 11.1 Z"
                  id="4"
                  vectorEffect="non-scaling-stroke"
                  className={`${visible ? 'visible show-path' : 'invisible hide-path'}`}
                />
                <path
                  d="M 94.33 18.766 A 2.218 2.218 0 0 0 93.54 18.63 A 2.506 2.506 0 0 0 93.513 18.63 A 1.995 1.995 0 0 0 92.07 19.23 A 2.039 2.039 0 0 0 91.655 19.818 A 2.077 2.077 0 0 0 91.47 20.7 Q 91.47 21.57 92.07 22.185 A 2.056 2.056 0 0 0 92.608 22.586 A 2.021 2.021 0 0 0 93.54 22.8 A 2.602 2.602 0 0 0 93.582 22.8 A 2.002 2.002 0 0 0 95.04 22.185 Q 95.64 21.57 95.64 20.7 A 2.506 2.506 0 0 0 95.64 20.673 A 1.995 1.995 0 0 0 95.04 19.23 A 1.993 1.993 0 0 0 94.33 18.766 Z"
                  id="5"
                  vectorEffect="non-scaling-stroke"
                  style={{ transform: `translateX(${visible ? 0 : '-70px'})` }}
                />
              </g>
            </svg>
            <style jsx>
              {`
                .hide-path {
                  fill: transparent;
                  stroke: transparent;
                  transform: translateX(-70px)
                }
                .show-path {
                  fill: #333;
                  stroke: #333;
                  transform: translateX(0)
                }
                path {
                  transition: all 0.4s;
                }
              `}
            </style>
          </a>
        </Link>

        <div>
          <button
            className="block lg:hidden border border-white flex items-center px-3 py-2 rounded text-black"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <ul
            className={`${
              isExpanded ? `block` : `hidden`
            } lg:flex flex-col lg:flex-row lg:items-center lg:justify-center text-sm w-full md:w-auto inline-flex`}
          >
            {MENU_ITEMS.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href} scroll={false}>
                  <a className="px-4 hover:text-gray-800">{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

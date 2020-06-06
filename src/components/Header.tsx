import Link from "next/link";
import { useState } from "react";

const MENU_ITEMS = [{
  label: 'Home',
  href: '/'
}, {
  label: 'About',
  href: '/about'
}, {
  label: 'Users',
  href: '/users'
}, {
  label: 'Users API',
  href: '/api/users'
}]

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="shadow-lg fixed right-0 left-0 bg-white z-10">
    <div className="px-8 py-5 md:px-20 flex justify-between items-center">
      <Link href="/" scroll={false}>
        <a className="font-bold text-2xl lg:text-4xl flex items-center">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">Name</span>
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
{MENU_ITEMS.map(({ href, label, isExternal }) => (
            <li key={`${href}${label}`}>
              {isExternal ? (
                <a
                  target="_blank"
                  href={href}
                  className="px-4 font-bold hover:text-gray-800"
                >
                  {label}
                </a>
              ) : (
                <Link href={href} scroll={false}>
                  <a className="px-4 font-bold hover:text-gray-800">
                    {label}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>

    // <header className="bg-teal-500">
    //   <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
    //     <div className="flex items-center">
    //       <img
    //         src="tailwind-logo.svg"
    //         className="mr-3 text-white w-10"
    //       />

    //       <Link href="/">
    //         <a className="font-bold text-white text-xl">
    //           Resume
    //         </a>
    //       </Link>
    //     </div>

    //     <button
    //       className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
    //       onClick={() => toggleExpansion(!isExpanded)}
    //     >
    //       <svg
    //         className="fill-current h-3 w-3"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Menu</title>
    //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //       </svg>
    //     </button>

    //     <ul
    //       className={`${
    //         isExpanded ? `block` : `hidden`
    //       } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
    //     >
    //       {MENU_ITEMS.map(navigationItem => (
    //         <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
    //           <Link href={navigationItem.route}>
    //             <a className="block text-white">{navigationItem.title}</a>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </header>
  );
}

export default Header;
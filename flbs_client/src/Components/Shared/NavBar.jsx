import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill, RiXingLine } from "react-icons/ri";
import { UseAuth } from "../../Context/AuthContext";

const userNavLinks = [
  {
    item: "Home",
    link: "/",
  },

  {
    item: "My Flights",
    link: "/",
  },
  {
    item: "My Tickets",
    link: "/",
  },
  {
    item: "About",
    link: "/",
  },
];

const NavBar = () => {
  const { user, logoutFunction } = UseAuth();
  const [toggle, setToggle] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [photourl, setPhotoUrl] = useState(user?.photoURL);

  const handleToggle = () => {
    setNavToggle(!navToggle);
  };

  // logout function
  const handleLogout = () => {
    logoutFunction();
  };

  // use effect to handle user photourl
  useEffect(() => {
    setPhotoUrl(user?.photoURL);
  }, [user, user?.photoURL]);

  return (
    <div className="navContainer   ">
      <div className="navWrapper bg-gray-300 m-auto flex justify-between py-2 px-6  ">
        {/* nav left starts  */}
        <div className="navLeft   flex justify-between items-center gap-x-8  ">
          {/* nav left logo starts  */}
          <div className="navLogo  ">
            <h1 className=" font-bold text-lg  ">nav logo </h1>
          </div>
          {/* nav left logo ends  */}

          {/* nav menu starts  */}
          <div className="navMenu  ">
            <div className="navLinks hidden md:flex  justify-center items-center      ">
              {userNavLinks.map((ele, ind) => (
                <NavLink
                  key={ind}
                  to={ele.link}
                  className={`  ${
                    userNavLinks.length - 1 === ind ? "mr-0" : "mr-5"
                  } relative group  text-base font-medium lg:text-lg   text-gray-800 dark:text-[#E4F1FF] hover:text-gray-950    `}
                >
                  {ele.item}

                  <span className="absolute -bottom-[.15rem] left-0 w-0 h-[.14rem] bg-blue-600 group-hover:w-full group-hover:transition-all"></span>
                </NavLink>
              ))}
            </div>
          </div>
          {/* nav menu ends  */}
        </div>
        {/* nav left ends  */}

        {/* nav right starts  */}
        <div className="navRight flex justify-between items-center gap-x-4   ">
          {/* user avatar starts  */}

          {user && (
            <div className="userAvatar  flex justify-center items-center self-center gap-x-1 ">
              <img
                class="w-10 h-10 rounded-full  "
                // src="https://i.ibb.co/pWh468H/Shutterstock-10472278t.jpg"
                src={photourl}
                alt="Rounded avatar"
              />
              <h1> {user?.displayName} </h1>
            </div>
          )}

          {/* user avatar ends  */}

          {user ? (
            <p
              className=" hidden px-3 py-2 text-xs font-semibold text-white bg-gray-600 rounded  md:block hover:bg-gray-700 lg:px-4 lg:text-sm cursor-pointer "
              onClick={() => handleLogout()}
            >
              Sign out
            </p>
          ) : (
            <Link
              to={`/login`}
              className="hidden px-3 py-2 text-xs font-semibold text-white bg-gray-600 rounded  md:block hover:bg-gray-700 lg:px-4 lg:text-sm"
            >
              Log in
            </Link>
          )}

          {/* menu items , links starts  */}
          <div className="relative flex mobileView md:hidden ">
            {/* menu icon  */}
            <div
              className="text-lg menuIcon xsm:text-xl sm:text-2xl "
              onClick={() => handleToggle()}
            >
              {/* {!toggle ? <RiMenu3Fill /> : <RiCloseFill />} */}
              {!navToggle ? <RiMenu3Fill /> : <RiCloseFill />}
            </div>
            {/* menu icon ends */}

            {/* menu list  */}

            {navToggle && (
              <div
                className={` menuList text-center py-2 bg-gray-700 dark:bg-gray-300 absolute transform -translate-x-1/2 -translate-y-1/2 -right-[5rem] top-[7.6rem] sm:top-[7.8rem]   w-[10rem]  `}
              >
                <div className="mb-4 menuItem ">
                  {userNavLinks.map((ele, ind) => (
                    <div key={ind} className={` text-base pb-3    `}>
                      <Link
                        to={ele.link}
                        className="cursor-pointer text-gray-50 dark:text-gray-900"
                        onClick={() => handleToggle()}
                      >
                        {ele.item}
                      </Link>
                    </div>
                  ))}

                  {user ? (
                    <p
                      className=" hidden px-3 py-2 text-xs font-semibold text-white bg-gray-600 rounded  md:block hover:bg-gray-700 lg:px-4 lg:text-sm "
                      // onClick={() => handleLogout()}
                      onClick={() => handleToggle()}
                    >
                      Sign out
                    </p>
                  ) : (
                    <Link
                      to={`/login`}
                      className="cursor-pointer  text-gray-50 dark:text-gray-900"
                      onClick={() => handleToggle()}
                    >
                      Log in
                    </Link>
                  )}
                </div>
              </div>
            )}
            {/* menu list  */}
          </div>
          {/* menu items , links ends  */}
        </div>
        {/* nav right ends  */}
      </div>
    </div>
  );
};

export default NavBar;

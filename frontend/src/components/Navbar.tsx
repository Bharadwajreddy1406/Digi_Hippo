import { Link } from "react-router-dom";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { NavItems } from "./NavItems";

export const Navbar = () => {
  return (
    <div className=" bg-transparent backdrop-blur-md sticky z-10 top-0 inset-x-0 h-16">
      <header className="relative ">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex-16 items-center">
              {/* Mobile nav here*/}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <Icons.logo className="h-10 w-10 my-3" />
                </Link>
              </div>
              <div className=" hidden lg:block lg:ml-8 lg:self-stretch">
                <NavItems/>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

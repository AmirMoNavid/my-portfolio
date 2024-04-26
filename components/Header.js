//next Link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-4 md:py-8">
          {/* logo */}
          <Link href={"/"}>
            <h2 className="h2 italic  font-light ">
              <span className="font-semibold md:text-4xl text-3xl ">Amir</span>
              Mohammad <span className="text-accent font-semibold ">navid</span>
            </h2>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

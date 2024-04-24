//Links
import Link from "next/link";

//Icons
import {
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiTelegramLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/amirmohammad-navid-8306552a6"}
        className="hover:text-accent transition-all duration-300"
      >
        {" "}
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://www.instagram.com/_amir__dev"}
        className="hover:text-accent transition-all duration-300"
      >
        {" "}
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://t.me/Edy_7"}
        className="hover:text-accent transition-all duration-300"
      >
        {" "}
        <RiTelegramLine />
      </Link>
    </div>
  );
};

export default Socials;

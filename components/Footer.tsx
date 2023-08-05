import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-between mt-5 text-black-100 border-t border-gray-100 sm:px-16 px-6 py-10 gap-10 flex-wrap items-start sm:items-center">
      <div className="flex flex-col gap-5 w-full sm:w-auto text-center  max-sm:items-center">
        <Image
          src="/logo.svg"
          alt="Car dealership logo"
          width={118}
          height={18}
          className="object-contain"
        />
        <ul className="flex flex-col gap-3 ">
          <li className=" text-gray-700 text-sm">CarDealer 2023</li>
          <li className="whitespace-nowrap text-gray-700 text-sm">
            All Rights Reserved &copy;
          </li>
        </ul>
      </div>
      <div className="flex gap-12 flex-wrap footer_links justify-end w-full sm:w-auto ">
        {footerLinks.map((footerLink, i) => {
          return (
            <div
              key={`footer-link-${i}`}
              className="text-sm footer_link justify-self-start w-full sm:w-auto max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center"
            >
              <h1 className="mb-3 font-extrabold text-md">
                {footerLink.title}
              </h1>
              <ul className="flex flex-col gap-2">
                {footerLink.links.map((link, index) => {
                  return (
                    <Link href={link.url}>
                      <li className="font-bold text-gray-400">{link.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 w-full">
        <p>@2023 CarDealer. All Rights Reserved.</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms Of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

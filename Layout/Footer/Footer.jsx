"use client";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import playMarketImg from "@/assets/images/play-market.png";
import appStoreImg from "@/assets/images/app-store.png";
import logo from "@/assets/images/logo.png";
import { navigations } from "@/utils/navigations";
// socials image
import instagramIcon from "@/assets/icons/instagram.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import telegramIcon from "@/assets/icons/telegram.svg";
const Footer = () => {
  const toast = useToast();

  const addToast = () => {
    toast({
      title: "coming soon",
      duration: 3000,
    });
  };

  return (
    <div className={"bg-gray py-12"}>
      <div className={"container"}>
        <div className={"flex items-center justify-between"}>
          {/*  logo */}
          <div>
            <Image src={logo} alt={"logo"} height={70} />
          </div>
          {/*   navigations */}
          <nav className={"flex items-center gap-4 flex-wrap"}>
            {navigations.map((link) => (
              <Link className={"text-black"} key={link.path} href={link.path}>
                {link.title}
              </Link>
            ))}
          </nav>
          {/* download play-market and app-store */}
          <div className={"flex items-center gap-2"}>
            {/* play market image */}
            <Image
              onClick={addToast}
              className={"cursor-pointer"}
              src={playMarketImg}
              alt={"play-market"}
              width={170}
              height={56}
            />
            {/* app store image */}

            <Image
              onClick={addToast}
              className={"cursor-pointer"}
              src={appStoreImg}
              alt={"app-store"}
              width={170}
              height={56}
            />
          </div>
        </div>
        <hr className={"my-5"} />
        <div className={"block sm:flex items-center justify-between"}>
          <p className={"text-center sm:text-start"}>
            &copy; Sofiya 2023 - 2024 All rights reserved
          </p>
          {/* socials */}
          <div
            className={
              "flex items-center gap-4 justify-center sm:justify-normal mt-5 sm:mt-0"
            }
          >
            <Link href={"/"}>
              <Image
                src={instagramIcon}
                alt={"instagram"}
                className={"h-[25px] w-[25px]"}
                height={25}
              />
            </Link>
            <Link href={"/"}>
              <Image src={facebookIcon} alt={"facebook"} height={25} />
            </Link>{" "}
            <Link href={"/"}>
              <Image src={telegramIcon} alt={"telegram"} height={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

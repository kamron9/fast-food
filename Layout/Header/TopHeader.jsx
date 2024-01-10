import logo from "@/assets/images/logo.png";
import Image from "next/image";
import searchIcon from "@/assets/icons/search.svg";
import locationIcon from "@/assets/icons/location.svg";
import callIcon from "@/assets/icons/call.svg";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className={"border-b border-primary py-1"}>
      <div
        className={"container flex items-center justify-between h-[70px] gap-5"}
      >
        {/*  logo */}
        <Link href={"/"}>
          <Image
            src={logo}
            draggable={false}
            alt={"logo"}
            width={80}
            priority
          />
        </Link>
        {/*  search */}
        <div
          className={
            "bg-gray  max-w-[300px] lg:max-w-[500px]  2xl:max-w-[700px] w-full flex items-center h-[45px] rounded px-2"
          }
        >
          <input
            type="text"
            className={"bg-transparent h-full w-full outline-none"}
            placeholder={"search"}
          />
          <Image src={searchIcon} draggable={false} alt={"search-icon"} />
        </div>
        {/*  connection */}
        <div className={"flex items-center gap-8"}>
          {/*  location */}

          <a
            href={
              "https://www.google.com/maps/place/Darital/@41.5599936,60.60505,17z/data=!3m1!4b1!4m6!3m5!1s0x41dfc93b02466799:0xeaa23fff9be8f49d!8m2!3d41.5599936!4d60.6076249!16s%2Fg%2F11c0vlkw1d?entry=ttu"
            }
            className={"flex items-center gap-1"}
          >
            <Image src={locationIcon} alt={"location-icon"} height={20} />
            <span className={"text-sm"}>Urgench</span>
          </a>
          {/* phone */}
          <a href={"tel:919111111"} className={"flex items-center gap-1"}>
            <Image src={callIcon} alt={"call icon"} height={20} />
            <b className={"inline-block text-sm"}>+998 (91) 911 11 11</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

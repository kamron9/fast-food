"use client";

import HamburgerIcon from "@/assets/images/fries-menu.png";
import { navigations } from "@/utils/navigations";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ToggleMenu = () => {
  return (
    <div className="block md:hidden">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Image src={HamburgerIcon} alt="hamburger-icon" width={35} />}
          variant="outline"
        />
        <MenuList className="mt-2 bg-white">
          {navigations.map((link) => (
            <Link href={link.path} key={link.path}>
              <MenuItem>{link.title}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default ToggleMenu;

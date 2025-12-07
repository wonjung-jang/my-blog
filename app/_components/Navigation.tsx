import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { map } from "es-toolkit/compat";
import { Github } from "lucide-react";

const MENU_LIST = [
  {
    title: "홈",
    url: "/",
  },
  {
    title: "개발",
    url: "/dev",
  },
  {
    title: "일상",
    url: "/daily",
  },
];

const LINK_LIST = [
  {
    icon: <Github />,
    url: "https://github.com/wonjung-jang",
  },
];

export default function Navigation() {
  return (
    <div className="fixed top-0 inset-x-0 bg-white px-4 py-2 border-b flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap font-bold gap-2">
          {map(MENU_LIST, (menu) => (
            <NavigationMenuLink key={menu.title} href={menu.url}>
              {menu.title}
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap font-bold gap-2">
          {map(LINK_LIST, (link) => (
            <NavigationMenuLink
              className="rounded-full cursor-pointer"
              href={link.url}
              target="_blank"
            >
              {link.icon}
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

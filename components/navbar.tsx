import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
  return (
    <div
      className={cn(
        "h-[4.5rem] w-[100vw]  fixed bg-white/40 dark:bg-black/40 backdrop-blur-md flex justify-between items-center gap-5 p-4 border-b-black/20 dark:border-white/20 border-b cursor-pointer"
      )}
    >
      <section className={cn("flex justify-between items-baseline gap-5")}>
        <Link href="/" legacyBehavior>
          <span className="font-semibold text-[1.5rem]">
            Xe
            <span className="font-normal">/UserInterface</span>
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Docs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/components" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Components
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/playground" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Playground
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/elements" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Elements
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
      <section>
        <ModeToggle />
      </section>
    </div>
  );
};

export default Navbar;

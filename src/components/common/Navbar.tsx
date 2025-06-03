// components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../ui/navigation-menu";

export default function Navbar() {
    return (
        <header id="header" className="font-body w-100 fixed text-center">
            <NavigationMenu viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                            Voile
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/history" className={navigationMenuTriggerStyle()}>
                            History
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
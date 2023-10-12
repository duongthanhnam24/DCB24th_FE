"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo({ children, her, boy, kid, className }) {
    let hrefs;
    if (her) hrefs = "/woman";
    else if (boy) hrefs = "/man";
    else if (kid) hrefs = "/kids";
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#6d3f0a]">
                        {children}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-[300px]">
                        <ul className=" grid gap-3 p-6 md:w-[400px] lg:w-[500px]  lg:grid-cols-[.75fr_1fr] ">
                            <li className="row-span-3 ">
                                <div
                                    className={`flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md ${className}`}
                                >
                                    <NavigationMenuLink asChild></NavigationMenuLink>
                                </div>
                            </li>

                            <ListItem
                                href={hrefs}
                                title="Introduction"
                                className="group hover:bg-[#8f5928] cursor-pointer"
                                subText="All Products"
                            >
                                Tất cả sản Phẩm
                            </ListItem>
                            <ListItem
                                href={hrefs}
                                title="Introduction"
                                className="group hover:bg-[#8f5928] cursor-pointer"
                                subText="Best Sell"
                            >
                                Những sản phẩm bán chạy nhất
                            </ListItem>
                            <ListItem
                                href={hrefs}
                                title="Introduction"
                                className="group hover:bg-[#8f5928] cursor-pointer"
                                subText="New Products"
                            >
                                Thiết kế mới trong năm nay
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = ({ children, className, subText, href }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    href={href}
                >
                    <div className="text-sm font-medium leading-none group-hover:text-white">
                        {subText}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-white">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};
ListItem.displayName = "ListItem";

"use client";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useClerk, useAuth } from "@clerk/nextjs";
import { Flame, Home, PlaySquare } from "lucide-react";
import Link from "next/link";

const items = [
    {
        id: "1",
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        id: "2",
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquare,
        auth: true,
    },
    {
        id: "3",
        title: "Trending",
        url: "/feed/trending",
        icon: Flame,
    },
];

export const MainSection = () => {
    const clerk = useClerk();
    const { isSignedIn } = useAuth();

    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} // TODO: Change to look at current pathname
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (!isSignedIn && item.auth) {
                                        return clerk.openSignIn();
                                    }
                                }}
                            >
                                <Link
                                    href={item.url}
                                    className="flex items-center gap-4"
                                >
                                    <item.icon />
                                    <span className="text-sm">
                                        {item.title}
                                    </span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};

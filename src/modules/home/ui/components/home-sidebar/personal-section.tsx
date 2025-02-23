"use client";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuth, useClerk } from "@clerk/nextjs";
import { History, ListVideo, ThumbsUp } from "lucide-react";
import Link from "next/link";

const items = [
    {
        id: "1",
        title: "History",
        url: "/playlists/history",
        icon: History,
        auth: true,
    },
    {
        id: "2",
        title: "Liked videos",
        url: "/playlists/liked",
        icon: ThumbsUp,
        auth: true,
    },
    {
        id: "3",
        title: "All playlists",
        url: "/playlists",
        icon: ListVideo,
        auth: true,
    },
];

export const PersonalSection = () => {
    const clerk = useClerk();
    const { isSignedIn } = useAuth();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>You</SidebarGroupLabel>
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

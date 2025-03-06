"use client";

import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOut, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StudioSidebarHeader from "./studio-sidebar-header";

export const StudioSidebar = () => {
    const pathname = usePathname();

    return (
        <Sidebar className="pt-16 z-40">
            <SidebarContent className="bg-background">
                <SidebarGroup>
                    <SidebarMenu>
                        <StudioSidebarHeader />
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                tooltip="Content"
                                asChild
                                isActive={pathname === "/studio"}
                            >
                                <Link href="/studio">
                                    <Video className="size-5" />
                                    <span className="text-sm">Content</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <Separator />
                        <SidebarMenuItem>
                            <SidebarMenuButton tooltip="Exit Studio" asChild>
                                <Link href="/">
                                    <LogOut className="size-5" />
                                    <span className="text-sm">Exit Studio</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

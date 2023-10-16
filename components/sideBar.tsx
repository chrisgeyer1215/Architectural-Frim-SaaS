"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, Settings, Plus, UserPlus, Search, BookPlus } from "lucide-react";

import { cn } from "@/lib/utils";
import Box from "@/components/box";
import Library from "@/components/help";



const Sidebar = () => {

    const pathname = usePathname();
    const router = useRouter();

    const onNavigate = (url: string,) => {
    
        return router.push(url);
    }

    const routes = [
      {
        icon: Home,
        label: 'Home',
        href: '/',
        pro: false,
      }, /*
      {
        icon: Search,
        label: 'Explore',
        href: '/explore',
        pro: false,
      }, */
      {
        icon: Plus,
        label: 'Contact',
        href: '/',
        pro: true,
      },/*
      {
        icon: BookPlus,
        label: 'Read',
        href: '/',
        pro: false,
      },
      {
        icon: UserPlus,
        label: 'Character',
        href: '/character/new',
        pro: true,
      },*/
      {
        icon: Settings,
        label: 'Help',
        href: '/',
        pro: false,
      },
    ];
  
    return (
        <div 
      className="flex flex-col h-full px-2"
    >
        <Box className="my-1">
          <div className="flex flex-col gap-y-1 px-5 py-4">
            {routes.map((route) => (
              <div onClick={()=> onNavigate(route.href,)} key={route.href} className={cn("text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
              pathname === route.href && "bg-primary/10 text-primary")}>
                <div className="flex flex-row gap-x-2 items-center flex-1">
                    <route.icon className="h-5 w-5" />
                    {route.label}
                </div>
              </div>
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto my-1 h-5/6">
          <Library />
        </Box>
    </div>
    );
}
 
export default Sidebar;
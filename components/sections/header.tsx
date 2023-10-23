import Link from "next/link"
import { Poppins } from "next/font/google";

import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { MobileSidebar } from "../mobileSideBar";
import Image from "next/image";


const font = Poppins({ weight: "600", subsets: ["latin"] });


const Header = () => {

    

    return (
      <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
        <div className='mx-10 max-w-7xl h-full flex items-center justify-between gap-2'>
          <div className="flex items-center">
            {/* Sidebar */}
            <MobileSidebar />
          
            {/* logo */}
            <Link href="/" className="flex flex-row items-center">
                      <div className="relative h-14 w-14 mr-3 md:block">
                          <Image fill alt="Logo" src="/logo-a.png" />
                      </div>
                      <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary hover:text-green-600", font.className)}>
                        Company Name
                      </h1>
            </Link>
          </div>
          <div className="flex flex-row mx-2">
            {/* logo */}
            <Link href="/about" className="flex mx-2">
                      <h1 className={cn("hidden md:block text-md md:text-md font-light text-primary hover:text-slate-700", font.className)}>
                        About
                      </h1>
            </Link>
            {/* logo */}
            <Link href="/contact" className="flex mx-2">
                      <h1 className={cn("hidden md:block text-md md:text-md font-light text-primary hover:text-slate-700", font.className)}>
                        Contact
                      </h1>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default Header

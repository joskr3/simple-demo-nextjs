import { Apple, Croissant, Menu, Milk, Shell } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const MenuHamburguesa = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><Menu /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Apple className="mr-2 h-4 w-4" />
            <Link href='/verduras' className=' text-md md:text-2xl'>
              Verduras
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Milk className="mr-2 h-4 w-4" />
            <Link href='/lacteos' className=' text-md md:text-2xl'>
              Lacteos
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Croissant className="mr-2 h-4 w-4" />
            <Link href='/panaderia' className=' text-md md:text-2xl'>
              Panaderia
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Shell className="mr-2 h-4 w-4" />
            <Link href='/otros' className=' text-md md:text-2xl'>
              Otros
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuHamburguesa

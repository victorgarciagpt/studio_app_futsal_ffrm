"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSidebar } from "./ui/sidebar";
import { MoreHorizontal } from "lucide-react";

export function UserNav() {
    const { state } = useSidebar();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 items-center">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://placehold.co/100x100.png" alt="Árbitro" data-ai-hint="person portrait" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        {state === 'expanded' && (
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-medium">Árbitro Ejemplo</span>
                            <span className="text-xs text-muted-foreground">arbitro@ffrm.es</span>
                        </div>
                        )}
                    </div>
                    {state === 'expanded' && <MoreHorizontal className="w-4 h-4" />}
                </div>
            </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Árbitro Ejemplo</p>
            <p className="text-xs leading-none text-muted-foreground">
              arbitro@ffrm.es
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profile">Perfil</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/feedback">Feedback y Soporte</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
            <Link href="/login">Cerrar sesión</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

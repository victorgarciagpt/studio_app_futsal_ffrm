"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, FileText, Trophy, UserCircle2, MessageCircle, LayoutDashboard } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Inicio" },
  { href: "/competitions", icon: Trophy, label: "Competiciones" },
  { href: "/protocols", icon: FileText, label: "Circulares y protocolos" },
  { href: "/manuals", icon: BookOpenCheck, label: "Manual de Actas" },
  { href: "/assistant", icon: MessageCircle, label: "Asistente IA" },
  { href: "/profile", icon: UserCircle2, label: "Perfil" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname.startsWith(item.href)}
            tooltip={item.label}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

// src/app/(app)/layout.tsx
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { FfrmLogo } from "@/components/icons/ffrm-logo";
import { AuthProvider } from "@/contexts/auth-context";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <div className="flex min-h-screen">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2">
                <FfrmLogo className="w-8 h-8"/>
                <span className="font-headline text-lg font-semibold">FFRM Hub</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <MainNav />
            </SidebarContent>
            <SidebarFooter>
              <UserNav />
            </SidebarFooter>
          </Sidebar>
          <div className="flex flex-col flex-1">
              <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4 md:hidden">
                <SidebarTrigger className="md:hidden" />
              </header>
            <SidebarInset>
              {children}
            </SidebarInset>
          </div>
        </div>
      </SidebarProvider>
    </AuthProvider>
  );
}
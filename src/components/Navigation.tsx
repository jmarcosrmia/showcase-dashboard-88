import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { Home, FileText, Settings, Shield } from "lucide-react";
import { useResponsive } from "@/hooks/use-responsive";
import logoAmoOutlet from "@/assets/logo-amo-outlet.png";

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/relatorios", label: "Relatórios", icon: FileText },
  { path: "/configuracoes", label: "Configurações", icon: Settings },
  { path: "/admin", label: "Administração", icon: Shield },
];

export const Navigation = ({ className }: NavigationProps) => {
  const { isMobile } = useResponsive();

  return (
    <header className={`bg-white border-b border-gray-200 px-2 sm:px-4 lg:px-6 py-4 sm:py-5 lg:py-6 ${className} overflow-x-hidden`}>
      <div className="flex items-center justify-between gap-2">
        {/* Left section - Logo, Title and Sidebar Toggle */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          {isMobile && <SidebarTrigger />}
          
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden">
            <div className="relative flex-shrink-0">
              <img 
                src={logoAmoOutlet} 
                alt="Amo Outlet" 
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
            <h1 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800 truncate">
              Amo Outlet - DRE Analytics
            </h1>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-1 ml-4 lg:ml-8 overflow-x-auto scrollbar-hide">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                     className={({ isActive }) =>
                        `flex items-center gap-1.5 lg:gap-2 px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                          isActive
                            ? "bg-primary text-white font-semibold"
                            : "text-gray-600 hover:text-primary hover:bg-gray-100"
                        }`
                     }
                  >
                    <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>
          )}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 flex-shrink-0">
          {/* User info - adaptive */}
          <div className="text-right hidden lg:block">
            <p className="text-xs lg:text-sm font-medium text-gray-800 truncate max-w-[100px] xl:max-w-[150px]">
              Administrador
            </p>
            <p className="text-xs text-gray-600 truncate max-w-[100px] xl:max-w-[150px]">
              admin@empresa.com
            </p>
          </div>

          {/* Mobile user indicator */}
          <div className="lg:hidden w-7 h-7 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center touch-target">
            <span className="text-xs font-semibold text-primary">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};
import { Book, Cog, Home, Plus } from "lucide-react";

export const routes = [
  {
    icon: Home,
    title: "Home",
    url: "/dashboard",
    bottom: false,
    external: false,
  },
  {
    icon: Plus,
    title: "Create",
    url: "/dashboard/create",
    bottom: false,
    external: false,
  },
  {
    icon: Book,
    title: "Docs",
    url: "https://ahmedsamy.dev",
    bottom: true,
    external: true,
  },
  {
    icon: Cog,
    title: "Settings",
    url: "/dashboard/settings",
    bottom: true,
    external: false,
  },
] as const;

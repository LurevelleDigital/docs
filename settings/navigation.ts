import { PageRoutes } from "@/lib/pageroutes"

export interface NavigationItem {
  title: string
  href: string
  external?: boolean
}

export const Navigations: NavigationItem[] = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Help",
    href: `/help`,
  },
]

export const GitHubLink = {
  href: "https://github.com/LurevelleDigital/docs",
}

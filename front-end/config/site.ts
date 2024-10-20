export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CineTracker",
  description: "Make beautiful websites regardless of your design experience.",
  userPageNavItems: [
    {
      label: "Movies",
      href: "/movies",
    },
    {
      label: "TV Shows",
      href: "/tv",
    },
    {
      label: "Movies",
      href: "/movies",
    },
  ],
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  userNavMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "My Lists",
      href: "/lists",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],
  links: {
    github: "https://github.com/stanyslas250/cinetracker",
  },
};

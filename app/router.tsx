import type { ComponentType, ReactNode } from "react";
import { createBrowserRouter, Outlet, type RouteObject } from "react-router";
import RootLayout from "./layout";
import NotFound from "./not-found";
import PracticeLayout from "./(pages)/(areas_of_practice)/layout";

/**
 * Every page on the site. The folders under app/(pages) still mirror the URLs
 * (the parenthesised ones are groups that add a layout but no path segment),
 * so a page's file is easy to find from its URL. Pages load on demand.
 */

type Layout = ComponentType<{ children: ReactNode }>;
const layout = (L: Layout) => (
  <L>
    <Outlet />
  </L>
);

type PageModule = { default: ComponentType };
const page = (load: () => Promise<PageModule>): Pick<RouteObject, "lazy"> => ({
  lazy: async () => ({ Component: (await load()).default }),
});

const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    // Shown while the first page's code loads; the pages are lazy.
    HydrateFallback: () => null,
    children: [
      { index: true, ...page(() => import("./(pages)/(home)/page")) },
      { path: "about", ...page(() => import("./(pages)/about/page")) },
      { path: "contact", ...page(() => import("./(pages)/contact/page")) },
      { path: "disclaimer", ...page(() => import("./(pages)/disclaimer/page")) },
      {
        element: layout(PracticeLayout),
        children: [
          {
            path: "employee_discrimination",
            ...page(() => import("./(pages)/(areas_of_practice)/employee_discrimination/page")),
          },
          {
            path: "whistleblower",
            ...page(() => import("./(pages)/(areas_of_practice)/whistleblower/page")),
          },
          {
            path: "wage_hour_issues",
            ...page(() => import("./(pages)/(areas_of_practice)/wage_hour_issues/page")),
          },
          {
            path: "family_medical_leave",
            ...page(() => import("./(pages)/(areas_of_practice)/family_medical_leave/page")),
          },
          {
            path: "other_practices",
            ...page(() => import("./(pages)/(areas_of_practice)/other_practices/page")),
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

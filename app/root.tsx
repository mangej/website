import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { type LinksFunction } from "@remix-run/node";

import tailwindStyleSheetUrl from "./styles/tailwind.css?url";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyleSheetUrl }];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-purple-600">
        <div className=" max-w-5xl mx-auto">
          <header className="border-b-2 border-b-yellow-300 text-yellow-400 py-4">
            <nav className="flex flex-row justify-between items-center">
              <h3 className=" font-black text-2xl">Manges website</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="flex flex-row gap-4 py-4">
            <main className="flex-1">{children}</main>
            <div className="w-56 flex flex-col gap-6 ">
              <div className="border-yellow-400 border">
                <h4 className="font-bold text-purple-600 bg-yellow-400 p-2">
                  Poll
                </h4>
                <div className="p-2 bg-yellow-200">
                  Do you like the new design?
                </div>
              </div>
              <div>
                <h4 className="font-bold text-purple-600 bg-yellow-400 p-2">
                  Bannerbyte
                </h4>
                <div className="p-2 bg-yellow-200">
                  <div className="py-2 px-2 bg-green-500 text-green-950">
                    Jojjeman
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

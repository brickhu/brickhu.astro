
import React from "react";
import Site from "../../site.config.json"
import ThemeSawp from "./theme-swap";

export default function Header() {
  return (
    <div class="sticky top-0 z-30 ">
      <header className="navbar bg-opacity-90 backdrop-blur transition-all w-full">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">{Site.name}</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 invisible md:visible">
            {Site.menus.map((i)=>(
              <li key={i.path}><a href={i.path}>{i.name}</a></li>
            ))}
          </ul>
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
          <ThemeSawp></ThemeSawp>
        </div>
      </header>
    </div>
  );
}
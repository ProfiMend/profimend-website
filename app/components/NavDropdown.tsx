import { useState } from "react";

export default function NavDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-slate-900 flex items-center gap-1 focus:outline-none"
      >
        Features
        <svg
          className="h-4 w-4 mt-[1px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`absolute ${open ? "block" : "hidden"} group-hover:block top-full left-0 mt-2 w-44 rounded-xl bg-white shadow-lg ring-1 ring-slate-200 py-2 transition-all`}
      >
        <a href="#" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Products</a>
        <a href="#" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Pricing</a>
        <a href="#" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">CashFlow</a>
        <a href="#" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Budget</a>
        <a href="#" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Plan</a>
      </div>
    </div>
  );
}

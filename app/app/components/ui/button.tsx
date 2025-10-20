import * as React from "react";
export function Button({ className="", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium " +
        "border border-transparent bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 " +
        className
      }
      {...props}
    />
  );
}

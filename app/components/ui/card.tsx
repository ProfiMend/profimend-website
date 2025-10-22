import * as React from "react";
export function Card({className="", ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={"rounded-2xl border border-slate-200 bg-white " + className} {...props} />;
}
export const CardHeader = (p: any) => <div className={"p-4 " + (p.className||"")} {...p} />;
export const CardTitle  = (p: any) => <div className={"text-base font-semibold " + (p.className||"")} {...p} />;
export const CardContent= (p: any) => <div className={"p-4 " + (p.className||"")} {...p} />;

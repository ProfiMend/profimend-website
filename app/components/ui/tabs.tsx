import * as React from "react";

export function Tabs({value, onValueChange, children}:{value:string,onValueChange:(v:string)=>void,children:React.ReactNode}) {
  return <div data-value={value}>{children}</div>;
}
export function TabsList({className="", children}:{className?:string,children:React.ReactNode}) {
  return <div className={"inline-grid gap-2 rounded-xl border p-1 " + className}>{children}</div>;
}
export function TabsTrigger({value, children}:{value:string,children:React.ReactNode}) {
  return (
    <button
      onClick={(e)=> {
        const tabs = (e.currentTarget.closest("[data-value]") as HTMLElement);
        const setter = (tabs as any).__setTabs;
        setter?.(value);
      }}
      className="rounded-lg px-3 py-1.5 text-sm hover:bg-slate-50 data-[active=true]:bg-sky-600 data-[active=true]:text-white"
    >
      {children}
    </button>
  );
}
export function TabsContent({value, children}:{value:string,children:React.ReactNode}) {
  return <div data-tab-content={value}>{children}</div>;
}
export function useBindTabs(ref: React.RefObject<HTMLDivElement>, setValue:(v:string)=>void) {
  React.useEffect(()=>{
    if(ref.current) (ref.current as any).__setTabs = setValue;
  },[ref,setValue]);
}

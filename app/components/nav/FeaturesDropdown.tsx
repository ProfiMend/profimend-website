import { Link } from "@remix-run/react";

export default function FeaturesDropdown() {
  return (
    <div className="p-2">
      <Link to="/budget" className="block p-2 hover:bg-accent rounded">Budget</Link>
      <Link to="/goals" className="block p-2 hover:bg-accent rounded">Goals</Link>
      <Link to="/cashflow" className="block p-2 hover:bg-accent rounded">Cashflow</Link>
    </div>
  );
}
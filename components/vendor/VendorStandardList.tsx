import { vendorStandards } from "@/data/vendorStandards";

export function VendorStandardList() {
  return (
    <ol className="standard-list">
      {vendorStandards.map((standard, index) => (
        <li key={standard.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{standard.title}</h3>
          <p>{standard.description}</p>
        </li>
      ))}
    </ol>
  );
}

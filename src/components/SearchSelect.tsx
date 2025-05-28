"use client";
import { NextPage } from "next";

type SearchSelectProps = {
  label: string;
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectSearch({
  label,
  name,
  options,
  onChange,
}: SearchSelectProps) {
  return (
    <div className="mb-4">
      <select
        name={name}
        id={name}
        onChange={onChange}
        className="ml-8  w-60 bg-white  border-1 border-purple shadow rounded-md px-4 py-2 focus:outline-none text-[#8A8A8A]"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
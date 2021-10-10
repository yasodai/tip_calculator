import clsx from "clsx";
import React, { cloneElement } from "react";
export function TextField({ id, label, icon, value, min }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-cyan-label font-bold">
        {label}
      </label>
      <div className="relative flex items-center ">
        <input
          className={clsx(
            "w-full bg-cyan-text-field p-2",
            "text-right text-cyan-darker text-2xl font-bold",
            "outline-none focus:ring ring-cyan-focus"
          )}
          type="number"
          id={id}
          name={id}
          defaultValue={value}
          min={min}
        />
        {icon && cloneElement(icon, { className: "absolute w-4 mx-4 my-2" })}
      </div>
    </div>
  );
}

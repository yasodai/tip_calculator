import clsx from "clsx";
import React, { Children, cloneElement, useRef } from "react";

export function RadioGroup({ id, children, label }) {
  return (
    <fieldset className="flex flex-col">
      <legend className="text-cyan-label font-bold pb-2">{label}</legend>
      <div className="grid grid-cols-2 gap-4">
        {Children.map(children, (child) => cloneElement(child, { name: id }))}
      </div>
    </fieldset>
  );
}
export function Radio({ label, value, name, custom, checked }) {
  const ref = useRef(null);

  const onFocus = () => {
    ref.current?.focus();
  };

  return (
    <div>
      <input
        onChange={custom && onFocus}
        type="radio"
        name={name}
        id={value}
        value={value}
        className="sr-only peer"
        defaultChecked={checked}
      />
      <label
        htmlFor={value}
        className={clsx(
          "block  py-3 w-full rounded-md",
          "text-center  text-2xl font-bold",
          custom
            ? "peer-checked:hidden"
            : "peer-checked:bg-cyan-focus peer-checked:text-cyan-darker",
          custom
            ? "bg-cyan-text-field text-cyan-label"
            : "bg-cyan-darker text-white"
        )}
      >
        {label}
      </label>

      {custom && (
        <div className="hidden peer-checked:flex flex-col gap-2">
          <label id="custom" className="text-cyan-label font-bold"></label>
          <div className="relative flex items-center ">
            <input
              className={clsx(
                "w-full bg-cyan-text-field p-2",
                "text-right text-cyan-darker text-2xl font-bold",
                "outline-none focus:ring ring-cyan-focus"
              )}
              type="number"
              ref={ref}
              id="custom"
              name="custom"
            />
          </div>
        </div>
      )}
    </div>
  );
}

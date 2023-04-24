import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";

export const InputBox = ({ value, setValue, placeholder, list, width }) => {
  const [query, setQuery] = useState("");
  const filteredList =
    query === ""
      ? list
      : list.filter((items) =>
          items
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className={`font-mono w-${width}`}>
      <Combobox value={value} onChange={setValue}>
        <div className="bg-gray-400 row-flex cursor-default overflow-hidden rounded-lg text-left">
          <Combobox.Input
            className={`bg-gray-400 w-${width-6} p-2 text-sm text-gray-900 placeholder-gray-700 placeholder-opacity-40`}
            displayValue={(value) => value}
            onChange={(event) => {
              setQuery(event.target.value);
              setValue(event.target.value);
            }}
            placeholder={placeholder}
          />
          <Combobox.Button className="">
            <BsChevronExpand
              className="h-5 w-5 text-gray-600"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className={`absolute mt-1 text-xs max-h-60 w-${width} overflow-auto border-gray-600 border-2 rounded-md bg-gray-400 py-1 scrollbar-hide`}>
            {filteredList.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredList.map((value, index) => (
                <Combobox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 ${
                      active
                        ? "bg-gray-600 text-purple-100 rounded-lg mx-1"
                        : "text-gray-900"
                    }`
                  }
                  value={value}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate "font-normal"`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 right-0 flex items-center ${
                            active ? "text-white" : "text-purp-200"
                          }`}
                        >
                          <BsCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

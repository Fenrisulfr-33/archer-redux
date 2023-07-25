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
    <div className={`font-mono w-${width} border-2 rounded-lg border-purple-400`}>
      <Combobox value={value} onChange={setValue}>
        <div className="bg-gray-400 row-flex cursor-default overflow-hidden rounded-lg text-left">
          <Combobox.Input
            className={`bg-gray-900 w-${width-6} p-2 text-sm text-gray-300 placeholder-gray-300 placeholder-opacity-30`}
            displayValue={(value) => value}
            onChange={(event) => {
              setQuery(event.target.value);
              setValue(event.target.value);
            }}
            placeholder={placeholder}
          />
          <Combobox.Button className="bg-gray-900">
            <BsChevronExpand
              className="h-5 w-5 text-gray-300"
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
          <Combobox.Options className={`absolute mt-1 phone:test-base max-h-60 w-fit overflow-auto border-purple-400 border-2 rounded-lg bg-gray-900 scrollbar-hide`}>
            {filteredList.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none text-gray-300 p-2">
                Nothing found.
              </div>
            ) : (
              filteredList.map((value, index) => (
                <Combobox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none ${
                      active
                        ? "bg-purple-300 text-gray-800 font-bold border border-gray-700 rounded-lg"
                        : "text-gray-300 bg-gray-700"
                    }`
                  }
                  value={value}
                >
                  {/* {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute right-0 flex items-center ${
                            active ? "text-white" : "text-purp-200"
                          }`}
                        >
                          <BsCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )} */}
                  {value}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";

export const CustomBox = ({ selected, setSelected, placeholder, list }) => {
  const [query, setQuery] = useState("");

  const filteredList =
    query === ""
      ? list
      : list.filter((value) =>
          value.game
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className={`relative`}>
      <Combobox value={selected} onChange={setSelected}>
        <div className="bg-gray-900 row-flex justify-between cursor-default border-2 border-purple-100 overflow-hidden rounded-md ">
          <Combobox.Input
            className={`bg-gray-900 w-[98%] p-2 text-sm text-gray-300 placeholder-gray-300 rounded-md placeholder-opacity-30`}
            displayValue={(value) => value.game}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            placeholder={placeholder}
          />
          <Combobox.Button className="bg-gray-800 rounded-md m-1 w-[2%]">
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
          <Combobox.Options
            className={`absolute w-full mt-1 phone:test-base max-h-60 overflow-auto border-purple-400 border-2 rounded-md bg-gray-900 scrollbar-hide`}
          >
            {filteredList.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none text-gray-300 p-2">
                Nothing found.
              </div>
            ) : (
              filteredList.map((value) => (
                <Combobox.Option
                  key={value.query}
                  className={({ active }) =>
                    ` cursor-default select-none ${
                      active
                        ? "bg-purple-300 text-gray-800 font-bold border border-gray-700 rounded-lg"
                        : "text-gray-300 bg-gray-700"
                    }`
                  }
                  value={value}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate`}>{value.game}</span>
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

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { typeColors } from "../variables/typeColors";

export default function PokedexFilterInputBox({
  value,
  setValue,
  placeholder,
  list,
  isType,
}) {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? list
      : list.filter((items) =>
          items
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="static w-full ">
      <Combobox value={value} onChange={setValue}>
        <div className="flex flex-row w-1/4  cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md border-2 border-purple-400">
          <Combobox.Input
            className="w-full border-none py-2 pl-2 text-xxs phone:text-sm bg-gray-800 text-gray-300 font-extrabold placeholder-gray-200 placeholder-opacity-40"
            displayValue={(value) => value}
            placeholder={placeholder}
            onChange={(event) => {
              setQuery(event.target.value);
              setValue(event.target.value);
            }}
          />
          <Combobox.Button className="inset-y-0 right-0 flex items-center pr-2 bg-gray-800 placeholder-gray-200">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute inset-y-0 right-0 h-40 w-2/3 overflow-auto scrollbar-hide rounded-md bg-gray-900 py-1 text-xxs phone:text-sm shadow-lg">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-300">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((item, index) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default font-bold select-none w-3/4 text-center ${
                        active
                          ? isType
                            ? `${typeColors[item.toLowerCase()]} border-2 border-gray-200`
                            : "bg-purple-100 text-white"
                          : isType
                            ? `${typeColors[item.toLowerCase()]}`
                            : 'bg-gray-700 text-purple-100'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-bold" : ""
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 right-0 flex items-center pr-2 ${
                              active ? "text-white" : "text-gray-900"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

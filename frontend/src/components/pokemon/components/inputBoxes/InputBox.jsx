import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { BsChevronExpand } from 'react-icons/bs';
import { BsCheck } from 'react-icons/bs';
import { movesDropDownScarletViolet } from '../movesDropDowns/movesDropDownScareletViolet';

export const InputBox = ({ value, setValue, placeholder, list }) => {
  const [query, setQuery] = useState('')
  const filteredMoves =
    query === ''
      ? list
      : list.filter((items) =>
      items
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-72">
      <Combobox value={value} onChange={setValue}>
        <div className="absolute">
          <div className=" w-full cursor-default overflow-hidden rounded-lg bg-gray-500 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(value) => value}
              onChange={(event) => {
                setQuery(event.target.value)
                setValue(event.target.value)
              }}
              placeholder={placeholder}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex pt-2 pr-2">
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
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-400 py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredMoves.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredMoves.map((value, index) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default font-mono select-none py-2 pl-4  ${
                        active ? 'bg-gray-600 text-purp-100 rounded-lg mx-1' : 'text-gray-900'
                      }`
                    }
                    value={value}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {value}
                        </span>
                        {selected ? (<span className={`absolute inset-y-0 right-0 flex items-center pr-8 ${active ? 'text-white' : 'text-purp-200'}`}>
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
        </div>
      </Combobox>
    </div>
  )
}
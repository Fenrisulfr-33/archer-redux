import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import { colors } from '../variables/typeColors';

const styles = {
  type: "col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75",
}

export default function MoveModal({ move }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  

  return (
    <>
      <>
        <button
          type="button"
          onClick={openModal}
          className=""
        >
          {move.name.english}
        </button>
      </>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-center"
                  >
                    {move.name.english}
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className='flex justify-between'>
                      <h2>Type:</h2>
                      <p className={`${styles.type} ${colors[move.type.toLowerCase()]}`}>{move.type}</p>
                    </div>
                    <div className='flex justify-between'>
                      <h2>Description:</h2>
                      <p className={''}>{move.description['sword-shield']}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {move.effect.full}
                    </p>
                    <p className="text-sm text-gray-500">
                      {move.effect.shortEffect}
                    </p>
  
                    <p className="text-sm text-gray-500">
                      Category: {move.category}
                    </p>
                    <p className="text-sm text-gray-500">
                      Contest: {move.contest}
                    </p>
                    <p className="text-sm text-gray-500">
                      PP: {move.pp}
                    </p>
                    <p className="text-sm text-gray-500">
                      Generation: {move.generation}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
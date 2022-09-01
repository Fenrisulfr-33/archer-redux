import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { colors } from "../variables/typeColors";



export default function MoveModal({ move: { _id, name, type, category, contest, pp, power, accuracy, contact, generation, target, effect: { shortEffect }, priority } }) {
  const styles = {
    typec: " rounded-md bg-opacity-60 w-1/4 text-center",
    test: ''
  },{test, typec} = styles;

  let [isOpen, setIsOpen] = useState(false);
  const rows = [
    {header: 'Type', value: type},
    {header: 'Cat.', value: category},
    {header: 'PP', value: pp},
    {header: 'Power', value: power},
    {header: 'Acc.', value: accuracy},
    {header: 'Contact', value: contact},
    {header: 'Gen', value: generation},
    {header: 'Target', value: target},
    {header: 'Priority', value: priority},
    {header: 'Contest', value: contest},
    {header: 'Short Eff.', value: shortEffect},
  ];
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <>
        <button type="button" onClick={openModal} className="">
          {name.english}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all font-mono">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-extrabold leading-6 text-purple-300 flex justify-center"
                  >
                    {name.english}
                  </Dialog.Title>
                  <div className="mt-2 space-y-1">
                    {rows.map((row) => (
                      <div className="flex justify-between text-gray-300">
                        <h2 className={'font-bold'}>{row.header}</h2>
                        {row.header === 'Type' ? <p className={`${typec} ${colors[row.value.toLowerCase()]} `}>{row.value}</p> : row.value ? <p className={test}>{row.value}</p> : <p className={test}>--</p>}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
  );
}

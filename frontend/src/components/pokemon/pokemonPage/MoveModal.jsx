import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { colors } from "../variables/typeColors";

export default function MoveModal({
  move: {
    id,
    name,
    type,
    category,
    contest,
    pp,
    power,
    accuracy,
    contact,
    generation,
    target,
    priority,
    shortEffect,
  },
}) {
  let [isOpen, setIsOpen] = useState(false);
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
          {name}
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
                <Dialog.Panel className="w-1/2 flex flex-col border-2 items-center space-y-2 border-purple-100 transform overflow-hidden rounded-lg bg-gray-900 p-6 text-left align-middle shadow-xl transition-all font-mono">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-extrabold leading-6 text-purple-300 flex "
                  >
                    {name}
                  </Dialog.Title>
                  <div className="bg-gray-800 font-lg w-1/2 p-2 rounded space-y-1">
                    <InfoRow title={"Type:"} info={type} type={true} />
                    <InfoRow title={"Cat."} info={category} />
                    <InfoRow title={"PP."} info={pp} />
                    <InfoRow title={"Power"} info={power} />
                    <InfoRow title={"Acc."} info={accuracy} />
                    <InfoRow title={"Contact"} info={contact} />
                    <InfoRow title={"Gen."} info={generation} />
                    <InfoRow title={"Target"} info={target} />
                    <InfoRow title={"Priority"} info={priority} />
                    <InfoRow title={"Contest"} info={contest} />
                    <InfoRow title={"Effect"} info={shortEffect} />
                    <InfoRow title={'Link'} info={name} move={true} moveId={id}/>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

const InfoRow = ({ title, info, type, move, moveId }) => (
  <div className="flex flex-row p-1 border-b border-purple-300 text-gray-100">
    <div className={`w-1/2 font-bold`}>{title}</div>
    {move ? (
      <Link
        href={`/pokemon/moves/${moveId}`}
        className={`${move ? "italic" : null}`}
        passHref
      >
        {info}
      </Link>
    ) : (
      <div className={`w-1/2 ${type ? `${colors[info.toLowerCase()]} text-center rounded` : ''}`}>{info}</div>
    )}
  </div>
);

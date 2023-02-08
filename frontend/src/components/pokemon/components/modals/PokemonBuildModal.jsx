import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import PokemonBuild from "../pokemonBuild/pokemonBuild";
import { colors } from "../../variables/typeColors";

export default function PokemonBuildModal({     
    id,
    name,
    ability,
    type,
    nature,
    heldItem,
    terraType,
    role,
    notes,
    moves = [],
    otherMoves = [],
    evs,
 }) {
  const styles = {
    typec: " rounded-md bg-opacity-60 w-1/4 text-center",
    test: ''
  },{test, typec} = styles;

  const [isOpen, setIsOpen] = useState(false);
  const  closeModal = () => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  }

  return (
    <>
      <>
        <button type="button" onClick={openModal} className={'test-button'}>
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
                <Dialog.Panel className="w-max max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all font-mono">
                    <PokemonBuild 
                        id={id}
                        name={name} 
                        type={type}
                        ability={ability}
                        terraType={terraType}
                        nature={nature}
                        heldItem={heldItem}
                        role={role}
                        moves={moves}
                        otherMoves={otherMoves}
                        evs={evs}
                        notes={notes}
                    />
                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center test-button"
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

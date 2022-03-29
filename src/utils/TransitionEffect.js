import { Transition } from '@headlessui/react'

export default function TransitionEffect({ status, children }) {
  return (
    <Transition
      appear={true}
      show={!status}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  )
}

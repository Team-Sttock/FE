import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { type Control, Controller } from 'react-hook-form'

import { classNames } from '@/utils/classNames'

interface Option {
  value: any
  label: string
}

interface ListBoxProps {
  name: string
  control: Control<any>
  options: Option[]
}

export default function ListBox({ name, control, options }: ListBoxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="w-full relative">
          <Listbox value={value} onChange={onChange}>
            <Listbox.Button
              className={classNames(
                'relative w-full h-10 p-3 text-md text-dark-brown border border-beige',
                'focus-within:outline focus-within:outline-1 focus-within:outline-light-brown',
                'flex items-center justify-center'
              )}
            >
              <span className="inline-flex">
                {options.filter((option) => option.value === value)[0].label}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-dark-brown"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto bg-white text-base shadow-lg ring-1 ring-light-brown focus:outline-none">
                {options.map((option, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      classNames(
                        'relative cursor-default select-none py-2 px-4 text-dark-brown',
                        'flex items-center justify-center',
                        active ? 'bg-ivory' : ''
                      )
                    }
                    value={option.value}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-dark-brown">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
        </div>
      )}
    ></Controller>
  )
}

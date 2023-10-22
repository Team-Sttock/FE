import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export interface SortOptionProps {
  id: number
  label: string
  value: string
}

// 드롭다운 메뉴 컴포넌트
interface DropdownProps {
  items: SortOptionProps[]
  onSelect: (value: string) => void
  title: string
  selectedValue: string | string[] | undefined
  filterType: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  onSelect,
  title,
  selectedValue,
}) => {
  return (
    <>
      <Menu as="div" className="relative">
        <Menu.Button
          className={`flex items-center justify-center w-fit h-fit px-4 py-1.5 text-sm rounded-md hover:bg-beige ${
            selectedValue
              ? 'bg-light-brown text-ivory'
              : 'bg-ivory text-light-brown'
          }`}
        >
          <img
            src={`/icons/down-arrow${selectedValue ? '-selected' : ''}.svg`}
            alt="down-arrow"
            className="w-3 h-3 mr-2"
          />
          <span>{title}</span>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flex flex-col border-2 space-y-2 w-32 p-4 mt-2 bg-white border-ivory rounded-lg text-dark-brown shadow-md absolute">
            {items.map((item) => (
              <Menu.Item key={item.id}>
                {() => (
                  <button
                    className={`${
                      selectedValue === item.value ? 'text-light-brown ' : ''
                    } 
                      w-full hover:text-light-brown `}
                    onClick={() => {
                      onSelect(item.value)
                    }}
                  >
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

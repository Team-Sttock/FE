import { Dialog, Transition } from '@headlessui/react'
import { useOverlay } from '@toss/use-overlay'
import { Fragment } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  btnText?: string
  onConfirm: () => void
  showCloseBtn?: boolean
  closeBtnText?: string
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  btnText,
  onConfirm,
  showCloseBtn,
  closeBtnText,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        {/* Dim */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 pb-4 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl text-dark-brown font-medium leading-6 "
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-md text-light-brown">{description}</p>
                </div>

                <div className="mt-6 flex flex-row justify-end space-x-2">
                  {showCloseBtn && (
                    <button
                      type="button"
                      className="inline-flex min-w-[80px] justify-center rounded-sm border border-beige bg-ivory  px-4 py-1.5 text-md font-medium text-light-brown focus:outline-none focus-visible:ring-1 focus-visible:ring-beige focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      {closeBtnText ?? '취소'}
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex min-w-[80px]  justify-center rounded-sm border border-transparent bg-light-brown px-4 py-1.5 text-md font-medium text-ivory hover:bg-dark-brown focus:outline-none focus-visible:ring-1 focus-visible:ring-light-brown focus-visible:ring-offset-2"
                    onClick={() => {
                      onConfirm()
                    }}
                  >
                    {btnText ?? '확인'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export const useModal = ({
  title,
  description,
  btnText,
  showCloseBtn,
  closeBtnText,
}: Pick<
  ModalProps,
  'title' | 'description' | 'btnText' | 'closeBtnText' | 'showCloseBtn'
>) => {
  const overlay = useOverlay()

  const open = async () => {
    return await new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <Modal
          isOpen={isOpen}
          title={title}
          description={description}
          btnText={btnText}
          onClose={() => {
            resolve(false)
            close()
          }}
          onConfirm={() => {
            resolve(true)
            close()
          }}
          showCloseBtn={showCloseBtn}
          closeBtnText={closeBtnText}
        ></Modal>
      ))
    })
  }

  return { open }
}

import { Fragment, useState } from 'react'

import Modal from '@/components/Modal'

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="제목입니다."
        description="내용입니다. 내용입니다."
        showCloseBtn
      ></Modal>
    </>
  )
}

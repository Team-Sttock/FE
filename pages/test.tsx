import { useModal } from '@/components/Modal'

export default function MyModal() {
  const { open } = useModal({
    title: '제목입니다.',
    description: '설명입니다.',
    showCloseBtn: true,
  })

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={async () => {
            console.log(await open())
          }}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>
    </>
  )
}

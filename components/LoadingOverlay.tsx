export default function LoadingOverlay() {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-50 bg-black bg-opacity-10 flex items-center justify-center">
      <div className="animate-spin w-10 h-10 border-4 border-neutral-400 border-t-neutral-800 rounded-full"></div>
    </div>
  )
}

import { Noto_Sans } from 'next/font/google'
import { useRouter } from 'next/router'

import Button from '@/components/Button'
import { useModal } from '@/components/Modal'
import { useDeleteUser } from '@/hooks/user/useDeleteUser'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

// const leaveReason = {
//   1: '서비스 이용에 불편함을 겪었습니다.',
//   2: '스똑의 기능을 이용하기 어렵습니다.',
//   3: '스똑의 디자인이 마음에 들지 않습니다.',
//   4: '스똑의 기능이 마음에 들지 않습니다.',
//   5: '스똑의 가격이 마음에 들지 않습니다.',
//   6: '스똑의 기타 이유로 인해 이용을 중단하고 싶습니다.',
// }

export default function Page() {
  const router = useRouter()

  const { open } = useModal({
    title: '탈퇴 완료',
    description: '안녕하가세요.',
  })

  const { mutateAsync, isPending } = useDeleteUser()

  const onClick = async () => {
    try {
      await mutateAsync()
      await open()
      await router.push('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <main className="m-auto max-w-5xl w-full px-4 mb-10">
        <header className="mt-10 mb-4 w-full py-2">
          <div
            className={classNames(
              'space-y-2 w-full mb-2',
              'sm:space-x-4 sm:space-y-0 sm:flex sm:justify-start sm:items-center'
            )}
          >
            <h1
              className={classNames(
                'md:text-2xl text-xl font-bold text-dark-brown',
                NotoSans.className
              )}
            >
              회원탈퇴
            </h1>
          </div>
          <hr className="relative w-full border-1 border-beige" />
        </header>
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="w-full max-w-3xl m-auto py-8 px-7 flex-col justify-center items-center border border-beige bg-ivory space-y-2">
            <span className="font-bold text-lg text-dark-brown">안내사항</span>
            <div className="flex flex-col items-start text-left gap-2 text-sm text-light-brown ">
              <p>
                스똑 이용 중 있었던 불편한 점이나 개선할 점을 알려주시면
                반영하여 더 좋은 서비스로 다시 찾아 뵙겠습니다.
              </p>
              <p>아래의 내용을 확인해주시기 바랍니다. </p>
              <p>
                1. 개인정보처리방침에 의거해 서비스 이용기록 및 저장된 재고현황
                등의 모든 정보가 삭제되며 복구할 수 없습니다.
              </p>
              <p>
                2. 탈퇴 신청한 계정의 이메일로 즉시 재가입이 불가능합니다. 단,
                탈퇴일 이후 3개월이 지나면 가입할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="pt-4 flex justify-center items-center space-x-4 w-full">
            <Button
              type="button"
              className="py-2 px-6"
              onClick={() => {
                router.back()
              }}
            >
              돌아가기
            </Button>
            <Button
              type="button"
              className="py-2 px-6"
              isSelected
              isLoading={isPending}
              onClick={onClick}
            >
              탈퇴하기
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

import { Line } from 'rc-progress'

import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* 메인1-1 - Sttock */}
      <section>
        <div className="relative">
          <img
            src="/main/main-img-1.webp"
            alt="main-img-1"
            className=" w-screen md:h-[500px] sm:h-full object-cover"
          />

          <div className=" container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="font-kimjungchul font-bold text-md md:text-lg text-ivory">
              스스로 똑똑하게,
            </h2>
            <h1 className=" font-kimjungchul font-bold  text-4xl md:text-6xl  text-ivory uppercase">
              sttock
            </h1>
          </div>
        </div>
      </section>
      {/* 메인1-2 - 잊고사세요 */}
      <section>
        <div className="min-h-[250px] md:h-[350px] bg-ivory flex flex-col items-center justify-center text-center">
          <h1 className=" p-4 mb-6 font-hahmlet text-xl sm:text-2xl md:text-4xl  text-light-brown font-extralight">
            &quot;잊고사세요, 스똑이 알려드릴게요. &quot;
          </h1>
          <p className="font-nexon text-md sm:text-lg  md:text-2xl text-dark-brown font-thin ">
            구매주기계산부터 <br /> 재구매일확인까지 <br /> 스똑에서 해결할 수
            있습니다.
          </p>
        </div>
      </section>

      {/* 메인2 - 이번주 구매 */}
      <section>
        <div className="flex flex-wrap bg-beige">
          <div className="relative w-full md:w-1/2">
            <img
              src="/main/main-img-2.webp"
              alt="main-img-2"
              className=" h-[350px] w-full md:h-screen lg:w-screen  object-cover object-center"
            />
            <div className="absolute flex flex-col items-center justify-center text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="whitespace-nowrap font-kimjungchul font-bold text-sm md:text-lg text-beige uppercase">
                this week
              </h2>
              <h1 className="whitespace-nowrap font-kimjungchul font-bold text-2xl md:text-4xl  text-beige">
                이번주 구매
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-10 flex-col justify-between">
            <div className="p-4 text-center md:text-left">
              <h1 className="mb-20 md:mb-60 md:mt-10 font-hahmlet text-md sm:text-xl lg:text-3xl text-light-brown font-extralight">
                &quot;거의 다 사용한 <br />
                생활용품이 무엇이었는지
                <br /> 스똑이 보여드려요.&quot;
              </h1>

              <p className="leading-5 font-nexon text-xs sm:text-lg lg:text-xl text-dark-brown font-thin">
                &quot;다 써서 사야하는게 있었는데... 뭐였더라.&quot; <br />
                <br />
                마트나 상품점에서 <br /> 뭘 사야했었는지 고민하지마세요. <br />
                오늘 날짜 기준으로 <br /> 용량이 10% 이하로 남은 상품을
                보여드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 3 - 스똑 캘린더 */}
      <section>
        <div className="flex flex-wrap bg-beige">
          <div className="md:order-2 w-full md:w-1/2 relative">
            <img
              src="/main/main-img-3.webp"
              alt="main-img-3"
              className="h-[350px] w-full md:h-screen lg:w-screen object-cover object-center"
            />
            <div className="absolute flex flex-col items-center justify-center text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="whitespace-nowrap font-kimjungchul font-bold text-sm md:text-lg text-beige uppercase">
                calendar
              </h2>
              <h1 className="whitespace-nowrap font-kimjungchul font-bold text-2xl md:text-4xl text-beige">
                스똑 캘린더
              </h1>
            </div>
          </div>
          <div className="md:order-1 w-full md:w-1/2 p-10 flex-col justify-between">
            <div className="p-4 text-center md:text-left">
              <h1 className="mb-20 md:mb-60 md:mt-10 font-hahmlet text-md sm:text-xl lg:text-3xl text-light-brown font-extralight">
                &quot;우리집 생활용품 달력, <br />
                다음을 미리 준비할 수 있도록 &quot;
              </h1>
              <p className="leading-5 font-nexon text-xs sm:text-lg lg:text-xl text-dark-brown font-thin ">
                다음 주 그리고 다음 달에
                <br />
                어떤 생활용품이 소진되는지
                <br />한 눈에 볼 수 있어요.
                <br />
                혹시 다음 주에 마트에 갈 예정이라면,
                <br />
                스똑 캘린더에서 미리 확인해보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 4 - 항목별 보기 */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-center bg-beige">
          <div className="relative md:order-2 w-full md:w-1/3 ">
            <div className="flex justify-center">
              <img
                src="/main/main-img-4.webp"
                alt="main-img-4"
                className=" h-[350px] md:h-screen w-full object-cover md:p-10"
              />
            </div>
            <div className="absolute flex flex-col items-center justify-center text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className=" whitespace-nowrap font-kimjungchul font-bold text-xs md:text-lg text-beige uppercase">
                view
              </h2>
              <h1 className="whitespace-nowrap font-kimjungchul font-bold text-xl md:text-4xl  text-beige ">
                항목별보기
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:order-1 flex flex-col justify-between">
            <div className="p-10 md:pr-2 text-center md:text-left">
              <p className="mb-10 md:mb-60 md:mt-10 font-hahmlet text-md sm:text-lg lg:text-3xl text-light-brown font-extralight">
                &quot;우리집 생활용품을 <br /> 매장에서처럼 <br /> 한눈에
                관리해보세요.&quot;
              </p>
              <p className="leading-5 font-nexon text-xs sm:text-md lg:text-xl text-dark-brown font-thin">
                집에서 사용하는 생활용품을 <br /> 체계적으로 관리할 수 있습니다.
                <br />
                어떤 생활용품을 자주 구매하는지,
                <br /> 그리고 무엇을 빨리 소진하는지 <br /> 한눈에 확인해보세요!
              </p>
            </div>
          </div>

          <div className="w-full md:order-3 md:w-1/3">
            <div className="flex flex-col items-center md:justify-center justify-start md:mt-60 ">
              <div className="flex flex-row items-center pb-4">
                <img src="/main/kitchen_item_icon.svg" alt="주방아이콘" />
                <hr className="px-6 mx-3 border-t-1 w-1/4 border-light-brown"></hr>
                <p className="font-nexon text-xs md:text-md font-extralight text-dark-brown">
                  주방세제
                </p>
              </div>
              <div className="pb-8 p-2">
                <div className="flex flex-col items-center justify-between">
                  <Line
                    percent={40}
                    strokeColor="#9f8772"
                    trailColor="#F6F4EF"
                    strokeLinecap="butt"
                    className="h-5 shadow-lg w-44 "
                  />
                  <p className="text-xs md:text-sm mt-4 font-nexon font-light  text-dark-brown">
                    총 2L 중에 820ml 소진했어요!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 5 - 스똑에서 */}
      <section>
        <img
          src="/main/main-img-5.webp"
          alt="main-img-5"
          className="hidden md:block"
        />
      </section>

      <footer className="h-[300px] bg-ivory">푸터</footer>
    </main>
  )
}

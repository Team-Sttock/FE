export default function Home() {
  return (
    <main>
      <nav className="w-full h-[80px]">네브바</nav>
      {/* 메인1 - 메인화면 */}
      <section>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="/main/main-img-1.svg"
              alt="main-img-1"
              className=" w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="whitespace-nowrap font-kimjungchul font-bold text-md md:text-lg  text-ivory">
                스스로 똑똑하게,
              </h2>
              <h1 className="whitespace-nowrap font-kimjungchul font-bold  text-4xl md:text-6xl  text-ivory uppercase">
                sttock
              </h1>
            </div>
          </div>
          <div className=" min-h-[300px] bg-ivory flex flex-col items-center justify-center text-center">
            <h1 className="whitespace-nowrap mb-6 font-hahmlet text-2xl md:text-4xl text-light-brown font-extralight">
              &quot;잊고사세요, 스똑이 알려드릴게요. &quot;
            </h1>
            <p className="whitespace-nowrap font-nexon text-lg md:text-2xl text-dark-brown font-thin ">
              구매주기계산부터 <br /> 재구매일확인까지 <br /> 스똑에서 해결할 수
              있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 메인2 - 이번주 구매 */}
      <section>
        <div className="flex flex-wrap bg-beige">
          <div className="relative w-full  md:w-1/2">
            <img
              src="/main/main-img-2.png"
              alt="main-img-2"
              className=" md:h-screen h-[750px] w-screen  object-cover"
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
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-left pl-10 py-20">
              <div className="mb-60">
                <p className="whitespace-nowrap font-hahmlet text-md sm:text-3xl lg:text-4xl text-light-brown font-extralight">
                  &quot;거의 다 사용한 <br />
                  생활용품이 무엇이었는지
                  <br /> 스똑이 보여드려요.&quot;
                </p>
              </div>
              <p className="whitespace-nowrap font-nexon text-xs sm:text-lg lg:text-2xl text-dark-brown font-thin">
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
          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col items-left px-5 py-20">
              <div className="mb-60">
                <p className="whitespace-nowrap font-hahmlet text-md sm:text-3xl lg:text-4xl text-light-brown font-extralight">
                  &quot;우리집 생활용품 달력, <br />
                  다음을 미리 준비할 수 있도록 &quot;
                </p>
              </div>
              <p className="whitespace-nowrap font-nexon text-xs sm:text-lg lg:text-2xl text-dark-brown font-thin">
                다음 주 그리고 다음 달에 <br />
                어떤 생활용품이 소진되는지
                <br />
                한 눈에 볼 수 있어요.
                <br />
                혹시 다음 주에 마트에 갈 예정이라면, <br />
                스똑 캘린더에서 미리 확인해보세요.
              </p>
            </div>
          </div>
          <div className="relative w-full  md:w-1/2">
            <img
              src="/main/main-img-3.png"
              alt="main-img-3"
              className=" md:h-screen h-[750px] w-screen  object-cover"
            />
            <div className="absolute flex flex-col items-center justify-center text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="whitespace-nowrap font-kimjungchul font-bold text-sm md:text-lg text-beige uppercase">
                calendar
              </h2>
              <h1 className="whitespace-nowrap font-kimjungchul font-bold text-2xl md:text-4xl  text-beige">
                스똑 캘린더
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 4 - 항목별 보기 */}
      <section>
        <div>
          <div className="w-screen h-screen flex flex-wrap items-center justify-center bg-beige">
            <div className="w-1/3 p-10">
              <div className="">
                <p className="mb-60 whitespace-nowrap font-hahmlet text-sm md:text-2xl text-light-brown font-extralight">
                  &quot;우리집 생활용품을 <br /> 매장에서처럼 <br /> 한눈에
                  관리해보세요.&quot;
                </p>
                <p className="font-nexon text-xs sm:text-xs lg:text-lg text-dark-brown font-thin">
                  집에서 사용하는 생활용품을 <br /> 체계적으로 관리할 수
                  있습니다. <br />
                  어떤 생활용품을 자주 구매하는지,
                  <br /> 그리고 무엇을 빨리 소진하는지 <br /> 한눈에
                  확인해보세요!
                </p>
              </div>
            </div>
            <div className=" relative  w-1/3 ">
              <img
                src="/main/main-img-4.png"
                alt="main-img-4"
                className="mx-auto h-[580px] w-[420px] object-cover"
              />
              <div className="absolute flex flex-col items-center justify-center text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="font-kimjungchul font-bold text-sm md:text-lg text-beige uppercase">
                  view
                </h2>
                <h1 className="font-kimjungchul font-bold text-2xl md:text-4xl  text-beige ">
                  항목별보기
                </h1>
              </div>
            </div>
            <div className="w-1/3 mt-40 p-20">
              <div className="flex justify-center items-center mb-10">
                <img src="/main/kitchen_item_icon.svg" alt="주방아이콘" />
                <hr className=" mx-4 border-t-1 w-[100px] border-light-brown"></hr>
                <p className="whitespace-nowrap font-nexon font-extralight text-dark-brown">
                  주방세제
                </p>
              </div>
              <div>
                <div className="w-60 h-7 rounded-full shadow-lg bg-ivory">
                  <div className="h-full w-[40%] rounded-full bg-light-brown  "></div>
                </div>

                <p className=" mt-4 font-nexon font-light  text-dark-brown">
                  총 2L 중에 820ml 소진했어요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 5 - 스똑에서 */}
      <section>
        <img src="/main/main-img-5.png" alt="main-img-5" />
      </section>

      <footer className="">푸터</footer>
    </main>
  )
}

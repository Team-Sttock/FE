export default function Home() {
  return (
    <main>
      <nav className="w-full h-[100px]">네브바</nav>
      <div className="flex relative h-screen w-full min-h-screen min-w-screen justify-center items-center bg-ivory">
        <img
          src="/main/main-img-1.png"
          alt="main-img-1"
          className="w-screen h-[450px] absolute left-[-1px] top-[-1px] object-cover z-0 "
        />
        <div className=" w-full flex flex-col items-center absolute  justify-center z-10 ">
          <h1 className=" relative  text-[25px] font-kimjungchul text-bold text-ivory">
            스스로 똑똑하게,
          </h1>
          <h1 className=" relative  pb-10 text-[72px] font-kimjungchul text-ivory uppercase">
            sttock
          </h1>
          <h1 className="  relative top-20 my-10 p-5 font-hahmlet font-extralight text-light-brown text-5xl ">
            &quot;잊고사세요, 스똑이 알려드릴게요.&quot;
          </h1>

          <p className=" relative top-20 p-1  text-3xl font-thin font-nexon text-dark-brown">
            구매주기계산부터
          </p>
          <p className=" relative top-20 p-1  text-3xl font-thin font-nexon text-dark-brown">
            재구매일확인까지
          </p>
          <p className=" relative top-20 p-1 text-3xl font-thin font-nexon text-dark-brown">
            스똑에서 해결할 수 있습니다.
          </p>
        </div>
      </div>
      <div className=" flex relative h-screen w-full justify-center items-center bg-beige">
        <img
          src="/main/main-img-2.png"
          alt="main-img-2"
          className="w-[718px] h-[100%] absolute left-0 top-0 object-cover z-0"
        />
        <div className=" w-full flex  flex-col items-center justify-center z-10 ">
          <h1 className=" relative font-kimjunchul  text-3xl text-beige uppercase">
            this week
          </h1>
          <h1 className="relative font-kimjunchul font-bold text-5xl text-beige">
            이번주 구매
          </h1>
        </div>
      </div>

      <div className=" flex relative h-screen w-full justify-center items-center bg-beige">
        <img
          src="/main/main-img-3.png"
          alt="main-img-3"
          className="w-[718px] h-full absolute top-0 right-0 object-cover z-0"
        />
      </div>
      <div className=" flex relative h-screen w-full justify-center items-center bg-beige">
        <img
          src="/main/main-img-4.png"
          alt="main-img-4"
          className="w-[419px] h-[586px] absolute  object-cover z-0"
        />
      </div>
      <div>
        <img src="/main/main-img-5.png" alt="main-img-5" />
      </div>
      <footer className="flex relative h-[200px] bg-beige w-full "></footer>
    </main>
  )
}

export default function Home() {
  return (
    <main>
      <nav className="w-full h-[100px]">네브바</nav>
      <div className="flex relative h-screen w-full justify-center items-center bg-ivory">
        <img
          src="/main/main-img-1.png"
          alt="main-img-1"
          className="w-screen h-[500px] absolute left-[-1px] top-[-1px] object-cover z-0 "
        />
        <div className="flex flex-col items-center justify-center z-10">
          <h1 className=" mt-20 text-[25px] font-kimjungchul text-bold text-ivory">
            스스로 똑똑하게,
          </h1>
          <h1 className=" text-[72px] font-kimjungchul text-ivory">STTOCK</h1>
          <h1 className=" mt-60 font-hahmlet font-extralight text-light-brown text-5xl ">
            &quot;잊고사세요, 스똑이 알려드릴게요.&quot;
          </h1>

          <p className=" mt-20 p-1 text-3xl font-thin font-nexon text-dark-brown">
            구매주기계산부터
          </p>
          <p className=" p-1 text-3xl font-thin font-nexon text-dark-brown">
            재구매일확인까지
          </p>
          <p className=" p-1 text-3xl font-thin font-nexon text-dark-brown">
            스똑에서 해결할 수 있습니다.
          </p>
        </div>
      </div>

      <div>이번주 구매</div>

      <div>스똑 캘린더</div>
      <div>항목별보기</div>
      <div>스스로 똑똑하게</div>
      <footer>푸터</footer>
    </main>
  )
}

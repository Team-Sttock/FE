export default function Home() {
  return (
    <main>
      <nav className="w-full h-[100px]">네브바</nav>
      {/* 메인1 - 메인화면 */}
      <section>
        <div>
          <img src="/main/main-img-1.png" alt="main-img-1" />
          <h2>스스로 똑똑하게 </h2>
          <h1>sttock</h1>
        </div>
        <div>
          <h1> &quot;잊고사세요, 스똑이 알려드릴게요. &quot;</h1>
          <p>구매주기계산부터 재구매일확인까지 스똑에서 해결할 수 있습니다.</p>
        </div>
      </section>
      {/* 메인2 - 이번주 구매 */}
      <section>
        <div>
          <img src="/main/main-img-2.png" alt="main-img-2" className="" />
          <h2>this week</h2>
          <h1>이번주 구매</h1>
        </div>
        <div>
          <div>
            &quot;거의 다 사용한 생활용품이 무엇이었는지 스똑이
            보여드려요.&quot;
          </div>
          <div>&quot;다 써서 사야하는제 있었는데... 뭐였더라.&quot;</div>
          <div>
            마트나 상품점에서 뭘 사야했었는지 고민하지마세요 오늘날짜 기준으로
            용량이 10% 이하로 남은 상품을 보여드립니다.
          </div>
        </div>
      </section>

      {/* 메인 3 - 스똑 캘린더 */}
      <section>
        <div className="left">
          <div className="topLetter">
            &quot;우리집 생활용품 달력, 다음을 미리 준비할 수 있도록&quot;
          </div>
          <div className="bottomLetter">
            다음주 그리고 다음달에 어떤 생활용품이 소진되는지 한눈에 볼 수
            있어요. 혹시 다음주에 마트에 갈 예정이라면, 스똑 캘린더에서 미리
            확인해보세요.
          </div>
        </div>
        <div className="right">
          <img src="/main/main-img-3.png" alt="main-img-3" />
          <h2>calendar</h2>
          <h1>스똑 캘린더</h1>
        </div>
      </section>

      {/* 메인 4 - 항목별 보기 */}
      <section>
        <div className="left">
          <div className="topLetter">
            &quot;우리집 생활용품을 매장에서철머 하눈에 관리해보세요.&quot;
          </div>
          <div className="bottomLetter">
            집에서 사용하는 생활용품을 체계적으로 관리할 수 있습니다. 어떤
            생활용품을 자주 구매하는지, 그리고 무엇을 빨리 소진하는지 하눈ㄴ에
            확인해보세요!
          </div>
        </div>
        <div className="center">
          <img src="/main/main-img-4.png" alt="main-img-4" />
          <h2>view</h2>
          <h1>항목별보기</h1>
        </div>
        <div className="right">
          <div className="kitchen">
            <i className="kitchenIcon"></i>
            <div className="hypen">----</div>
            <p className="kitchen">주방세제</p>
          </div>

          <div className="progressbar">
            {' '}
            <img src="" alt="프로그래스바" />
          </div>
          <div>
            <p> 총 2L 중에 820ml 소진했어요! </p>
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

const insertBtn = document.getElementById("insertBtn");



insertBtn.addEventListener("click", (e)=>{

    // 요소의 이벤트 기능을 중지하는 기능
    // ex) submit(전송지능), <a>의 페이지 이동
    e.preventDefault();



    boardInsert();

});

//게시글 작성 기능
const boardInsert = async () => {
    
    //사용자가 입력한 폼 데이터 가져오기
    let boardFrm = document.boardFrm;
    let bData = new FormData(boardFrm);

    console.log(bData.get("b_title"));

    // Spring 서버로 게시를 데이터 전송하는 기능 구현하기
    // 서버경로: httt://~~~/api/board/register
    // aysns/await, fetch() 활용하기
    // 로컬용
    const API_URL = "http://localhost:8082/api/board/register";


    // 배포용
    // const API_URL = "";

    let res = await fetch(API_URL,{
        method:"POST",
        body:bData
    });
    let data = await res.text();
    
    console.log(data);
}
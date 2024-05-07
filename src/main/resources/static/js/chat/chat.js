// const roomId = "YOUR_ROOM_ID"; // 실제 채팅방의 식별자로 대체해야 합니다.

// STOMP 클라이언트 생성
const socket = new SockJS('http://172.30.1.16:8888/connection');
const stompClient = Stomp.over(socket);
// const stompClient = Stomp.client("ws://192.168.0.12:8888/connection"); // 예시: 서버 주소와 엔드포인트 설정

// 연결 시도
let authToken;
stompClient.connect({Authorization: 'Bearer ' + authToken}, function(frame) {
    console.log('Connected: ' + frame);

    // 메시지를 받았을 때의 동작 정의
    stompClient.subscribe("/topic/chat/room/", function(message) {
        const messageBody = JSON.parse(message.body);
        // 메시지를 chatMessages 영역에 추가
        const chatMessagesDiv = document.getElementById("chat_list");
        const messageParagraph = document.createElement("p");
        messageParagraph.QtextContent = messageBody.content;
        chatMessagesDiv.appendChild(messageParagraph);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("chatForm").addEventListener("submit", function(event) {
        event.preventDefault(); // 폼 기본 동작 중단
        //
        // const messageInput = document.getElementById("chat_content");
        // console.log("messageInput: ",messageInput)
        //
        // const message = messageInput.value; // 입력된 메시지 가져오기
        // console.log("message: ",message)

        const messageInput = document.querySelector("#chat_content");
        console.log(messageInput);
        const message = messageInput.value;

        console.log('test: ', message);
        console.log("Message entered:", message);
        // 메시지를 서버로 전송
        let roomId = '1';
        const chatMessage = {
            content: message,
            chatRoom: roomId, // 예시: 선택한 채팅방의 식별자
            registDate: new Date().toISOString() // 현재 시간을 ISO 8601 형식의 문자열로 설정
            // 기타 필요한 필드 추가
        };
        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
        // 입력 폼 비우기
        messageInput.value = "";

        // 전송된 메시지 확인
        console.log("전송된 메시지:", JSON.stringify({
            content: message,
        }));
    });
});
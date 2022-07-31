var stompClient = null;
const serverEndpoint = '/message-websocket';

onLoad();

function onLoad() {
    addInputListener();
    connect();
}

function addInputListener() {
    document.getElementById("input").addEventListener('input', onInputChange);
}

function connect() {
    var socket = new SockJS(serverEndpoint);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/message', function (message) {
            renderResponse(JSON.parse(message.body).content);
        });
    });
}

function onInputChange() {
    stompClient.send("/app/message", {}, JSON.stringify({'content': this.value}));
}

function renderResponse(message) {
    document.getElementById("response").innerText = message;
}
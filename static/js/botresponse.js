function chat_response(usertext) {
    let botResponse = botproccess(usertext);
    let bothtml = '<p class="bottext"><span>'+ botResponse + '</span></p>'
    $("#chatbox").append(bothtml);

    document.getElementById("bottom").scrollIntoView(true);
}

function getResponse() {
    let usertext = $("#usertxt").val();

    if (usertext == "") {
        usertext = 'i love jarvis'
    }

    let userhtml = '<p class="usertxt"><span>'+ usertext + '</span></p>'

    
    $("#chatbox").append(userhtml);
    document.getElementById("bottom").scrollIntoView(true);

    setTimeout(() => {
        chat_response(usertext);
    }, 1000)
}

function sendButton() {
    getResponse();
}
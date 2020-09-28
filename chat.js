
const input = document.getElementById('chatcommand');
input.addEventListener('keydown', examineKey);

function examineKey(e) {
    if (e.code === 'Enter') {
        //we should update chat box and clear current value
        let currentChatHistory = document.getElementById('chathistory').value
        let currentChatCommand = document.getElementById('chatcommand').value
        currentChatHistory += currentChatCommand + '\n';
        document.getElementById('chathistory').value = currentChatHistory;
        document.getElementById('chatcommand').value = '';
    }
}

function clearHistoryFunc() {
    document.getElementById('chathistory').value = '';
}

// @ts-nocheck

const zoeSelectorBtn = document.querySelector('#zoe-selector')
const judeSelectorBtn = document.querySelector('#jane-sector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem(messages)) || []

const createChatMessageElement = (message) =>`
<div class="message ${message.sender === 'Zoe' ? 'blue-bg' : 'gray-bg'}">
<div class="message-sender">${message.sender}</div>
div class="message-text>${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>
`

window.onload = () => {
    messages.forEach((message) => {
        chatMessages.innerHTML += createChatMessageElement(message)
    })
}
 let messageSender = 'Zoe'

 const updateMessagesSender = (name) => {
    messageSender = name
    chatHeader.innerText = `${messageSender} chatting...`
    chatInput.placeholder = `Type here, ${messageSender}...`

    if(name === 'Zoe') {
        zoeSelectorBtn.classList.add('active-person')
        judeSelectorBtn.classList.remove(active-person)
    }
    if(name === 'Jude'){
        judeSelectorBtn.classList.add(active-person)
        zoeSelectorBtn.classList.remove(active-person)
    }
    /* auto-focus the input feild */
    chatInput.focus()
 }
 zoeSelectorBtn.onclick = () => updateMessagesSender('Zoe')
 judeSelectorBtn.onclick = () => updateMessagesSender('Jude')

 const sendMessage = (e) => {
    e.preventDefault()
const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const message = {
    sender: messageSender,
    text:chatInput.value,
    timestamp,
        }
 /* Save message to local storage */
 message.push(message)
 localStorage.setItem('message', JSON.stringify(messages))

 /* Add messaage to DOM */
 charMessages.innerHTML += createChatMessageElement(message)

 /*Clear input feild */
 chatInputForm.reset()

 /* Scroll to bottom of chat messages*/
 chatMessages.scrollTop = chatMessages.scrollHeight 
    }
    chatInputForm.addEventListener(Listener('submit',sendMessage))

    clearChatBtn.addEventListener('submit',sendMessage)

    clearChatBtn.addEventListener('click',() => {
        localStorage.clear()
        chatMessages.innerHTML = ''
    })

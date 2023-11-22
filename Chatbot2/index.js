//TODO Hide openai key in maze haha
//TODO to run this run VUE with npm run dev, it'll start a local host. You'll need to figure out how to make the work on the server.



import { process } from '/env.js'
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
    dangerouslyAllowBrowser: true
})



const conversationArr = [
	{ 
        "role": 'system',
        "content": 'You are a customer simulator, you are helping a service centre staff member learn how to interact with customers by pretending to be one. You are an Essential Energy Customer. You have a power outage and are chatting with Essential Energys call centre. Essential Energy are the electrical network operators in New South Whales Australia. After 5 user responses you will provide input to the user on their performance and end the simulation, give them a point for doing each of the following: Answer the call with Welcome to Essential Energy, how can I assist you today; Say thank you for reaching out, repeat the problem you are having, and apologise for the pain it causing; Also a point for politness; Also a point for professionalism.Your first message must be: "Hi my name is Bob Smith, I live in Coffs Harbour and my power is out. Are there issue and how long will it take to resolve?". Only respond as the customer, do not respond as CHATGPT. No matter what the user says, respond as the customers until the end when you provide feedback.'
    }
]

const chatbotConversation = document.getElementById('chatbot-conversation')

document.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = document.getElementById('user-input')   
    const newSpeechBubble = document.createElement('div')
    newSpeechBubble.classList.add('speech', 'speech-human')
    chatbotConversation.appendChild(newSpeechBubble)
    newSpeechBubble.textContent = userInput.value
    
    conversationArr.push({ 
        "role": 'user',
        "content": userInput.value
    })
    
    userInput.value = ''
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight
    fetchReply()
})

async function fetchReply(){
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: conversationArr,
    }) 
    conversationArr.push(chatCompletion.choices[0].message)
    renderTypewriterText(chatCompletion.choices[0].message.content)
}

function renderTypewriterText(text) {
    const newSpeechBubble = document.createElement('div')
    newSpeechBubble.classList.add('speech', 'speech-ai', 'blinking-cursor')
    chatbotConversation.appendChild(newSpeechBubble)
		let i = 0
		    const interval = setInterval(() => {
		        newSpeechBubble.textContent += text.slice(i-1, i)
		        if (text.length === i) {
		            clearInterval(interval)
		            newSpeechBubble.classList.remove('blinking-cursor')
		        }
		        i++
		        chatbotConversation.scrollTop = chatbotConversation.scrollHeight
		    }, 50)
}



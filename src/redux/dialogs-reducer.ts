import {ActionsTypes, MessagesPage} from "./State";


export const dialogsReducer=(state: MessagesPage, action: ActionsTypes)=>{
    switch (action.type) {
        case "ADD-MESSAGE":
            let NewMessage = {
                id: 5, message: state.newMessageText
            }
            state.messagesData.push(NewMessage)
            state.newMessageText = ""
            return state
        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type ActionsTypes=ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>|
    ReturnType<typeof addMessageActionCreator>|
    ReturnType<typeof updateNewMessagesTextActionCreator>
export type StoreType={
    _state:StateType
    _callSubscriber:(state:StateType)=>void
    subscribe:(observer:(props:StateType)=>void)=>void
    getState:()=>StateType
    dispatch:(action:ActionsTypes)=>void
}
export type StateType = {
    profilePage: ProfileType
    messagesPage: MessagesPage
}
export type PostType = {
    id: number
    post: string
    likesCount: number
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type ProfileType={
    postData:PostType[]
    newPostText:string
}
export type MessagesPage={
    messagesData:MessagesType[],
    dialogsData:DialogsType[]
    newMessageText:string
}
export const addPostActionCreator=()=>{
    return{
        type:"ADD-POST"
    } as const
}

export const updateNewPostTextActionCreator=(newText:string)=>{
    return{
        type: "UPDATE-NEW-POST-TEXT", newText:newText
    }as const
}
export const addMessageActionCreator=()=>{
    return{
        type:"ADD-MESSAGE"
    } as const
}
export const updateNewMessagesTextActionCreator=(text:string)=>{
    return{
        type:"UPDATE-NEW-MESSAGE",newMessage:text
    } as const
}


export let store:StoreType={
    _state: {
    profilePage: {
        postData: [
            {id: 1, post: "Hi, how are you?", likesCount: 50},
            {id: 2, post: "Hi, is is my first post", likesCount: 60}
        ],
        newPostText:"it"

    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: "Viktor"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Alex"},
            {id: 4, name: "Sveta"},
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hi, go home"},
            {id: 3, message: "Hi, Go cinema"},
            {id: 4, message: "Yo"},
        ],
        newMessageText:"Hi"
    }
},
    _callSubscriber(){
        console.log("state change")
    },
    getState(){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber=observer
    },


    dispatch: function (action) {

        if (this._state.profilePage !== undefined) {
            this._state.profilePage = profileReducer(this._state.profilePage, action)
        } else if (this._state.messagesPage !== undefined) {
            this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        }
        this._callSubscriber(this._state)

    }

}





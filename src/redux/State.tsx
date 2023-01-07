
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
        ]
    }
},
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log("state change")
    },
    addPost() {
        let NewPost={
            id:5, post:this._state.profilePage.newPostText, likesCount:0
        }
        this._state.profilePage.postData.push(NewPost)
        this._state.profilePage.newPostText=""
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText:string){
        this._state.profilePage.newPostText=newText
        this._callSubscriber(this._state)
    },
    subscribe (observer:(state:StateType)=>void){
        this._callSubscriber=observer
    }
}


// let rerenderEntireTree=(props:StateType)=>{
//     console.log("state change")
// }

export type StoreType={
    _state:StateType,
    _callSubscriber:(state:StateType)=>void
    addPost:()=>void,
    updateNewPostText:(newText:string)=>void,
    subscribe:(observer:(props:StateType)=>void)=>void
    getState:()=>StateType
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
}




import React from 'react';


let rerenderEntireTree=(props:StateType)=>{
    console.log("state change")
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
export let State: StateType = {
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
}
export let addPost=()=>{
    let NewPost={
        id:5, post:State.profilePage.newPostText, likesCount:0
    }
    State.profilePage.postData.push(NewPost)
    State.profilePage.newPostText=""
    rerenderEntireTree(State)
}

export let updateNewPostText=(newText:string)=>{
    State.profilePage.newPostText=newText
    rerenderEntireTree(State)
}

export const subscribe=(observer:(props:StateType)=>void)=>{
    rerenderEntireTree=observer
}

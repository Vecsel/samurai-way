import {ActionsTypes, ProfileType} from "./State";

export const profileReducer = (state: ProfileType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let NewPost = {
                id: 5, post: state.newPostText, likesCount: 0
            }
            state.postData.push(NewPost)
            state.newPostText = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
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

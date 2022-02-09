import { firebaseDb} from 'boot/firebase'
// import {firebaseAuth, firebaseDb} from 'boot/firebase'
import { ref, set,push,child,onChildChanged,onValue } from "firebase/database"
// import { ref, set, onValue,update,child,push } from "firebase/database"

let chatServices = {
    sendMessage:(data)=>{
        return new Promise((resolve,reject)=>{
            // const members = ref(firebaseDb)
            // get new key for members
            // const mKey = push(child(members,'members')).key
            // const cmembers = ref(firebaseDb,'members/' + mKey)
            // set(cmembers,data.members)
            // const msg = ref(firebaseDb,'message/' + mKey)
            // push(msg,data.message)
            // .catch(error=>{
            //     console.log("mesage eror",error)
            // })
            // const roomchat = ref(firebaseDb,'roomChat/' + mKey)
            // set(roomchat,data.roomchat)
            // .catch(error=>{
            //     console.log("rom chat eror",error)
            // })
            // const users = ref(firebaseDb,'userChat/' + data.userId +'/'+ mKey)
            // set(users,true)
            // let chats = {
            //     chatId : mKey
            // }
            // push(users,chats)
            // let otherUser = ref(firebaseDb,'userChat/' + data.otheruserId +'/'+ mKey)
            // set(otherUser,true)
            // .then(()=>console.log("berhasil"))
            // push(otherUser,chats)
            const chat = ref(firebaseDb,'chat/' + data.userId + '/' + data.otheruserId)
            push(chat,data.message)

            const chat2 = ref(firebaseDb,'chat/' + data.otheruserId + '/' + data.userId)
            push(chat2,data.message)
            
            const roomchat = ref(firebaseDb,'roomChat/' + data.userId + '/' + data.otheruserId )
            set(roomchat,data.roomchat)

            const roomchat2 = ref(firebaseDb,'roomChat/' + data.otheruserId + '/' + data.userId )
            set(roomchat2,data.roomchat)

        })
    },
    getMsg: (id,cb) =>{
        const userId = ref(firebaseDb,'roomChat/' + id)
        onValue(userId,cb)
    }
}

export { chatServices }
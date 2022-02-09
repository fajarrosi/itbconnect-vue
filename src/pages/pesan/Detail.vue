<template>
  <q-page padding class="flex column page-chat bg-secondary" ref="pageChat">
    <div
      class="q-pa-md column col justify-end"
    >
      <q-chat-message
        v-for="(message, index) in messages"
        :key="index"
        :name="message.from === 'me' ? 'me' : 'them'"
        :text="[message.text]"
        :sent="message.from === 'me' ? true : false"
        :bg-color="message.from === 'me' ? 'white' : 'light-blue-2'"
      />
    </div>
    <q-footer>
        <div class="row justify-center bg-grey-2">
            <div class="mobile bg-secondary q-pa-md">
                    <q-form class="full-width" @submit="sendMsg">
                        <q-input
                        v-model="newMsg"
                        dense
                        outlined
                        class="full-width"
                        ref="newmsg"
                        bg-color="white"
                        >
                        <template v-slot:append>
                        <q-btn
                            round
                            dense
                            flat
                            icon="send"
                            color="primary"
                            @click="sendMsg"
                        />
                        </template>
                    </q-input>

                    </q-form>
            </div>
        </div>
    </q-footer>
  </q-page>
</template>

<script>
// import { mapActions, mapState } from "vuex";
// import mixinOtherUserDetail from "src/mixins/mixin-other-user-detail.js";
export default {
//   mixins: [mixinOtherUserDetail],
  data() {
    return {
      newMsg: "",
      showmsg: false,
      messages: [
        {
          text: "Hy Jim How Are You?",
          from: "me",
        },
        {
          text: "Fine and you ?",
          from: "them",
        },
        {
          text: "very good ",
          from: "me",
        },
        {
          text: "Hy Jim How Are You?",
          from: "me",
        },
        {
          text: "Fine and you ?",
          from: "them",
        },
        {
          text: "very good ",
          from: "me",
        },
        {
          text: "Hy Jim How Are You?",
          from: "me",
        },
        {
          text: "Fine and you ?",
          from: "them",
        },
        {
          text: "last ",
          from: "me",
        },
      ],
    };
  },
  methods: {
    sendMsg() {
      this.messages.push({
        text: this.newMsg,
        from: "me",
      });
    //   this.firebaseSendMsg({
    //     message: {
    //       text: this.newMsg,
    //       from: "me",
    //     },
    //     otherUserId: this.$route.params.userId,
    //     });
      this.clearMsg();
    },
    clearMsg() {
      this.newMsg = "";
      this.$refs.newmsg.focus();
    },
    // ...mapActions("stores", ["firebaseGetMsg", "firebaseSendMsg"]),
    scrollToBottom() {
      let pageChat = this.$refs.pageChat.$el;
      setTimeout(() => {
        window.scrollTo(0, pageChat.scrollHeight);
      }, 20);
    //   console.log("pageChate", pageChat.scrollHeight);
    },
  },
  watch: {
    messages(val) {
      if (val.length > 0) {
        this.scrollToBottom();
        setTimeout(() => {
          this.showmsg = true;
        }, 200);
        console.log("di dalam if val msg", val);
      }
      console.log("watch msg", val);
    },
  },
  mounted(){
    this.scrollToBottom()
  }
};
</script>
<style lang="scss">
// .page-chat {
//   background-color: #e2dfd5;
 
// }
.q-message{
  z-index: 1;
}
.q-banner{
  top: 50px;
  z-index:2;
  opacity: 0.8;
}
</style>
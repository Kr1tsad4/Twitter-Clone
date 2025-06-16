<script setup>
import { createTweet, deleteTweet, getTweet } from "@/libs/fetchTweetUtils";
import { getUserById } from "@/libs/fetchUserUtils";
import { computed, onMounted, ref } from "vue";
import Post from "./Post.vue";

const props = defineProps({
  userId: {
    required: true,
  },
});

const baseUrl = import.meta.env.VITE_APP_URL;
const tweets = ref([]);
const contentToTweet = ref("");
const isInputOnFocus = ref(false);
const tweetMenuId = ref(null);

const openTweetMenu = (tweetId) => {
  tweetMenuId.value = tweetMenuId.value === tweetId ? null : tweetId;
};

const postTweet = async () => {
  const newTweet = await createTweet(baseUrl, {
    authorId: props.userId,
    content: contentToTweet.value,
  });
  tweetMenuId.value = null;
  isInputOnFocus.value = false;
  contentToTweet.value = "";
  tweets.value.push(newTweet);
  await loadTweet();
};

const handleFocus = () => {
  isInputOnFocus.value = true;
};

const handleBlur = () => {
  if (!contentToTweet.value) {
    isInputOnFocus.value = false;
  }
};

const deleteUserTweet = async (id) => {
  const deletedTweet = await deleteTweet(baseUrl, id);
  if (deletedTweet) {
    tweets.value = tweets.value.map((t) => t._id !== id);
    await loadTweet();
  }
};

const loadTweet = async () => {
  const res = await getTweet(baseUrl);

  const tweetWithAuthors = await Promise.all(
    res.map(async (t) => {
      const user = await getUserById(baseUrl, t.authorId);
      return {
        ...t,
        authorName: user.name,
      };
    })
  );
  tweets.value = tweetWithAuthors;
};
onMounted(async () => {
  await loadTweet();
});
</script>

<template>
  <div>
    <div class="border-b-1 border-[rgba(143,149,157,0.4)] h-15">
      <div class="flex justify-center p-5 gap-60">
        <p class="text-md font-bold">สำหรับคุณ</p>
        <p class="">กำลังติดตาม</p>
      </div>
    </div>
    <div class="border-b-1 border-[rgba(143,149,157,0.4)] p-5">
      <div class="flex gap-7">
        <div class="avatar h-9">
          <div
            class="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2"
          >
            <img
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            class="text-xl text-[rgba(255,255,255,0.78)] outline-0 w-[490px]"
            placeholder="มีอะไรเกิดขึ้นบ้าง"
            v-model="contentToTweet"
            @focus="handleFocus"
            @blur="handleBlur"
          />
          <div v-if="isInputOnFocus">
            <p class="mt-5 text-sm text-blue-500 font-bold">
              ทุกคนสามารถตอบกลับ
            </p>
            <div
              class="border-b-1 border-[rgba(143,149,157,0.4)] mt-4 w-[490px]"
            ></div>
          </div>

          <div class="flex justify-between p-3">
            <div class="flex gap-5">
              <p>o</p>
              <p>o</p>
              <p>o</p>
              <p>o</p>
              <p>o</p>
              <p>o</p>
              <p>o</p>
            </div>
            <div
              class="w-18 -mr-3 h-9 rounded-4xl flex items-center justify-center -mb-3"
              :class="[
                contentToTweet
                  ? 'bg-white cursor-pointer'
                  : 'bg-[rgba(215,218,223,0.4)]',
              ]"
            >
              <button
                class="font-semibold text-black text-sm"
                :class="[contentToTweet ? 'bg-white cursor-pointer' : '']"
                @click="postTweet"
                :disabled="!contentToTweet"
              >
                โพสต์
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Post
      :tweets="tweets"
      :tweetMenuId="tweetMenuId"
      @deleteTweet="deleteUserTweet"
      @openTweetMenu="openTweetMenu"
    />
  </div>
</template>

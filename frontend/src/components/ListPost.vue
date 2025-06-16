<script setup>
const props = defineProps({
  tweets: {
    type: Array,
  },
  tweetMenuId: String,
});

const emits = defineEmits(["deleteTweet", "openTweetMenu"]);
</script>

<template>
  <div class="mb-100">
    <div v-for="(tweet, index) in props.tweets" :key="index">
      <div class="flex gap-5 pl-5 pt-4 pb-5">
        <div class="avatar">
          <div
            class="ring-primary ring-offset-base-100 h-10 w-10 rounded-full ring-2 ring-offset-2"
          >
            <img
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            />
          </div>
        </div>
        <div class="-mt-2">
          <div class="flex justify-between">
            <h1>{{ tweet.authorName }}</h1>
            <div class="-mr-30 text-xl -mt-3 cursor-pointer">
              <p @click="$emit('openTweetMenu', tweet._id)" class="relative">
                ...
              </p>
              <div
                v-if="props.tweetMenuId === tweet._id"
                class="absolute right-130"
              >
                <div class="bg-black shadow-white shadow-md h-100 w-85 p-3">
                  <p
                    @click="$emit('deleteTweet', tweet._id)"
                    class="text-red-500"
                  >
                    ลบ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 class="mt-2">{{ tweet.content }}</h1>
          <div class="flex gap-28 mt-3">
            <p>o</p>
            <p>o</p>
            <p>o</p>
            <p>o</p>
          </div>
        </div>
      </div>

      <div class="border-b-1 border-[rgba(143,149,157,0.4)] max-w-full"></div>
    </div>
  </div>
</template>

<template>
  <section class="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-20">
    
    <div class="bg-white shadow-lg rounded-3xl p-10 max-w-3xl w-full">
      
      <h1 class="text-4xl font-bold text-slate-800 mb-8 text-center">
        Contact Us
      </h1>

      <form class="space-y-6">
        
        <div>
          <label class="block text-slate-700 mb-2 font-medium" >
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            class="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="name">
        </div>

        <div>
          <label class="block text-slate-700 mb-2 font-medium" >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            class="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="mail">
        </div>

        <div>
          <label class="block text-slate-700 mb-2 font-medium" >
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Write your message"
            class="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-model="msg"></textarea>
        </div>

        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition duration-300"
          @click="submitted()">
          Send Message
        </button>

      </form>

    </div>

  </section>
</template>
<script setup>
import { ref } from 'vue'

const name = ref("")
const mail = ref("")
const msg = ref("")

function submitted(){
if(name.this.value == ""){
    alert("Enter your name")
}
}
</script>
<script setup lang="ts"></script>

<template>
  <section class="py-20 container">
    <h2 class="text-3xl lg:text-5xl mb-2">Wanna Some Colaborate?</h2>
    <p class="text-lg lg:text-xl mb-8">feel free to use the form below:</p>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="name" class="block text-lg font-medium">Name</label>
        <input type="text" id="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
      </div>
      <div>
        <label for="email" class="block text-lg font-medium">Email</label>
        <input type="email" id="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
      </div>
      <div class="md:col-span-2">
        <label for="message" class="block text-lg font-medium">Message</label>
        <textarea id="message" rows="6" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"></textarea>
      </div>
      <div class="md:col-span-2">
        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-dodgeroll-gold hover:bg-dodgeroll-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dodgeroll-gold-500">Send</button>
      </div>
    </form>
  </section>
</template>


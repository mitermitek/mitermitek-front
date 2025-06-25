<script setup>
import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/vue'
</script>

<template>
  <main class="container max-w-6xl mx-auto px-2 py-4 space-y-6">
    <h1 class="text-3xl font-black">I'm Kevin Mitermite</h1>

    <div>
      <p><span class="font-bold">Full Stack Web Developer</span> based in Toulouse, France.</p>
      <p>Currently working for <span class="font-bold">5 Degrés</span> 🟠</p>
    </div>

    <div class="flex space-x-4">
      <a
        href="https://github.com/mitermitek"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-gray-600 hover:underline"
      >
        <span class="inline-flex items-center gap-x-1"><RiGithubFill /> GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/mitermitek/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-gray-600 hover:underline"
      >
        <span class="inline-flex items-center gap-x-1"><RiLinkedinBoxFill /> LinkedIn</span>
      </a>
    </div>

    <div>
      <p class="text-sm text-neutral-500 italic">Portfolio under construction. Blog coming soon!</p>
    </div>
  </main>
</template>

<style scoped></style>

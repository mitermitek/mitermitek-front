<script setup>
import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/vue'
</script>

<template>
  <main class="container max-w-6xl mx-auto px-2 py-4 space-y-6" role="main">
    <h1 class="text-3xl font-black">I'm Kevin Mitermite</h1>

    <div>
      <p><span class="font-bold">Full Stack Web Developer</span> based in Toulouse, France.</p>
      <p>Currently working for <span class="font-bold">5 Degrés</span> 🟠</p>
    </div>

    <nav class="flex space-x-4" aria-label="Social links">
      <a
        href="https://github.com/mitermitek"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-gray-600 hover:underline"
        aria-label="Kevin Mitermite on GitHub"
      >
        <span class="inline-flex items-center gap-x-1">
          <RiGithubFill aria-hidden="true" /> GitHub
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/mitermitek/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-gray-600 hover:underline"
        aria-label="Kevin Mitermite on LinkedIn"
      >
        <span class="inline-flex items-center gap-x-1">
          <RiLinkedinBoxFill aria-hidden="true" /> LinkedIn
        </span>
      </a>
    </nav>

    <div>
      <p class="text-sm text-neutral-500 italic">Portfolio under construction. Blog coming soon!</p>
    </div>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  packages: Array<[]>;
}>();
</script>

<template>
  <div className="text-center h-screen flex justify-center flex-col items-center p-4">
    <h1 className="text-3xl font-bold">Welcome, Django Breeze</h1>
    <p>AAAAAAAAAAAAAAA</p>
    <p className="text-green-600 mb-5">Your project is setup successfully!</p>
    <h3 className="text-slate-500">Powered by:</h3>
    <div className="lg:flex space-y-2 lg:space-y-0 lg:space-x-3 mt-3"></div>
  </div>
</template>

<template>
  <div class="flex flex-col gap-2 justify-center">
    <div class="p-2 bg-white">
      <button @click="count++">Increment {{ count }}</button>
    </div>

    <MainContainer>
      <ParentContainer>
        <ChildComponent></ChildComponent>
      </ParentContainer>
    </MainContainer>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, provide, ref } from 'vue';
import { MainContainer, ParentContainer, ChildComponent } from './Smalls.tsx';

const count = ref(0);

provide('count', count);

// const increment = () => count.value++;
</script>

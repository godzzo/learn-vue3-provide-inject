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

<script lang="ts">
import { defineComponent, reactive, provide, ref, computed } from 'vue';
import { MainContainer, ParentContainer, ChildComponent } from './Smalls.tsx';

export default defineComponent({
  components: {
    MainContainer,
    ParentContainer,
    ChildComponent,
  },
  data() {
    return { count: 0 };
  },
  provide() {
    return {
      count: computed(() => this.count),
    };
  },
});
</script>

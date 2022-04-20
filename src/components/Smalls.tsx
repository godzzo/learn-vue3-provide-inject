import { defineComponent, reactive, inject } from 'vue';

export const MainContainer = defineComponent((_, { slots }) => () => (
  <div class="bg-green-200 ring-yellow-400 ring-2 p-2 m-2 rounded-xl">
    <div class="bg-green-600 text-white text-xl p-2 rounded-xl">
      Main Container
    </div>
    <div class="p-2 m-2 bg-whit">{slots.default && slots.default()}</div>
  </div>
));

export const ParentContainer = defineComponent((_, { slots }) => () => (
  <div class="bg-blue-200 ring-yellow-400 ring-2 p-2 m-2 rounded-xl">
    <div class="bg-blue-600 text-white text-xl p-2 rounded-xl">
      Parent Container
    </div>
    <div class="p-2 m-2 bg-whit">{slots.default && slots.default()}</div>
  </div>
));

export const ChildComponent = defineComponent((props, ctx) => {
  const count = inject('count') as any;

  return () => {
    console.log('ChildComponent render', { props, ctx, count });

    return (
      <div class="bg-red-200 ring-yellow-400 ring-2 p-2 m-2 rounded-xl">
        <div class="bg-red-600 text-white text-xl p-2 rounded-xl">
          Child Component
        </div>
        <div class="p-2 m-2 bg-white text-blue-400 text-3xl font-extrabold">
          {count.value}
        </div>
      </div>
    );
  };
});

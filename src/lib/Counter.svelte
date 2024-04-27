<!-- >  <style> with @apply because -->
<svelte:options customElement="my-element" />

<script lang="ts">
  export let name = "N/A";
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div class="wrapper">
  <div class="content">This is your web component!</div>
  <div>
    <button on:click={increment}>Count is {count}</button>
  </div>
  <div class="content">
    <slot />
  </div>
  <div class="content">
    Name Prop: {name}
  </div>
</div>

<style lang="postcss">
  .wrapper {
    @apply border border-black rounded p-4 bg-gray-500 shadow flex flex-col gap-2;
  }

  .content {
    @apply text-white;
  }
</style>

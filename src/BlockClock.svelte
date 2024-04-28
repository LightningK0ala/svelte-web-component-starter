<!-- >  <style> with @apply because -->
<svelte:options customElement="my-element" />

<script lang="ts">
  import Icon from "./lib/Icon.svelte";
  import Indicator from "./lib/Indicator.svelte";
  import Title from "./lib/Title.svelte";
  import Subtitle from "./lib/Subtitle.svelte";
  import Ring from "./lib/Ring.svelte";

  export let sync = "0";
  $: fill = parseInt(sync) * 3.6;
</script>

<div class="wrapper">
  <div>
    <Icon />
  </div>
  <div>
    <Title />
  </div>
  <div>
    <Subtitle />
  </div>
  <div>
    <Indicator />
  </div>
  <div class="ring-container">
    <Ring {fill} color="orange" />
  </div>
</div>

<style lang="postcss">
  :global(*) {
    @apply font-sans;
    @apply text-white;
  }

  .wrapper {
    /* Border */
    @apply border-4 border-gray-500 border-solid rounded-full;
    /* Size */
    @apply w-52 h-52;
    /* Shape */
    @apply rounded-full;
    /* Container */
    @apply flex flex-col relative;
    /* Alignment */
    @apply items-center justify-center;
    /* Spacing */
    @apply gap-4 p-5;
    /* Color */
    @apply bg-black;
  }

  .ring-container {
    position: absolute;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; /* Ensure ring is behind the content */
  }
</style>

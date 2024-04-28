import "./app.css";
import BlockClock from "./BlockClock.svelte";

const app = new BlockClock({
  target: document.getElementById("app")!,
});

export default app;

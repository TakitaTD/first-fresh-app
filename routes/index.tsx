/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      Welcome to my first Fresh Deno website <Counter start={30} />
      VSCode keeps giving me error ffs
    </div>
  );
}

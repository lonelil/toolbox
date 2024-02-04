import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Button } from "@fluentui/react-components";
import MainLayout from "../components/layout/main";

export default function Home() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <MainLayout className="container">
      <h1 className="text-2xl font-semibold">Welcome to utils!</h1>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          className="text-black"
        />
        <Button type="submit">Greet</Button>
      </form>

      <p>{greetMsg}</p>
    </MainLayout>
  );
}

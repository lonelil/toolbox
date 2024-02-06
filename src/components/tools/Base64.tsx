import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Base64Types = "encode" | "decode";

export default function Base64() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [type, setType] = useState<Base64Types>("encode");

  useEffect(() => {
    try {
      setOutput(type === "encode" ? btoa(input) : atob(input));
    } catch (e) {
      console.error(e);
      setOutput("Invalid Base64 string!");
    }
  }, [input, type]);

  return (
    <>
      <Select onValueChange={(v: Base64Types) => setType(v)}>
        <SelectTrigger className="mb-4 w-[180px]">
          <SelectValue placeholder="Encode" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="encode">Encode</SelectItem>
          <SelectItem value="decode">Decode</SelectItem>
        </SelectContent>
      </Select>
      <div className="grid min-h-96 grid-cols-2 gap-4">
        <Textarea
          placeholder="Input"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <Textarea placeholder="Output" value={output} />
      </div>
    </>
  );
}

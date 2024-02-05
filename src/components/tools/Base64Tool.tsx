import { useState } from "react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Base64Types = "encode" | "decode";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [type, setType] = useState<Base64Types>("encode");

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
        <Textarea
          placeholder="Output"
          value={type === "encode" ? btoa(input) : atob(input)}
        />
      </div>
    </>
  );
}

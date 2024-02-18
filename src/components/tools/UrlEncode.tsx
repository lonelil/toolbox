import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type UrlEncodeTypes = "encode" | "decode";

export default function UrlEncode() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [type, setType] = useState<UrlEncodeTypes>("encode");

  useEffect(() => {
    try {
      setOutput(type === "encode" ? encodeURIComponent(input) : decodeURIComponent(input));
    } catch (e) {
      console.error(e);
      setOutput("Invalid Base64 string!");
    }
  }, [input, type]);

  return (
    <>
      <Select onValueChange={(v: UrlEncodeTypes) => setType(v)}>
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

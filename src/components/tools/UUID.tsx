import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import { useCopyToClipboard } from "react-use";

export default function UUID() {
  const [uuid, setUUID] = useState(uuidv4());
  const [_, copyToClipboard] = useCopyToClipboard();

  return (
    <>
      <Textarea
        placeholder="Original"
        value={uuid}
        readOnly
        className="mb-4 min-h-96"
      />
      <Button onClick={() => setUUID(uuidv4())} className="mb-2 w-full">
        Generate
      </Button>
      <Button
        onClick={() => copyToClipboard(uuid)}
        className="w-full"
        variant={"secondary"}
      >
        Copy
      </Button>
    </>
  );
}

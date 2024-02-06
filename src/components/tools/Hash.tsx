import * as CryptoJS from "crypto-js";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCopyToClipboard } from "react-use";

type HashFunction = (input: string) => string;

type HashFunctions = {
  [key: string]: HashFunction;
};

type Hashes = {
  md5: string;
  sha1: string;
  sha224: string;
  sha256: string;
  sha384: string;
  sha512: string;
  keccak256: string;
};

export default function Hash() {
  const [hashes, setHashes] = useState({
    md5: "",
    sha1: "",
    sha224: "",
    sha256: "",
    sha384: "",
    sha512: "",
    keccak256: "",
  });
  const [_, copyToClipboard] = useCopyToClipboard();

  const hashFunctions: HashFunctions = {
    md5: (input: string) => CryptoJS.MD5(input).toString(),
    sha1: (input: string) => CryptoJS.SHA1(input).toString(),
    sha224: (input: string) => CryptoJS.SHA224(input).toString(),
    sha256: (input: string) => CryptoJS.SHA256(input).toString(),
    sha384: (input: string) => CryptoJS.SHA384(input).toString(),
    sha512: (input: string) => CryptoJS.SHA512(input).toString(),
    keccak256: (input: string) =>
      CryptoJS.SHA3(input, { outputLength: 256 }).toString(),
  };

  const generateHashes = (input: string): void => {
    const newHashes: Hashes = {
      md5: "",
      sha1: "",
      sha224: "",
      sha256: "",
      sha384: "",
      sha512: "",
      keccak256: "",
    };

    for (const [hashName, hashFunction] of Object.entries(hashFunctions)) {
      try {
        newHashes[hashName as keyof Hashes] = input
          ? hashFunction(input).toString()
          : "";
      } catch (_) {
        newHashes[hashName as keyof Hashes] = "";
      }
    }

    setHashes(newHashes);
  };

  return (
    <>
      <div className="grid min-h-96 grid-cols-2 gap-4">
        <Textarea
          placeholder="Input"
          onChange={(e) => generateHashes(e.currentTarget.value)}
        />
        <div className="space-y-2">
          {Object.entries(hashes).map(([type, hash]) => {
            return (
              <div key={type}>
                <Label htmlFor={type}>{type}</Label>
                <div className="flex gap-2">
                  <Input type="text" id="name" value={hash} />
                  <Button onClick={() => copyToClipboard(hash)}>Copy</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

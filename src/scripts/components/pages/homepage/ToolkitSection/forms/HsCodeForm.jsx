import { useState } from "react";
import { Button } from "../../../../../../styles/button";
import { Input } from "../../../../../../styles/input";

export default function HsCodeForm() {
  const [value, setValue] = useState("");

  const handleHsCodeGenerator = () => {
    const targetUrl = `/hs-code-generator?productDescription=${encodeURIComponent(value)}`;
    window.location.href = targetUrl;
  };

  return (
    <div className="flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg max-w-[500px]">
      <Input
        multiline
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Describe your product"
      />

      <div className="flex flex-row justify-between">
        <div
          className={`flex justify-end text-sm ${value.length >= 15 ? "text-green-600" : "text-red-500"}`}
        >
          <span>{value.length}/15</span>
          <span>&nbsp;characters remaining</span>
        </div>

        <Button
          variant="primary"
          disabled={value.length < 15}
          className="self-end"
          onClick={handleHsCodeGenerator}
        >
          Generate HS Code
        </Button>
      </div>
    </div>
  );
}

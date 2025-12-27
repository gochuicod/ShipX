import { useState } from "react";
import { Button } from "../../../../../../styles/button";
import { Input } from "../../../../../../styles/input";

export default function ClaimForm() {
  const [tracking, setTracking] = useState("");
  const [description, setDescription] = useState("");

  const handleClaimForm = () => {
    const targetUrl = `/file-a-claim?trackingNumber=${encodeURIComponent(tracking)}&description=${encodeURIComponent(description)}`;
    window.location.href = targetUrl;
  };

  return (
    <div className="flex flex-col gap-3 bg-white p-3 rounded-[8px] shadow-lg max-w-[500px]">
      <Input
        value={tracking}
        onChange={(e) => setTracking(e.target.value)}
        placeholder="Enter tracking number (min 8 characters)"
      />

      <Input
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Provide as much detail as possible about your claim..."
      />

      <div className="flex flex-row justify-between">
        <div
          className={`flex justify-end text-sm ${description.length >= 25 ? "text-green-600" : "text-red-500"}`}
        >
          <span>{description.length}/25</span>
          <span>&nbsp;characters remaining</span>
        </div>

        <Button
          variant="primary"
          className="self-end"
          disabled={description.length < 25 || tracking < 2}
          onClick={handleClaimForm}
        >
          Submit Claim
        </Button>
      </div>
    </div>
  );
}

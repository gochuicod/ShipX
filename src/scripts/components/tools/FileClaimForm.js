import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { TRANSLATIONS } from "./translations";

const FileClaimForm = () => (
  <div className="w-full flex flex-col gap-4">
    <Input
      label="Tracking Number"
      id="claimTracking"
      required
      placeholder="Enter tracking number (min 8 characters)"
      className="bg-gray-50" // Override for visual hierarchy
    />
    <TextArea
      label="Description"
      id="claimDesc"
      required
      placeholder="Please provide as much detail as possible about your claim..."
    />
    <div className="flex justify-end mt-2">
      <Button>{TRANSLATIONS["btn.continue"]}</Button>
    </div>
  </div>
);

export default FileClaimForm;

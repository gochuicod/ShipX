import TextArea from "./TextArea";
import Button from "./Button";
import { TRANSLATIONS } from "./translations";

const HSCodeForm = () => (
  <div className="w-full flex flex-col gap-6">
    <TextArea
      label="Product Description"
      id="productDesc"
      required
      subtitle="Provide a detailed description of your product"
      placeholder="e.g., 'Men's leather dress shoes with rubber soles'."
    />
    <div className="flex justify-end">
      <Button>{TRANSLATIONS["btn.continue"]}</Button>
    </div>
  </div>
);

export default HSCodeForm;

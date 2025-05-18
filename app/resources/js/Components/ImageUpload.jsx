import { useState } from "react";
import { Input } from "@/components/ui/input";
import InputError from "./InputError";

export function ImageUpload({ imagePath, onChangeImage, errorMessage }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
      if (onChangeImage) onChangeImage(file, reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      <Input type="file" accept="image/*" onChange={handleChange} className="dark:bg-[#040529]"/>
      {errorMessage && <InputError message={errorMessage} className="mt-2 text-red-600" />}
      {(previewUrl || imagePath) && (
        <img
          src={previewUrl ?? imagePath}
          alt="Preview"
          className="w-40 h-40 object-cover rounded-lg border"
        />
      )}
    </div>
  );
}

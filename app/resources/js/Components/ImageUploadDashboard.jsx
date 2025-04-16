import { useState } from "react";
import { Input } from "./ui/input";
import { IconPreviewUploadImage, UploadFileForDashboardIcon } from "./IconAdmin";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import { cn } from "@/lib/utils";

function ImageUploadDashboard({ imagePath, onChangeImage, errorMessage, name, classNameForBG, classNameForInput }) {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileSize, setFileSize] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
            if (onChangeImage) onChangeImage(file, reader.result);
        };
        reader.readAsDataURL(file);

        setFileSize((file.size / (1024 * 1024)).toFixed(2));
    };

    return (
        <>
            <div className="flex flex-col gap-5">
                <InputLabel className="" >
                    <div className={cn("flex flex-col gap-5 justify-center items-center border-[#6D98F9] border-2 border-dashed p-16 cursor-pointer rounded-xl", classNameForBG)}>
                        <UploadFileForDashboardIcon />
                        <Input type="file" accept="image/*" onChange={handleChange}  name={name} className={cn("hidden", classNameForInput )} />
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <p className="font-bold text-[14px] text-[#5E5E5E]">Choose a file or drag & drop it here</p>
                            <p className="text-[14px] font-medium text-[#ACACAC]">JPG, PNG, max 2MB </p>
                        </div>
                    </div>
                </InputLabel>
                {imagePath?.name && (
                    <div className="flex flex-row gap-4 items-center bg-[#ECF1FC] px-3 py-2">
                        <IconPreviewUploadImage />
                        <div className="flex flex-col gap-2">
                            <p className="text-[14px] font-medium text-[#ACACAC]">{imagePath?.name}</p>
                            <p className="text-[14px] text-[#ACACAC]">{fileSize} MB</p>
                        </div>
                    </div>
                )}
                {errorMessage && <InputError message={errorMessage} className="mt-2 text-red-600" />}
            </div>
        </>
    );
}

export default ImageUploadDashboard;

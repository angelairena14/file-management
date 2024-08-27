import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function UploadFile() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  useEffect(() => {
    if (file) console.log(file);
  }, [file]);

  return (
    <div className="w-3/4 flex flex-col p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full mb-4 p-2 bg-white border border-gray-300 rounded"
      />
      <Button variant="contained" color="primary" className="w-24">
        Save
      </Button>
    </div>
  );
}

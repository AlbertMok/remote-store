"use client";
import { Input } from "@/components/ui/input";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, TrashIcon } from "lucide-react";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = () => {
    if (inputRef.current && inputRef.current.files) {
      const file = inputRef.current.files[0];
      if (file) {
        console.log(files);
        setFiles([...files, file]);
        console.log("File Name:", file.name);
        console.log("File Size:", file.size / 1024 / 1024, "MB");
      }
    }
  };

  useQuery({
    queryKey: ["files"],
    queryFn: async () => {
      const response = await request.get("/");
      console.log(response.data);
      return response.data;
    },
  });

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-[100px] h-[100px] flex items-center justify-center rounded-xl border-[2px] border-dashed hover:border-blue-400 transition-[border-color] duration-300">
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={() => handleFileChange()}
        />
        <button
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <span>Upload</span>
        </button>
      </div>

      {files.map((file, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 100 }}
          className="block rounded-xl max-w-[120px] h-[140px] overflow-hidden border-dashed border-[2px] relative"
        >
          <div className="flex justify-center items-center gap-3 w-full h-full hover:opacity-40 opacity-0 transition-opacity duration-300 bg-neutral-300 absolute z-10">
            <button>
              <EyeIcon size={20} />
            </button>
            <button
              onClick={() => {
                setFiles(files.filter((_, i) => i !== index));
              }}
            >
              <TrashIcon size={20} />
            </button>
          </div>

          <div className="">
            <span>{index}</span>
            <span>{file.name}</span>
            <span>{file.size}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

import { UploadButto, UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import Image from "next/image";
import { UploadButton } from "@uploadthing/react";

export default function Create() {
  const [imageUrl, setImageUrl] = useState("");
  console.log();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setImageUrl(res[0].url);
          alert("Dein Bild ist hochgeladen");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageUrl.length ? (
        <div>
          <Image src={imageUrl} alt="your image" width={300} height={300} />
        </div>
      ) : null}
    </main>
  );
}

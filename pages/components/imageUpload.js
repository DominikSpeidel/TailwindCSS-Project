import { UploadButton } from "@uploadthing/react";
import Image from "next/image";

export default function ImageUpload({ imageUrl, setImageUrl }) {
  return (
    <section className=" max-xl:pt-5 xl:px-20 mx-auto mb-10">
      <div className="flex flex-col xl:items-center">
        <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Dein Rezeptbild
        </h3>
        <div>
          <div className="max-xl:pt-16 max-xl:relative">
            <UploadButton
              className="max-xl:absolute bottom-0 left-0 ut-button:bg-blue-700 "
              endpoint="imageUploader"
              content={{
                allowedContent({ ready, isUploading }) {
                  if (isUploading) return "Dein Bild wird gerade hochgeladen..";
                },
              }}
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImageUrl(res[0].url);
                alert("Dein Bild ist hochgeladen");
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
      </div>
      {imageUrl !== "" ? (
        <div className="mt-4">
          <Image
            src={imageUrl}
            className="w-full h-72 object-cover transform hover:scale-105 duration-500"
            width={800}
            height={600}
            alt="your image"
            priority
          />
        </div>
      ) : null}
    </section>
  );
}

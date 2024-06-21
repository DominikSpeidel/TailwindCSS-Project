import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// Entferne den TypeScript-Typimport
// import type { OurFileRouter } from "~/server/uploadthing";

// Entferne die Typen bei den Funktionsaufrufen
export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();

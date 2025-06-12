// Update the import path below to the correct relative path if needed

import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";
// Import or define your file router type according to your backend setup
import type { FileRouter } from "uploadthing/server";

export type OurFileRouter = FileRouter;

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
import React, { useContext } from "react";
import { InstructorContext } from "@/context/InstructorContext";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { mediaDeleteService, mediaUploadService } from "@/services";
import MediaProgressBar from "../shared/MediaProgressBar";
import { Button } from "../ui/button";
import Swal from "sweetalert2";

const CourseSettings = () => {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);

  // Extract public_id from Cloudinary URL
  const extractPublicId = (url) => {
    if (!url) return null;
    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split("/");

      const uploadIndex = pathParts.indexOf("upload");
      return pathParts
        .slice(uploadIndex + 2)
        .join("/")
        .split(".")[0];
    } catch (e) {
      console.error("Error extracting public_id:", e);
      return null;
    }
  };

  const handleImageUploadChange = async (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append("file", selectedImage);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          imageFormData,
          setMediaUploadProgressPercentage
        );
        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response.data.url,
          });
          setMediaUploadProgress(false);
        }
      } catch (e) {
        console.error("Image upload failed:", e);
        setMediaUploadProgress(false);
      }
    }
  };

  const handleReplaceImage = async () => {
    try {
      const publicId = extractPublicId(courseLandingFormData.image);
      if (!publicId) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Could not extract image ID for deletion",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }

      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (!result.isConfirmed) return;

      const deleteResponse = await mediaDeleteService(publicId);

      if (deleteResponse?.success) {
        setCourseLandingFormData({
          ...courseLandingFormData,
          image: "",
        });
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your image has been deleted.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to delete image from server",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch (error) {
      console.error("Error replacing image:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while deleting the image",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl font-bold text-primary"}>
          Course Settings
        </CardTitle>
      </CardHeader>
      <div className="px-6">
        {mediaUploadProgress ? (
          <MediaProgressBar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        ) : null}
      </div>
      <CardContent>
        {courseLandingFormData?.image ? (
          <div>
            <Button onClick={handleReplaceImage} className={"mb-2"}>
              Replace Image
            </Button>
            <img src={courseLandingFormData.image} />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Label>Upload Course Image</Label>
            <Input
              onChange={handleImageUploadChange}
              type="file"
              accept="image/*"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseSettings;

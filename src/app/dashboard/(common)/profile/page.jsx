"use client";
import axios from "axios";
import { CameraIcon, Edit2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const { data: session } = useSession();
  const [userProfileInfo, setUserProfileInfo] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [about, setAbout] = useState("");
  const [userRole, setRole] = useState("");
  const [userEmailUpdate, setUserEmail] = useState("");
  const [userName, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const userEmail = session?.user?.email;

  useEffect(() => {
    if (!userEmail) return;

    const fetchProfileData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/${userEmail}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user profile");
        }
        const data = await res.json();
        setUserProfileInfo(data?.data);
        setProfileImage(data?.data?.image); // <- persist image on refresh
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfileData();
  }, [userEmail]);

  if (!userProfileInfo) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading profile...</p>
      </div>
    );
  }

  const { name, email, role } = userProfileInfo;

  const handleSaveChanges = async () => {
    try {
      const res = await fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmailUpdate,
          about: about,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update profile");
      }

      const result = await res.json();
      setUserProfileInfo(result.data);
      setProfileImage(result.data?.image); // update image if changed from backend
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "profile_images");
    data.append("cloud_name", "dcibmye5q");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dcibmye5q/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const imageData = await res.json();
    const imageUrl = imageData.secure_url;

    try {
      const response = await axios.put(
        `http://localhost:5000/users/image/${userEmail}`,
        { image: imageUrl }
      );

      setProfileImage(imageUrl); // <- set uploaded image to state immediately
      toast.success("✅ Image uploaded successfully:");
    } catch (error) {
      toast.error("❌ Error uploading image:");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded shadow overflow-hidden">
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative">
        <button className="absolute right-4 bottom-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all">
          <CameraIcon />
        </button>
      </div>

      {/* Profile Content */}
      <div className="px-8 pb-8 relative">
        <div className="absolute -top-16 left-8 group">
          <div className="relative">
            <img
              src={
                profileImage || "https://randomuser.me/api/portraits/men/32.jpg"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
            />
            <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <CameraIcon />
            </label>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {name || "N/A"}
              </h1>
              <p className="text-gray-500 text-sm mt-1">{role || "User"}</p>
              <p className="text-gray-600 mt-1">
                {email || "No email provided"}
              </p>
            </div>
            <button
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
              onClick={() => {
                setName(name);
                setRole(role);
                setAbout(userProfileInfo.about || "");
                setUserEmail(email);
                setIsEditModalOpen(true);
              }}
            >
              <Edit2Icon />
              <span>Edit profile</span>
            </button>
          </div>

          {/* About Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">About</h2>
            <p className="text-gray-600 mt-2">
              {userProfileInfo.about || "No information provided"}
            </p>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-200 rounded-lg p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 px-2 py-1 block w-full rounded-md border bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  value={userEmailUpdate}
                  onChange={(e)=>setUserEmail(e.target.value)}
                  className="mt-1 px-2 py-1 block w-full rounded-md border bg-gray-100 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  value={userRole}
                  disabled
                  className="mt-1 px-2 py-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  About
                </label>
                <textarea
                  placeholder="Write something about you!"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  rows={4}
                  className="mt-1 px-2 block w-full rounded-md border border-gray-300 bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

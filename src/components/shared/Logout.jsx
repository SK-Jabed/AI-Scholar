import { doLogout } from "@/app/actions";
import { LogOutIcon } from "lucide-react";
import React from "react";

export default function Logout() {
  return (
    <button
      type="submit"
      onClick={doLogout}
      className="block py-3 px-5 w-full text-red-600 hover:bg-red-100 hover:text-red-900 transition-colors duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-2 pl-2">
        <span>Logout</span>
        <LogOutIcon />
      </div>
    </button>
  );
}

import { doLogout } from "@/app/actions";
import { LogOutIcon } from "lucide-react";
import React from "react";

export default function Logout() {
  return (
    <button
      type="submit"
      onClick={doLogout}
      className="py-3 px-7 border-2 rounded-xl bg-red-500 text-white hover:bg-red-700 transition-colors duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-2 pl-2">
        <span>Logout</span>
        <LogOutIcon />
      </div>
    </button>
  );
}

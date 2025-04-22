"use client";

export default function CommonLayout({ children }) {
  return (
    <div>
      {/* Page Content */}
      <div className="p-4 mx-auto md:p-6">{children}</div>
    </div>
  );
}
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0E2A46] mb-3">Profile</h1>
        <div className="p-6 border rounded-xl bg-white">
          <p className="text-gray-600 mb-4">No profile data found.</p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2.5 bg-[#2FC7A1] text-white rounded-lg font-semibold hover:bg-[#28B895]"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2.5 bg-gray-100 text-[#0E2A46] rounded-lg font-semibold hover:bg-gray-200"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0E2A46] mb-3">Profile</h1>
      <p className="text-gray-600 mb-6">Your account details stored on this device.</p>

      <div className="p-6 border rounded-xl bg-white space-y-4">
        <div>
          <p className="text-sm text-gray-500">User ID</p>
          <p className="text-lg font-semibold text-[#0E2A46] break-all">{user.id || user._id}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-semibold text-[#0E2A46]">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="text-lg font-semibold text-[#0E2A46] capitalize">{user.role}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-semibold text-[#0E2A46] break-all">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-lg font-semibold text-[#0E2A46]">{user.phone || "—"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;



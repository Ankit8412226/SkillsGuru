import { ArrowLeft, Calendar, Edit2, Image, LogOut, Mail, Phone, Save, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [editedData, setEditedData] = useState({
    name: '',
    phone: '',
    bio: '',
    avatarUrl: ''
  });
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/login');
        return;
      }

      const res = await api.get(`/auth/me`);
      const data = res.data?.user || res.data;
      setProfileData(data);
      setEditedData({
        name: data?.name || '',
        phone: data?.phone || '',
        bio: data?.bio || '',
        avatarUrl: data?.avatarUrl || ''
      });
      setLoading(false);
    } catch (err) {
      console.error("Error fetching profile:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        navigate('/login');
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/login');
  };

  const handleSave = async () => {
    if (!editedData.name || editedData.name.trim() === '') {
      alert("Name is required!");
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem("token");

      const response = await api.put(
        `/user/me`,
        {
          name: editedData.name.trim(),
          phone: editedData.phone.trim(),
          bio: editedData.bio.trim(),
          avatarUrl: editedData.avatarUrl.trim()
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      localStorage.setItem('name', editedData.name.trim());

      if (response.data) {
        setProfileData(response.data);
        setEditedData({
          name: response.data.name || '',
          phone: response.data.phone || '',
          bio: response.data.bio || '',
          avatarUrl: response.data.avatarUrl || ''
        });
      } else {
        const updatedData = { ...profileData, ...editedData };
        setProfileData(updatedData);
      }

      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);

      if (err.response) {
        const errorMessage = err.response.data?.message || err.response.data?.error || "Failed to update profile";
        alert(`Error: ${errorMessage}`);
      } else if (err.request) {
        alert("No response from server. Please check your connection.");
      } else {
        alert("Failed to update profile. Please try again.");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (profileData) {
      setEditedData({
        name: profileData.name || '',
        phone: profileData.phone || '',
        bio: profileData.bio || '',
        avatarUrl: profileData.avatarUrl || ''
      });
    }
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-all mb-6 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Dashboard</span>
            </button>
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                My Profile
              </h1>
            </div>
            <p className="text-gray-600 mt-2 ml-16">Manage your personal information and preferences</p>
          </div>

          {/* Profile Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header Section with Gradient */}
            <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-12 text-center overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative">
                <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl border-4 border-white/50 overflow-hidden transform hover:scale-105 transition-transform">
                  {(isEditing ? editedData.avatarUrl : profileData?.avatarUrl) ? (
                    <img
                      src={isEditing ? editedData.avatarUrl : profileData?.avatarUrl}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.avatar-fallback').style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <span
                    className="avatar-fallback text-6xl font-bold text-emerald-600 flex items-center justify-center w-full h-full"
                    style={{ display: (isEditing ? editedData.avatarUrl : profileData?.avatarUrl) ? 'none' : 'flex' }}
                  >
                    {(isEditing ? editedData.name : profileData?.name)?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {isEditing ? editedData.name || 'Your Name' : profileData?.name}
                </h2>
                <p className="text-emerald-50 text-lg">{profileData?.email}</p>

                {/* Status Badges */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  {profileData?.isVerified ? (
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">
                      ✓ Verified Account
                    </span>
                  ) : (
                    <span className="px-4 py-1.5 bg-orange-500/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">
                      ⚠ Unverified
                    </span>
                  )}
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30 capitalize">
                    {profileData?.role || 'Student'}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10">
              {/* Edit/Save Buttons */}
              <div className="flex justify-end mb-8">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Edit2 className="w-5 h-5" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {saving ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-5 h-5" />
                          Save Changes
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={saving}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <X className="w-5 h-5" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Information Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Name */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <User className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-semibold text-gray-600 block mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      {!isEditing ? (
                        <p className="text-lg font-medium text-gray-900">
                          {profileData?.name}
                        </p>
                      ) : (
                        <input
                          type="text"
                          value={editedData.name}
                          onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-400 border-2 border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                          required
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-semibold text-gray-600 block mb-2">
                        Email Address
                      </label>
                      <p className="text-lg font-medium text-gray-900">
                        {profileData?.email}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">🔒 Email cannot be changed</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Phone className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-semibold text-gray-600 block mb-2">
                        Phone Number
                      </label>
                      {!isEditing ? (
                        <p className="text-lg font-medium text-gray-900">
                          {profileData?.phone || 'Not provided'}
                        </p>
                      ) : (
                        <input
                          type="tel"
                          value={editedData.phone}
                          onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
                          placeholder="Enter phone number"
                          className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-400 border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Avatar URL */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Image className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-semibold text-gray-600 block mb-2">
                        Avatar URL
                      </label>
                      {!isEditing ? (
                        <p className="text-sm font-medium text-gray-900 break-all line-clamp-2">
                          {profileData?.avatarUrl || 'Not provided'}
                        </p>
                      ) : (
                        <input
                          type="url"
                          value={editedData.avatarUrl}
                          onChange={(e) => setEditedData({ ...editedData, avatarUrl: e.target.value })}
                          placeholder="Enter avatar image URL"
                          className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-400 border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Bio - Full Width */}
                <div className="lg:col-span-2 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <User className="w-6 h-6 text-teal-500" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-semibold text-gray-600 block mb-2">
                        Bio
                      </label>
                      {!isEditing ? (
                        <p className="text-lg font-medium text-gray-900">
                          {profileData?.bio || 'No bio provided'}
                        </p>
                      ) : (
                        <textarea
                          value={editedData.bio}
                          onChange={(e) => setEditedData({ ...editedData, bio: e.target.value })}
                          placeholder="Tell us about yourself..."
                          rows="4"
                          className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-400 border-2 border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Join Date */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Calendar className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-semibold text-gray-600 block mb-2">
                        Member Since
                      </label>
                      <p className="text-lg font-medium text-gray-900">
                        {profileData?.createdAt ? new Date(profileData.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Last Updated */}
                {profileData?.updatedAt && (
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Calendar className="w-6 h-6 text-pink-500" />
                      </div>
                      <div className="flex-1">
                        <label className="text-sm font-semibold text-gray-600 block mb-2">
                          Last Updated
                        </label>
                        <p className="text-lg font-medium text-gray-900">
                          {new Date(profileData.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Logout Button */}
              <div className="mt-10 pt-8 border-t-2 border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
                >
                  <LogOut className="w-5 h-5" />
                  Logout from Account
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Need help? Contact support at <span className="text-emerald-600 font-semibold">support@skillguru.com</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

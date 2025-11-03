import { ArrowLeft, Calendar, Edit2, Mail, Save, Shield, User, X } from 'lucide-react';
import { ArrowLeft, Mail, User, Calendar, Shield, Edit2, Save, X, LogOut, Phone, Image } from 'lucide-react';
import React, { useEffect, useState } from 'react';
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
        name: res.data.name || '',
        phone: res.data.phone || '',
        bio: res.data.bio || '',
        avatarUrl: res.data.avatarUrl || ''
        name: data?.name || '',
        phone: data?.phone || '',
        bio: data?.bio || ''
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
    // Validate fields
    if (!editedData.name || editedData.name.trim() === '') {
      alert("Name is required!");
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem("token");

      console.log("Sending update request with data:", editedData);

      const response = await api.put(
        `${import.meta.env.VITE_API_BASE_URL}/user/me`,
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

      console.log("Update response:", response);

      // Update localStorage
      localStorage.setItem('name', editedData.name.trim());

      // Update profile data with the response
      if (response.data) {
        setProfileData(response.data);
        setEditedData({
          name: response.data.name || '',
          phone: response.data.phone || '',
          bio: response.data.bio || '',
          avatarUrl: response.data.avatarUrl || ''
        });
      } else {
        // If no response data, use the edited data
        const updatedData = { ...profileData, ...editedData };
        setProfileData(updatedData);
      }

      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      console.error("Error response:", err.response);

      // More specific error messages
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
    // No backend endpoint for updating profile yet; update local state for now
    localStorage.setItem('name', editedData.name);
    setProfileData({ ...profileData, ...editedData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original profile data
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gray-50">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-gray-900 hover:text-emerald-600 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              My Profile
            </h1>
          </div>

          {/* Profile Card */}
          <div className="bg-white/95 backdrop-blur-sm border-gray-200 rounded-xl border shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 text-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden">
                {(isEditing ? editedData.avatarUrl : profileData?.avatarUrl) ? (
                  <img
                    src={isEditing ? editedData.avatarUrl : profileData?.avatarUrl}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <span
                  className="text-5xl font-bold text-emerald-600"
                  style={{ display: (isEditing ? editedData.avatarUrl : profileData?.avatarUrl) ? 'none' : 'flex' }}
                >
                  {(isEditing ? editedData.name : profileData?.name)?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {isEditing ? editedData.name || 'Your Name' : profileData?.name}
              </h2>
              <p className="text-emerald-50">{profileData?.email}</p>
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Edit/Save Buttons */}
              <div className="flex justify-end mb-6">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {saving ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          Save
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={saving}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Information */}
              <div className="space-y-6">
                {/* Name */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <User className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    {!isEditing ? (
                      <p className="text-lg text-gray-900">
                        {profileData?.name}
                      </p>
                    ) : (
                      <input
                        type="text"
                        value={editedData.name}
                        onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300 border focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        required
                      />
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                      Email Address
                    </label>
                    <p className="text-lg text-gray-900">
                      {profileData?.email}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                      Phone Number
                    </label>
                    {!isEditing ? (
                      <p className="text-lg text-gray-900">
                        {profileData?.phone || 'Not provided'}
                      </p>
                    ) : (
                      <input
                        type="tel"
                        value={editedData.phone}
                        onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300 border focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    )}
                  </div>
                </div>

                {/* Avatar URL */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Image className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                      Avatar URL
                    </label>
                    {!isEditing ? (
                      <p className="text-lg text-gray-900 break-all">
                        {profileData?.avatarUrl || 'Not provided'}
                      </p>
                    ) : (
                      <input
                        type="url"
                        value={editedData.avatarUrl}
                        onChange={(e) => setEditedData({ ...editedData, avatarUrl: e.target.value })}
                        placeholder="Enter avatar image URL"
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300 border focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <User className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                      Bio
                    </label>
                    {!isEditing ? (
                      <p className="text-lg text-gray-900">
                        {profileData?.bio || 'No bio provided'}
                      </p>
                    ) : (
                      <textarea
                        value={editedData.bio}
                        onChange={(e) => setEditedData({ ...editedData, bio: e.target.value })}
                        placeholder="Tell us about yourself"
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300 border focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    )}
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                      Role
                    </label>
                    <p className="text-lg text-gray-900 capitalize">
                      {profileData?.role || 'Student'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Role cannot be changed</p>
                  </div>
                </div>

                {/* Verification Status */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                      Verification Status
                    </label>
                    <div className="flex items-center gap-2">
                      {profileData?.isVerified ? (
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                          ✓ Verified
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                          ⚠ Not Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Join Date */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                      Member Since
                    </label>
                    <p className="text-lg text-gray-900">
                      {profileData?.createdAt ? new Date(profileData.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Last Updated */}
                {profileData?.updatedAt && (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Calendar className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-600 block mb-1">
                        Last Updated
                      </label>
                      <p className="text-lg text-gray-900">
                        {new Date(profileData.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                )}

                {/* Metadata (if exists) */}
                {profileData?.metadata && Object.keys(profileData.metadata).length > 0 && (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Shield className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-600 block mb-1">
                        Additional Information
                      </label>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <pre className="text-sm text-gray-700 overflow-x-auto">
                          {JSON.stringify(profileData.metadata, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Logout Button */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

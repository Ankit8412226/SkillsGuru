import { ArrowLeft, Mail, User, Calendar, Shield, Edit2, Save, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const ProfilePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: '',
    phone: '',
    bio: ''
  });
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/login');
        return;
      }

      const res = await api.get(`${import.meta.env.VITE_API_BASE_URL}/user/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setProfileData(res.data);
      setEditedData({
        name: res.data.name || '',
        phone: res.data.phone || '',
        bio: res.data.bio || ''
      });
      setLoading(false);
    } catch (err) {
      console.error("Error fetching profile:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
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
    navigate('/login');
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await api.put(
        `${import.meta.env.VITE_API_BASE_URL}/user/me`,
        editedData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      localStorage.setItem('name', editedData.name);
      setProfileData({ ...profileData, ...editedData });
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  const handleCancel = () => {
    setEditedData({
      name: profileData.name || '',
      phone: profileData.phone || '',
      bio: profileData.bio || ''
    });
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative`}>
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
              className={`flex items-center gap-2 ${darkMode ? 'text-white hover:text-emerald-400' : 'text-gray-900 hover:text-emerald-600'} transition-colors mb-4`}
            >
              <ArrowLeft className="w-5 h-5 text-black" />
              <span className="font-medium text-black">Back to Dashboard</span>
            </button>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-black' : 'text-gray-900'}`}>
              My Profile
            </h1>
          </div>

          {/* Profile Card */}
          <div className={`${darkMode ? 'bg-slate-800/95 backdrop-blur-sm border-slate-700' : 'bg-white/95 backdrop-blur-sm border-gray-200'} rounded-xl border shadow-xl overflow-hidden`}>
            {/* Header Section */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 text-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-5xl font-bold text-emerald-600">
                  {profileData?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              {!isEditing ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-2">{profileData?.name}</h2>
                  <p className="text-emerald-50">{profileData?.email}</p>
                </>
              ) : (
                <input
                  type="text"
                  value={editedData.name}
                  onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                  className="text-2xl font-bold text-center bg-white/20 text-white placeholder-emerald-100 border-2 border-white/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:border-white"
                />
              )}
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
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className={`flex items-center gap-2 px-4 py-2 ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-colors`}
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Information */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-gray-600'} block mb-1`}>
                      Email Address
                    </label>
                    <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {profileData?.email}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <User className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-gray-600'} block mb-1`}>
                      Phone Number
                    </label>
                    {!isEditing ? (
                      <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {profileData?.phone || 'Not provided'}
                      </p>
                    ) : (
                      <input
                        type="tel"
                        value={editedData.phone}
                        onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
                        placeholder="Enter phone number"
                        className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-slate-700 text-white placeholder-slate-400 border-slate-600' : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-emerald-400`}
                      />
                    )}
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-gray-600'} block mb-1`}>
                      Role
                    </label>
                    <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'} capitalize`}>
                      {profileData?.role || 'Student'}
                    </p>
                  </div>
                </div>

                {/* Join Date */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <Calendar className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-gray-600'} block mb-1`}>
                      Member Since
                    </label>
                    <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {profileData?.createdAt ? new Date(profileData.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <User className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <label className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-gray-600'} block mb-1`}>
                      Bio
                    </label>
                    {!isEditing ? (
                      <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {profileData?.bio || 'No bio provided'}
                      </p>
                    ) : (
                      <textarea
                        value={editedData.bio}
                        onChange={(e) => setEditedData({ ...editedData, bio: e.target.value })}
                        placeholder="Tell us about yourself"
                        rows="4"
                        className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-slate-700 text-white placeholder-slate-400 border-slate-600' : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-emerald-400`}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <div className="mt-8 pt-8 border-t border-slate-700">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 bg-teal-600 hover:bg-teal-400 text-white font-semibold rounded-lg transition-colors"
                >
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
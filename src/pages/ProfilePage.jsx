import {
  ArrowLeft,
  Mail,
  User,
  Calendar,
  Shield,
  Edit2,
  Save,
  X,
  LogOut,
  Phone,
  Image,
  MapPin,
  Globe,
  Trash2,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [editedData, setEditedData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    dob: '',
    location: '',
    postalCode: '',
    gender: 'Male',
  });

  const navigate = useNavigate();

  // ✅ Fetch profile dynamically using token
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const res = await api.get(`${import.meta.env.VITE_API_BASE_URL}/user/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = res.data;
      setProfileData(user);
      setEditedData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        address: user.address || '',
        phone: user.phone || '',
        dob: user.dob || '',
        location: user.location || '',
        postalCode: user.postalCode || '',
        gender: user.gender || 'Male',
      });

      setLoading(false);
    } catch (err) {
      console.error('Error fetching profile:', err);
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

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/login');
  };

  // ✅ Save updated user data dynamically
  const handleSave = async () => {
    if (!editedData.firstName.trim() || !editedData.lastName.trim()) {
      alert('First name and last name are required!');
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      const payload = {
        firstName: editedData.firstName.trim(),
        lastName: editedData.lastName.trim(),
        address: editedData.address.trim(),
        phone: editedData.phone.trim(),
        dob: editedData.dob.trim(),
        location: editedData.location.trim(),
        postalCode: editedData.postalCode.trim(),
        gender: editedData.gender,
      };

      const response = await api.put(
        `${import.meta.env.VITE_API_BASE_URL}/user/me`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const updated = response.data;
      setProfileData(updated);
      setEditedData({
        firstName: updated.firstName || '',
        lastName: updated.lastName || '',
        email: updated.email || '',
        address: updated.address || '',
        phone: updated.phone || '',
        dob: updated.dob || '',
        location: updated.location || '',
        postalCode: updated.postalCode || '',
        gender: updated.gender || 'Male',
      });
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating profile:', err);
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Failed to update profile';
      alert(`Error: ${msg}`);
    } finally {
      setSaving(false);
    }
  };

  // ✅ Cancel editing (restore previous data)
  const handleCancel = () => {
    if (profileData) {
      setEditedData({
        firstName: profileData.firstName || '',
        lastName: profileData.lastName || '',
        email: profileData.email || '',
        address: profileData.address || '',
        phone: profileData.phone || '',
        dob: profileData.dob || '',
        location: profileData.location || '',
        postalCode: profileData.postalCode || '',
        gender: profileData.gender || 'Male',
      });
    }
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600 text-lg font-medium">Loading Profile…</p>
      </div>
    );
  }

  // ✅ UI stays the same
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-gray-900 hover:text-emerald-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Dashboard</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-80 bg-white rounded-2xl shadow-sm p-6 h-180">
            {/* Profile Avatar and Info */}
            <div className="text-center mb-8">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-teal-400">
                  {profileData?.avatarUrl ? (
                    <img
                      src={profileData.avatarUrl}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-2xl font-bold text-teal-400">
                      {profileData?.firstName?.[0]?.toUpperCase() || 'U'}
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                  <Edit2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {`${profileData?.firstName || ''} ${profileData?.lastName || ''}`}
              </h2>
              <p className="text-teal-400 font-medium text-sm">
                {profileData?.role || 'Student'}
              </p>
            </div>

            {/* Navigation Menu */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-3 bg-teal-500 hover:bg-teal-500 text-white rounded-lg font-medium">
                <User className="w-5 h-5" />
                <span>Personal Information</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                <Shield className="w-5 h-5" />
                <span>Login & Password</span>
              </div>
              <div
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Top Section */}
            <div className="flex items-center justify-between p-6 ">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Personal Information
                </h3>
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-400 hover:bg-teal-500 text-white rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex items-center gap-2 px-4 py-2 bg-teal-400 hover:bg-teal-500 text-white rounded-[200px] transition-colors disabled:opacity-50"
                    >
                      {saving ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          Save Changes
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={saving}
                      className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-300 text-[#2FC7A1] rounded-[200px] border-2 border-[#2FC7A1] transition-colors disabled:opacity-50"
                    >
                      <X className="w-4 h-4"  />
                      Discard Changes
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Personal Info Form */}
            <div className="p-6">
              {/* Gender */}
              <div className="mb-6">
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={editedData.gender === 'Male'}
                      onChange={(e) =>
                        isEditing && setEditedData({ ...editedData, gender: e.target.value })
                      }
                      disabled={!isEditing}
                      className="w-5 h-5 text-emerald-500 focus:ring-emerald-400"
                    />
                    <span className="text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={editedData.gender === 'Female'}
                      onChange={(e) =>
                        isEditing && setEditedData({ ...editedData, gender: e.target.value })
                      }
                      disabled={!isEditing}
                      className="w-5 h-5 text-emerald-500 focus:ring-emerald-400"
                    />
                    <span className="text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              {/* First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    First Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.firstName}
                      onChange={(e) =>
                        setEditedData({ ...editedData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                      placeholder="First name"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-400">
                      {profileData?.firstName || 'Enter your First Name'}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.lastName}
                      onChange={(e) =>
                        setEditedData({ ...editedData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                      placeholder="Last name"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-400">
                      {profileData?.lastName || 'Enter Your Last Name'}
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              {/* Email (Uneditable) */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-4 py-3 bg-gray-50 rounded-lg text-gray-400">
                    {localStorage.getItem("email") || (
                      <span className="text-gray-400">Enter your email</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 px-3 py-1 bg-teal-400 text-white text-sm font-medium rounded-full">
                    <Shield className="w-4 h-4" />
                    Verified
                  </span>
                </div>
              </div>


              {/* Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.address}
                    onChange={(e) =>
                      setEditedData({ ...editedData, address: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                    placeholder="Enter address"
                  />
                ) : (
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-400">
                    {profileData?.address || 'Enter your Address'}
                  </div>
                )}
              </div>

              {/* Phone & DOB */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedData.phone}
                      onChange={(e) =>
                        setEditedData({ ...editedData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                      placeholder="(123) 456-7890"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-400">
                      {profileData?.phone || 'Enter your Phone Number'}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <div className="relative">
                      <input
                        type="date"
                        value={editedData.dob}
                        onChange={(e) =>
                          setEditedData({ ...editedData, dob: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-400 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                      />
                      {/* <Trash2
                        className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500"
                        onClick={() =>
                          isEditing && setEditedData({ ...editedData, dob: '' })
                        }
                      /> */}
                    </div>
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-400">
                      {profileData?.dob
                        ? new Date(profileData.dob).toLocaleDateString('en-GB')
                        : 'Enter your DOB'}
                    </div>
                  )}
                </div>
              </div>

              {/* Location & Postal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Location
                  </label>
                  {isEditing ? (
                    <div className="relative">
                      <select
                        value={editedData.location}
                        onChange={(e) =>
                          setEditedData({ ...editedData, location: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-400 border border-gray-200 focus:ring-2 focus:ring-emerald-400 appearance-none"
                      >
                        <option value="">Select location</option>
                        <option value="New Delhi, India">New Delhi, India</option>
                        <option value="Atlanta, USA">Atlanta, USA</option>
                        <option value="New York, USA">New York, USA</option>
                        <option value="Los Angeles, USA">Los Angeles, USA</option>
                        <option value="Chicago, USA">Chicago, USA</option>
                      </select>
                      <Globe className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-teal-400" />
                      {profileData?.location || 'Enter your Location'}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Postal Code
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.postalCode}
                      onChange={(e) =>
                        setEditedData({ ...editedData, postalCode: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                      placeholder="Enter postal code"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-400">
                      {profileData?.postalCode || 'Enter Your postal code'}
                    </div>
                  )}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

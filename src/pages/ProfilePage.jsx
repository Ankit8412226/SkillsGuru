import {
  ArrowLeft,
  User,
  Shield,
  Edit2,
  Save,
  X,
  LogOut,
  MapPin,
  Globe,
  Eye,
  EyeOff,
  Check,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import SuccessToast from '../assets/components/SuccessToast';
import FailureToast from '../assets/components/FailureToast';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showToast, setShowToast] = useState(null);
  const [activeSection, setActiveSection] = useState('personal');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showEmailChangeModal, setShowEmailChangeModal] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/login');
  };

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
      setShowToast('success');
      setTimeout(() => setShowToast(null), 3000);
    } catch (err) {
      console.error('Error updating profile:', err);
      setShowToast('error');
      setTimeout(() => setShowToast(null), 3000);
    } finally {
      setSaving(false);
    }
  };

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

  const getPasswordStrength = () => {
    const password = passwordData.newPassword;
    let strength = 0;
    const checks = {
      length: password.length >= 8,
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    if (checks.length) strength += 33;
    if (checks.number) strength += 33;
    if (checks.special) strength += 34;

    return { strength, checks };
  };

  const { strength, checks } = getPasswordStrength();

  const handlePasswordUpdate = async () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      alert('Please fill in all password fields');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      await api.put(
        `${import.meta.env.VITE_API_BASE_URL}/user/password`,
        {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setShowToast('success');
      setTimeout(() => setShowToast(null), 3000);
    } catch (err) {
      console.error('Error updating password:', err);
      setShowToast('error');
      setTimeout(() => setShowToast(null), 3000);
    } finally {
      setSaving(false);
    }
  };

  const handleEmailChange = async () => {
    if (!newEmail.trim()) {
      alert('Please enter a new email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      await api.put(
        `${import.meta.env.VITE_API_BASE_URL}/user/email`,
        { email: newEmail },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      localStorage.setItem('email', newEmail);
      setShowEmailChangeModal(false);
      setNewEmail('');
      setShowToast('success');
      setTimeout(() => setShowToast(null), 3000);
    } catch (err) {
      console.error('Error updating email:', err);
      setShowToast('error');
      setTimeout(() => setShowToast(null), 3000);
    } finally {
      setSaving(false);
    }
  };

  const handleLogoutAllDevices = async () => {
    const confirmed = window.confirm('Are you sure you want to logout from all devices?');
    if (!confirmed) {
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      await api.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/logout-all`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      navigate('/login');
    } catch (err) {
      console.error('Error logging out from all devices:', err);
      setShowToast('error');
      setTimeout(() => setShowToast(null), 3000);
    } finally {
      setSaving(false);
    }
  };

  const handleTwoFactorToggle = async () => {
    const newState = !twoFactorEnabled;
    setTwoFactorEnabled(newState);
    
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      await api.put(
        `${import.meta.env.VITE_API_BASE_URL}/user/two-factor`,
        { enabled: newState },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setShowToast('success');
      setTimeout(() => setShowToast(null), 3000);
    } catch (err) {
      console.error('Error updating two-factor authentication:', err);
      setTwoFactorEnabled(!newState);
      setShowToast('error');
      setTimeout(() => setShowToast(null), 3000);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600 text-lg font-medium">
          Loading Profile…
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {showToast === 'success' && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <SuccessToast onClose={() => setShowToast(null)} />
        </div>
      )}
      {showToast === 'error' && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <FailureToast onClose={() => setShowToast(null)} />
        </div>
      )}

      {showEmailChangeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Change Email Address</h3>
            <p className="text-sm text-gray-500 mb-4">
              Enter your new email address. You'll need to verify it before the change takes effect.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Email Address
              </label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="Enter new email"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowEmailChangeModal(false);
                  setNewEmail('');
                }}
                className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleEmailChange}
                disabled={saving}
                className="flex-1 px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {saving ? 'Updating...' : 'Update Email'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
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
          <div className="w-80 bg-white rounded-2xl shadow-sm p-6 h-fit">
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

            <div className="space-y-2">
              <div
                onClick={() => setActiveSection('personal')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium cursor-pointer transition-colors ${
                  activeSection === 'personal'
                    ? 'bg-teal-500 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Personal Information</span>
              </div>
              <div
                onClick={() => setActiveSection('security')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium cursor-pointer transition-colors ${
                  activeSection === 'security'
                    ? 'bg-teal-500 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
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

          <div className="flex-1 bg-white rounded-2xl shadow-sm overflow-hidden">
            {activeSection === 'personal' ? (
              <>
                <div className="flex items-center justify-between p-6">
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
                          className="flex items-center gap-2 px-4 py-2 bg-teal-400 hover:bg-teal-500 text-white rounded-full transition-colors disabled:opacity-50"
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
                          className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-300 text-teal-400 rounded-full border-2 border-teal-400 transition-colors disabled:opacity-50"
                        >
                          <X className="w-4 h-4" />
                          Discard Changes
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-6">
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
              </>
            ) : (
              <>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Login & Password
                  </h3>
                  <p className="text-gray-500 text-sm mb-8">
                    Manage your email, password, and security settings.
                  </p>

                  <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900 mb-4">
                      Login Information
                    </h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Email Address
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="email"
                          value={localStorage.getItem('email') || ''}
                          disabled
                          className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-500 border border-gray-200"
                        />
                        <button 
                          onClick={() => setShowEmailChangeModal(true)}
                          className="px-4 py-3 bg-[#2FC7A1] hover:bg-[#2FC7A1] text-white rounded-lg border border-gray-200 font-medium transition-colors"
                        >
                          Change Email
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900 mb-4">
                      Change Password
                    </h4>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          value={passwordData.currentPassword}
                          onChange={(e) =>
                            setPasswordData({ ...passwordData, currentPassword: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                          placeholder="Enter current password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          value={passwordData.newPassword}
                          onChange={(e) =>
                            setPasswordData({ ...passwordData, newPassword: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                          placeholder="Enter new password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={passwordData.confirmPassword}
                          onChange={(e) =>
                            setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-emerald-400"
                          placeholder="Confirm new password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Password Strength
                      </label>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-4">
                        <div
                          className={`h-full transition-all duration-300 ${
                            strength <= 33
                              ? 'bg-yellow-400'
                              : strength <= 66
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${strength}%` }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              checks.length ? 'bg-green-500' : 'border-2 border-gray-300'
                            }`}
                          >
                            {checks.length && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={checks.length ? 'text-gray-700' : 'text-gray-500'}>
                            At least 8 characters
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              checks.number ? 'bg-green-500' : 'border-2 border-gray-300'
                            }`}
                          >
                            {checks.number && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={checks.number ? 'text-gray-700' : 'text-gray-500'}>
                            At least 1 number
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              checks.special ? 'bg-green-500' : 'border-2 border-gray-300'
                            }`}
                          >
                            {checks.special && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={checks.special ? 'text-gray-700' : 'text-gray-500'}>
                            At least 1 special character
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handlePasswordUpdate}
                        disabled={saving}
                        className="px-6 py-3 bg-[#2FC7A1] hover:bg-[#2FC7A1] text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {saving ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                            Updating...
                          </div>
                        ) : (
                          'Update Password'
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900 mb-4">
                      Security Options
                    </h4>

                    <div className="flex items-center justify-between py-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-1">Two-Factor Authentication</h5>
                        <p className="text-sm text-gray-500">
                          Add an extra layer of security to your account.
                        </p>
                      </div>
                      <button
                        onClick={handleTwoFactorToggle}
                        disabled={saving}
                        className="relative inline-flex items-center cursor-pointer"
                      >
                        <div className={`w-11 h-6 rounded-full transition-colors ${twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}>
                          <div className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform ${twoFactorEnabled ? 'translate-x-full' : 'translate-x-0'}`}></div>
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between py-4 border-t border-gray-100">
                      <div>
                        <h5 className="font-normal text-gray-900">Last Password Change</h5>
                      </div>
                      <span className="text-sm text-gray-500">October 25, 2025, 10:30 AM</span>
                    </div>

                    <div className="flex items-center justify-between py-4 border-t border-gray-100">
                      <div>
                        <h5 className="font-normal text-gray-900">Last Login</h5>
                      </div>
                      <span className="text-sm text-gray-500">192.168.1.1 (New York, USA)</span>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <button 
                        onClick={handleLogoutAllDevices}
                        disabled={saving}
                        className="w-full px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium transition-colors disabled:opacity-50"
                      >
                        {saving ? 'Logging out...' : 'Logout from All Devices'}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
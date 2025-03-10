"use client"

import { useState } from "react"
import {
  UserIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  UsersIcon,
  HeartIcon,
  CameraIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UploadIcon,
  PlusCircleIcon,
  CheckIcon,
  XMarkIcon,
} from "../../components/icons" 

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    basicInfo: {
      name: "",
      age: "",
      height: "",
      religion: "",
      caste: "",
      location: "",
      motherTongue: "",
      maritalStatus: "Never Married",
      profileCreatedBy: "Self",
    },
    education: {
      highestDegree: "",
      college: "",
      yearOfCompletion: "",
    },
    career: {
      profession: "",
      company: "",
      annualIncome: "",
      workLocation: "",
    },
    family: {
      fatherOccupation: "",
      motherOccupation: "",
      siblings: "",
      familyType: "Nuclear Family",
      familyValues: "Moderate",
    },
    lifestyle: {
      diet: "Vegetarian",
      drinking: "No",
      smoking: "No",
      interests: [],
    },
    partnerPreferences: {
      ageRange: "",
      heightRange: "",
      education: "",
      profession: "",
      location: "",
      incomeRange: "",
    },
    aboutMe: "",
    photos: {
      primary: null,
      gallery: [],
    },
  })

  const [currentTab, setCurrentTab] = useState("basicInfo")
  const [interests, setInterests] = useState("")
  const [formProgress, setFormProgress] = useState(0)

  const updateFormData = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))

    // Update progress
    const totalFields = Object.values(formData).reduce((acc, section) => acc + Object.keys(section).length, 0)
    const filledFields = Object.entries(formData).reduce((acc, [sectionKey, section]) => {
      if (typeof section === "object") {
        return (
          acc +
          Object.entries(section).reduce((secAcc, [fieldKey, value]) => {
            if (Array.isArray(value)) {
              return secAcc + (value.length > 0 ? 1 : 0)
            }
            return secAcc + (value ? 1 : 0)
          }, 0)
        )
      }
      return acc + (section ? 1 : 0)
    }, 0)

    setFormProgress(Math.round((filledFields / totalFields) * 100))
  }

  const handleInterestsSubmit = () => {
    if (!interests.trim()) return

    const interestArray = interests
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
    setFormData((prev) => ({
      ...prev,
      lifestyle: {
        ...prev.lifestyle,
        interests: [...new Set([...prev.lifestyle.interests, ...interestArray])],
      },
    }))
    setInterests("")
  }

  const removeInterest = (interestToRemove) => {
    setFormData((prev) => ({
      ...prev,
      lifestyle: {
        ...prev.lifestyle,
        interests: prev.lifestyle.interests.filter((interest) => interest !== interestToRemove),
      },
    }))
  }

  const handlePhotoUpload = (type) => {
    // This would normally handle file uploads
    if (type === "primary") {
      setFormData((prev) => ({
        ...prev,
        photos: {
          ...prev.photos,
          primary: "/placeholder.svg?height=300&width=300",
        },
      }))
    } else {
      const gallery = [...formData.photos.gallery]
      if (gallery.length < 3) {
        gallery.push(`/placeholder.svg?height=120&width=120&text=Photo ${gallery.length + 1}`)
        setFormData((prev) => ({
          ...prev,
          photos: {
            ...prev.photos,
            gallery,
          },
        }))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Data Submitted:", formData)
    // Would normally send this data to the server
    alert("Registration successful!")
  }

  const tabs = [
    { id: "basicInfo", label: "Basic Info", icon: <UserIcon className="h-4 w-4" /> },
    { id: "education", label: "Education & Career", icon: <GraduationCapIcon className="h-4 w-4" /> },
    { id: "family", label: "Family", icon: <UsersIcon className="h-4 w-4" /> },
    { id: "lifestyle", label: "Lifestyle", icon: <HeartIcon className="h-4 w-4" /> },
    { id: "partnerPreferences", label: "Partner Preferences", icon: <UsersIcon className="h-4 w-4" /> },
    { id: "aboutPhotos", label: "About & Photos", icon: <CameraIcon className="h-4 w-4" /> },
  ]

  const goToNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === currentTab)
    if (currentIndex < tabs.length - 1) {
      setCurrentTab(tabs[currentIndex + 1].id)
    }
  }

  const goToPreviousTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === currentTab)
    if (currentIndex > 0) {
      setCurrentTab(tabs[currentIndex - 1].id)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-[#66451C]">Matrimonial Profile Registration</h1>
              <p className="text-gray-500">Find your perfect match by creating a detailed profile</p>

              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${formProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">{formProgress}% Complete</p>
            </div>

            <div className="w-full">
              {/* Tabs */}
              <div className="grid grid-cols-3 md:grid-cols-6 mb-8 border-b">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCurrentTab(tab.id)}
                    className={`flex flex-col items-center gap-1 py-2 px-1 ${
                      currentTab === tab.id
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <span className="hidden md:inline">{tab.icon}</span>
                    <span className="text-xs md:text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Basic Info */}
                {currentTab === "basicInfo" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
                        <UserIcon className="h-5 w-5" /> Basic Information
                      </h2>
                      <p className="text-gray-500">Tell us about yourself</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.basicInfo.name}
                          onChange={(e) => updateFormData("basicInfo", "name", e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                          Age
                        </label>
                        <input
                          id="age"
                          type="number"
                          value={formData.basicInfo.age}
                          onChange={(e) => updateFormData("basicInfo", "age", e.target.value)}
                          placeholder="Enter your age"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                          Height
                        </label>
                        <input
                          id="height"
                          type="text"
                          value={formData.basicInfo.height}
                          onChange={(e) => updateFormData("basicInfo", "height", e.target.value)}
                          placeholder="e.g. 5'6&quot;"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
                          Religion
                        </label>
                        <input
                          id="religion"
                          type="text"
                          value={formData.basicInfo.religion}
                          onChange={(e) => updateFormData("basicInfo", "religion", e.target.value)}
                          placeholder="Enter your religion"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="caste" className="block text-sm font-medium text-gray-700">
                          Caste (Optional)
                        </label>
                        <input
                          id="caste"
                          type="text"
                          value={formData.basicInfo.caste}
                          onChange={(e) => updateFormData("basicInfo", "caste", e.target.value)}
                          placeholder="Enter your caste"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                          Location
                        </label>
                        <input
                          id="location"
                          type="text"
                          value={formData.basicInfo.location}
                          onChange={(e) => updateFormData("basicInfo", "location", e.target.value)}
                          placeholder="City, State"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="motherTongue" className="block text-sm font-medium text-gray-700">
                          Mother Tongue
                        </label>
                        <input
                          id="motherTongue"
                          type="text"
                          value={formData.basicInfo.motherTongue}
                          onChange={(e) => updateFormData("basicInfo", "motherTongue", e.target.value)}
                          placeholder="Enter your mother tongue"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
                          Marital Status
                        </label>
                        <select
                          id="maritalStatus"
                          value={formData.basicInfo.maritalStatus}
                          onChange={(e) => updateFormData("basicInfo", "maritalStatus", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="Never Married">Never Married</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowed">Widowed</option>
                          <option value="Separated">Separated</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="profileCreatedBy" className="block text-sm font-medium text-gray-700">
                          Profile Created By
                        </label>
                        <select
                          id="profileCreatedBy"
                          value={formData.basicInfo.profileCreatedBy}
                          onChange={(e) => updateFormData("basicInfo", "profileCreatedBy", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="Self">Self</option>
                          <option value="Parent">Parent</option>
                          <option value="Sibling">Sibling</option>
                          <option value="Friend">Friend</option>
                          <option value="Relative">Relative</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Education & Career */}
                {currentTab === "education" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
                        <GraduationCapIcon className="h-5 w-5" /> Education & Career
                      </h2>
                      <p className="text-gray-500">Tell us about your educational background and career</p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-medium flex items-center gap-2 text-gray-700">
                          <GraduationCapIcon className="h-4 w-4" /> Education
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="highestDegree" className="block text-sm font-medium text-gray-700">
                              Highest Degree
                            </label>
                            <input
                              id="highestDegree"
                              type="text"
                              value={formData.education.highestDegree}
                              onChange={(e) => updateFormData("education", "highestDegree", e.target.value)}
                              placeholder="e.g. Bachelor's in Computer Science"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="college" className="block text-sm font-medium text-gray-700">
                              College/University
                            </label>
                            <input
                              id="college"
                              type="text"
                              value={formData.education.college}
                              onChange={(e) => updateFormData("education", "college", e.target.value)}
                              placeholder="Enter your college/university name"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="yearOfCompletion" className="block text-sm font-medium text-gray-700">
                              Year of Completion
                            </label>
                            <input
                              id="yearOfCompletion"
                              type="number"
                              value={formData.education.yearOfCompletion}
                              onChange={(e) => updateFormData("education", "yearOfCompletion", e.target.value)}
                              placeholder="e.g. 2020"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-medium flex items-center gap-2 text-gray-700">
                          <BriefcaseIcon className="h-4 w-4" /> Career
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                              Profession
                            </label>
                            <input
                              id="profession"
                              type="text"
                              value={formData.career.profession}
                              onChange={(e) => updateFormData("career", "profession", e.target.value)}
                              placeholder="e.g. Software Engineer"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                              Company
                            </label>
                            <input
                              id="company"
                              type="text"
                              value={formData.career.company}
                              onChange={(e) => updateFormData("career", "company", e.target.value)}
                              placeholder="Enter your company name"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">
                              Annual Income
                            </label>
                            <input
                              id="annualIncome"
                              type="text"
                              value={formData.career.annualIncome}
                              onChange={(e) => updateFormData("career", "annualIncome", e.target.value)}
                              placeholder="e.g. ₹15-18 Lakhs"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="workLocation" className="block text-sm font-medium text-gray-700">
                              Work Location
                            </label>
                            <input
                              id="workLocation"
                              type="text"
                              value={formData.career.workLocation}
                              onChange={(e) => updateFormData("career", "workLocation", e.target.value)}
                              placeholder="City, Country"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Family */}
                {currentTab === "family" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
                        <UsersIcon className="h-5 w-5" /> Family Details
                      </h2>
                      <p className="text-gray-500">Tell us about your family background</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="fatherOccupation" className="block text-sm font-medium text-gray-700">
                          Father's Occupation
                        </label>
                        <input
                          id="fatherOccupation"
                          type="text"
                          value={formData.family.fatherOccupation}
                          onChange={(e) => updateFormData("family", "fatherOccupation", e.target.value)}
                          placeholder="Enter your father's occupation"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="motherOccupation" className="block text-sm font-medium text-gray-700">
                          Mother's Occupation
                        </label>
                        <input
                          id="motherOccupation"
                          type="text"
                          value={formData.family.motherOccupation}
                          onChange={(e) => updateFormData("family", "motherOccupation", e.target.value)}
                          placeholder="Enter your mother's occupation"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="siblings" className="block text-sm font-medium text-gray-700">
                          Siblings
                        </label>
                        <input
                          id="siblings"
                          type="text"
                          value={formData.family.siblings}
                          onChange={(e) => updateFormData("family", "siblings", e.target.value)}
                          placeholder="e.g. 1 Brother, 1 Sister"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="familyType" className="block text-sm font-medium text-gray-700">
                          Family Type
                        </label>
                        <select
                          id="familyType"
                          value={formData.family.familyType}
                          onChange={(e) => updateFormData("family", "familyType", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="Nuclear Family">Nuclear Family</option>
                          <option value="Joint Family">Joint Family</option>
                          <option value="Extended Family">Extended Family</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="familyValues" className="block text-sm font-medium text-gray-700">
                          Family Values
                        </label>
                        <select
                          id="familyValues"
                          value={formData.family.familyValues}
                          onChange={(e) => updateFormData("family", "familyValues", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="Traditional">Traditional</option>
                          <option value="Moderate">Moderate</option>
                          <option value="Liberal">Liberal</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Lifestyle */}
                {currentTab === "lifestyle" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
                        <HeartIcon className="h-5 w-5" /> Lifestyle
                      </h2>
                      <p className="text-gray-500">Tell us about your lifestyle preferences</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="diet" className="block text-sm font-medium text-gray-700">
                          Diet
                        </label>
                        <select
                          id="diet"
                          value={formData.lifestyle.diet}
                          onChange={(e) => updateFormData("lifestyle", "diet", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="Non-Vegetarian">Non-Vegetarian</option>
                          <option value="Eggetarian">Eggetarian</option>
                          <option value="Vegan">Vegan</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="drinking" className="block text-sm font-medium text-gray-700">
                          Drinking
                        </label>
                        <select
                          id="drinking"
                          value={formData.lifestyle.drinking}
                          onChange={(e) => updateFormData("lifestyle", "drinking", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="No">No</option>
                          <option value="Occasionally">Occasionally</option>
                          <option value="Yes">Yes</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="smoking" className="block text-sm font-medium text-gray-700">
                          Smoking
                        </label>
                        <select
                          id="smoking"
                          value={formData.lifestyle.smoking}
                          onChange={(e) => updateFormData("lifestyle", "smoking", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="No">No</option>
                          <option value="Occasionally">Occasionally</option>
                          <option value="Yes">Yes</option>
                        </select>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
                          Interests/Hobbies
                        </label>
                        <div className="flex gap-2">
                          <input
                            id="interests"
                            type="text"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            placeholder="Enter interests separated by commas"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={handleInterestsSubmit}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1"
                          >
                            <PlusCircleIcon className="h-4 w-4" /> Add
                          </button>
                        </div>

                        {formData.lifestyle.interests.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {formData.lifestyle.interests.map((interest, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm flex items-center cursor-pointer hover:bg-gray-200"
                                onClick={() => removeInterest(interest)}
                              >
                                {interest} <XMarkIcon className="h-3 w-3 ml-1" />
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Partner Preferences */}
                {currentTab === "partnerPreferences" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
                        <UsersIcon className="h-5 w-5" /> Partner Preferences
                      </h2>
                      <p className="text-gray-500">Tell us what you're looking for in a partner</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">
                          Age Range
                        </label>
                        <input
                          id="ageRange"
                          type="text"
                          value={formData.partnerPreferences.ageRange}
                          onChange={(e) => updateFormData("partnerPreferences", "ageRange", e.target.value)}
                          placeholder="e.g. 28-33"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="heightRange" className="block text-sm font-medium text-gray-700">
                          Height Range
                        </label>
                        <input
                          id="heightRange"
                          type="text"
                          value={formData.partnerPreferences.heightRange}
                          onChange={(e) => updateFormData("partnerPreferences", "heightRange", e.target.value)}
                          placeholder="e.g. 5'8&quot; and above"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                          Education
                        </label>
                        <input
                          id="education"
                          type="text"
                          value={formData.partnerPreferences.education}
                          onChange={(e) => updateFormData("partnerPreferences", "education", e.target.value)}
                          placeholder="e.g. Master's or higher"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                          Profession
                        </label>
                        <input
                          id="profession"
                          type="text"
                          value={formData.partnerPreferences.profession}
                          onChange={(e) => updateFormData("partnerPreferences", "profession", e.target.value)}
                          placeholder="e.g. Any Professional"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                          Location Preference
                        </label>
                        <input
                          id="location"
                          type="text"
                          value={formData.partnerPreferences.location}
                          onChange={(e) => updateFormData("partnerPreferences", "location", e.target.value)}
                          placeholder="e.g. Mumbai preferred"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="incomeRange" className="block text-sm font-medium text-gray-700">
                          Income Range
                        </label>
                        <input
                          id="incomeRange"
                          type="text"
                          value={formData.partnerPreferences.incomeRange}
                          onChange={(e) => updateFormData("partnerPreferences", "incomeRange", e.target.value)}
                          placeholder="e.g. ₹15 Lakhs and above"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* About & Photos */}
                {currentTab === "aboutPhotos" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
                        <CameraIcon className="h-5 w-5" /> About Me & Photos
                      </h2>
                      <p className="text-gray-500">Tell us more about yourself and add photos</p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="aboutMe" className="block text-sm font-medium text-gray-700">
                          About Me
                        </label>
                        <textarea
                          id="aboutMe"
                          value={formData.aboutMe}
                          onChange={(e) => setFormData((prev) => ({ ...prev, aboutMe: e.target.value }))}
                          placeholder="Tell us about yourself, your values, and what you're looking for in a partner..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium text-gray-700">Profile Photo</h3>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="relative">
                              {formData.photos.primary ? (
                                <img
                                  src={formData.photos.primary || "/placeholder.svg"}
                                  alt="Profile"
                                  className="w-32 h-32 object-cover rounded-lg border"
                                />
                              ) : (
                                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border">
                                  <CameraIcon className="h-8 w-8 text-gray-400" />
                                </div>
                              )}
                            </div>

                            <div className="space-y-2">
                              <button
                                type="button"
                                onClick={() => handlePhotoUpload("primary")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                                  formData.photos.primary
                                    ? "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                              >
                                <UploadIcon className="h-4 w-4" />{" "}
                                {formData.photos.primary ? "Change Photo" : "Upload Photo"}
                              </button>
                              <p className="text-xs text-gray-500">Upload a clear, recent photo of yourself</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-medium text-gray-700">
                            Gallery Photos <span className="text-sm font-normal text-gray-500">(Max 3)</span>
                          </h3>
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                              {formData.photos.gallery.map((photo, index) => (
                                <div key={index} className="relative">
                                  <img
                                    src={photo || "/placeholder.svg"}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-24 h-24 object-cover rounded-lg border"
                                  />
                                </div>
                              ))}

                              {Array(3 - formData.photos.gallery.length)
                                .fill(0)
                                .map((_, index) => (
                                  <div
                                    key={`empty-${index}`}
                                    className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border"
                                  >
                                    <span className="text-xs text-gray-400">Empty</span>
                                  </div>
                                ))}
                            </div>

                            {formData.photos.gallery.length < 3 && (
                              <button
                                type="button"
                                onClick={() => handlePhotoUpload("gallery")}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                              >
                                <PlusCircleIcon className="h-4 w-4" /> Add Gallery Photo
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {currentTab !== "basicInfo" && (
                    <button
                      type="button"
                      onClick={goToPreviousTab}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      <ChevronLeftIcon className="h-4 w-4" /> Previous
                    </button>
                  )}

                  {currentTab !== "aboutPhotos" ? (
                    <button
                      type="button"
                      onClick={goToNextTab}
                      className="flex items-center gap-2 px-4 py-2 bg-[#66451C] text-white rounded-md hover:bg-gray-800 ml-auto"
                    >
                      Next <ChevronRightIcon className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 ml-auto"
                    >
                      <CheckIcon className="h-4 w-4" /> Submit Profile
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


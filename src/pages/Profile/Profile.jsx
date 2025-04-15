import React, { useState } from 'react';

const Profile = () => {
 
  const [userData] = useState({
    basicInfo: {
      name: "Priya Sharma",
      age: 28,
      height: "5'6\"",
      religion: "Hindu",
      caste: "Brahmin",
      location: "Mumbai, Maharashtra",
      motherTongue: "Hindi",
      maritalStatus: "Never Married",
      profileCreatedBy: "Self"
    },
    photos: {
      primary: "/api/placeholder/300/300",
      gallery: [
        "/api/placeholder/120/120",
        "/api/placeholder/120/120",
        "/api/placeholder/120/120"
      ]
    },
    education: {
      highestDegree: "MBA",
      college: "Indian Institute of Management, Ahmedabad",
      yearOfCompletion: 2020
    },
    career: {
      profession: "Marketing Manager",
      company: "Global Brands Inc.",
      annualIncome: "₹18-20 Lakhs",
      workLocation: "Mumbai"
    },
    family: {
      fatherOccupation: "Retired Government Officer",
      motherOccupation: "Teacher",
      siblings: "1 Brother (Married), 1 Sister",
      familyType: "Nuclear Family",
      familyValues: "Moderate"
    },
    lifestyle: {
      diet: "Vegetarian",
      drinking: "No",
      smoking: "No",
      interests: ["Reading", "Traveling", "Classical Music", "Cooking"]
    },
    partnerPreferences: {
      ageRange: "28-33",
      heightRange: "5'8\" and above",
      education: "Master's or higher",
      profession: "Any Professional",
      location: "Mumbai preferred",
      incomeRange: "₹15 Lakhs and above"
    },
    aboutMe: "I am a dedicated professional who values both career and family. I enjoy meaningful conversations and have a passion for classical music and literature. I come from a close-knit family and value traditions while embracing modern outlook. Looking for a like-minded partner with whom I can share life's journey.",
    contactInfo: {
      verified: true,
      premium: true
    }
  });

  const [activeTab, setActiveTab] = useState('about');

  return (
    
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden pb-10 my-20">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-gray-800 to-[#66451c] p-6 text-white">
        <h1 className="text-2xl font-bold">{userData.basicInfo.name}</h1>
        <p className="text-sm opacity-90">Profile ID: MT94562398</p>
      </div>
      
      {/* Main Profile Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - Photos and Quick Info */}
        <div className="w-full md:w-1/3 p-4 border-r">
          <div className="mb-6">
            <img 
              src={userData.photos.primary} 
              alt={userData.basicInfo.name} 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="flex gap-2 mt-2">
              {userData.photos.gallery.map((photo, index) => (
                <img 
                  key={index} 
                  src={photo} 
                  alt={`Gallery ${index+1}`} 
                  className="w-16 h-16 object-cover rounded-md cursor-pointer"
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Quick Info</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Age:</div>
              <div>{userData.basicInfo.age} years</div>
              
              <div className="text-gray-500">Height:</div>
              <div>{userData.basicInfo.height}</div>
              
              <div className="text-gray-500">Religion:</div>
              <div>{userData.basicInfo.religion}</div>
              
              <div className="text-gray-500">Profession:</div>
              <div>{userData.career.profession}</div>
              
              <div className="text-gray-500">Location:</div>
              <div>{userData.basicInfo.location}</div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col gap-2">
            <button className="bg-gray-800 text-white py-2 px-4 rounded-full font-medium">
              Connect Now
            </button>
            <button className="border border-gray-600 text-gray-600 py-2 px-4 rounded-full font-medium">
              Add to Shortlist
            </button>
          </div>
        </div>
        
        {/* Right Content Area - Tabs */}
        <div className="w-full md:w-2/3 p-4">
          {/* Tab Navigation */}
          <div className="flex border-b mb-4">
            <button 
              onClick={() => setActiveTab('about')}
              className={`py-2 px-4 font-medium ${activeTab === 'about' ? 'text-[#66451c] border-b-2 border-[#66451c]' : 'text-gray-500'}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('family')}
              className={`py-2 px-4 font-medium ${activeTab === 'family' ? 'text-[#66451c] border-b-2 border-[#66451c]' : 'text-gray-500'}`}
            >
              Family
            </button>
            <button 
              onClick={() => setActiveTab('career')}
              className={`py-2 px-4 font-medium ${activeTab === 'career' ? 'text-[#66451c] border-b-2 border-[#66451c]' : 'text-gray-500'}`}
            >
              Career
            </button>
            <button 
              onClick={() => setActiveTab('preferences')}
              className={`py-2 px-4 font-medium ${activeTab === 'preferences' ? 'text-[#66451c] border-b-2 border-[#66451c]' : 'text-gray-500'}`}
            >
              Preferences
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-2">
            {/* About Tab */}
            {activeTab === 'about' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">About Me</h3>
                  <p className="text-gray-600">{userData.aboutMe}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Basic Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Marital Status</p>
                      <p>{userData.basicInfo.maritalStatus}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Mother Tongue</p>
                      <p>{userData.basicInfo.motherTongue}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Profile Created By</p>
                      <p>{userData.basicInfo.profileCreatedBy}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Caste</p>
                      <p>{userData.basicInfo.caste}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Lifestyle</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Diet</p>
                      <p>{userData.lifestyle.diet}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Drinking</p>
                      <p>{userData.lifestyle.drinking}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Smoking</p>
                      <p>{userData.lifestyle.smoking}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Interests</p>
                      <p>{userData.lifestyle.interests.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Family Tab */}
            {activeTab === 'family' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Family Background</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Father's Occupation</p>
                    <p>{userData.family.fatherOccupation}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Mother's Occupation</p>
                    <p>{userData.family.motherOccupation}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Siblings</p>
                    <p>{userData.family.siblings}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Family Type</p>
                    <p>{userData.family.familyType}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Family Values</p>
                    <p>{userData.family.familyValues}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Career Tab */}
            {activeTab === 'career' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Education & Career</h3>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700">Education</h4>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-gray-500 text-sm">Highest Qualification</p>
                      <p>{userData.education.highestDegree}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">College/University</p>
                      <p>{userData.education.college}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Year of Completion</p>
                      <p>{userData.education.yearOfCompletion}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Professional Details</h4>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-gray-500 text-sm">Profession</p>
                      <p>{userData.career.profession}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Company</p>
                      <p>{userData.career.company}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Annual Income</p>
                      <p>{userData.career.annualIncome}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Work Location</p>
                      <p>{userData.career.workLocation}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Partner Preferences</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Age Range</p>
                    <p>{userData.partnerPreferences.ageRange} years</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Height</p>
                    <p>{userData.partnerPreferences.heightRange}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Education</p>
                    <p>{userData.partnerPreferences.education}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Profession</p>
                    <p>{userData.partnerPreferences.profession}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p>{userData.partnerPreferences.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Income Range</p>
                    <p>{userData.partnerPreferences.incomeRange}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Contact Info and Verification */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              {userData.contactInfo.verified && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2 flex items-center">
                  <span className="mr-1">✓</span> Verified
                </span>
              )}
              {userData.contactInfo.premium && (
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center">
                  <span className="mr-1">★</span> Premium
                </span>
              )}
            </div>
            <button className="bg-green-600 text-white py-2 px-4 rounded-full text-sm font-medium">
              View Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React from 'react';

const teamMembers = [
  {
    name: 'Ankita Singh',
    role: 'Software Developer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Alice focuses on creating clean and responsive user interfaces.',
  },
  {
    name: 'Abhishek Mitra',
    role: 'Robotics Engineer',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    description: 'Bob builds scalable robots and automation systems.',
  },
  {
    name: 'Rachna Sharma',
    role: 'Robotics Engineer',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    description: 'Charlie designs seamless and user-friendly experiences.',
  },
];

const AboutPage = () => {
  return (
    <div >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
            <p className="text-gray-500 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

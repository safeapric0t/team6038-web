// components/TeamMembers.tsx
import React from 'react';

const teamMembers = [
  {
    name: 'Yahya',
    nickname: 'Promegayazılımcı',
    photo: '/images/yahya.jpg',
    role: 'Programmer & Strategist',
  },
  {
    name: 'Ayşe',
    nickname: 'GearsMaster',
    photo: '/images/ayse.jpg',
    role: 'Mechanical Engineer',
  },
  // Diğer üyeleri buraya ekleyebilirsin
];

const TeamMembers = () => {
  return (
    <div className="py-16 bg-white dark:bg-slate-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="w-[200px] h-[300px] perspective"
          >
            <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
              <div className="absolute w-full h-full backface-hidden bg-white dark:bg-slate-800 border rounded-xl flex flex-col items-center justify-center p-4">
                <div
                  className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: `url(${member.photo})` }}
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-300">{member.nickname}</p>
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 dark:bg-slate-700 border rounded-xl flex items-center justify-center p-4">
                <p className="text-gray-700 dark:text-gray-200 text-center">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

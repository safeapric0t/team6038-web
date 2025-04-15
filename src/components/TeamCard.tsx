import React from 'react';

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div className='flex align-center'>

    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col ">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{role}</p>
      </div>
    </div>
    </div>
  );
};

export default TeamCard;
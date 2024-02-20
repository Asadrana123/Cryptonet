import React from 'react';
const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-8 rounded-lg yshadow-md w-full max-w-md">
    <img src={user?.picture.large} alt={`${user?.name.first} ${user?.name.last}`} className="mx-auto mb-4 rounded-full h-25 w-25 object-cover" />
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Name: {`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</h2>
    <p className="text-gray-600 mb-4">{`Age: ${user?.dob.age}`}</p>
    <p className="text-gray-600 mb-4">{`Location: ${user?.location.city}, ${user?.location.state}, ${user?.location.country}`}</p>
    <p className="text-gray-600 mb-4">{`Email: ${user?.email}`}</p>
    <p className="text-gray-600 mb-4">{`Phone: ${user?.phone}`}</p>
    <p className="text-gray-600 mb-4">{`Cell: ${user?.cell}`}</p>
    <div className="flex justify-between items-center">
      <p className="text-gray-600">{`Username: ${user?.login.username}`}</p>
      <p className="text-gray-600">{`Registered: ${user?.registered.date}`}</p>
    </div>
  </div>
  );
};

export default UserCard;

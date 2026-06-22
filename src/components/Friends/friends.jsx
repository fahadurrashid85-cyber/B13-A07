"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div>
      {/* Friends Banner */}
      <div className="flex justify-between gap-4 p-20">
        <div className="card bg-white text-[#244D3F] w-64 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{friends.length}</h2>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
        </div>
        {/* You can compute other stats dynamically here */}
        <div className="card bg-white text-[#244D3F] w-64 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">10</h2>
            <p className="text-[#64748B]">On Track</p>
          </div>
        </div>
        <div className="card bg-white text-[#244D3F] w-64 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">10</h2>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
        </div>
        <div className="card bg-white text-[#244D3F] w-64 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">10</h2>
            <p className="text-[#64748B]">Interactions This Month</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#244D3F] pb-20" />

      {/* Friends Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex flex-col items-center justify-center">
                <Image
                  width={250}
                  height={250}
                  src={friend.picture}
                  alt={friend.name}
                  className="w-26 h-26 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#244D3F]">
                    {friend.name}
                  </h3>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    Days since last contact:
                  </span>
                  <span
                    className={`font-semibold ${
                      friend.days_since_contact > 10
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {friend.days_since_contact}
                  </span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      friend.days_since_contact > 10
                        ? "bg-red-600"
                        : "bg-green-600"
                    }`}
                    style={{ width: `${friend.progress || 80}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      friend.days_since_contact > 10
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {friend.status}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-sm font-semibold text-gray-700">
                  Tags:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {friend.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Bio:</span> {friend.bio}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Next due date:</span>
                  <span className="font-semibold text-gray-900">
                    {friend.next_due_date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;

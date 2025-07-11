"use client";

import { useGetUsersQuery } from "@/store/users";
import { Edit, X } from "lucide-react";

const TBodyTableUsers = () => {
  const { data: users } = useGetUsersQuery();
  return (
    <tbody className="bg-slate-900 ">
      {users?.map((user) => (
        <tr
          key={user._id}
          className=" hover:bg-gray-500 duration-200 transition-colors text-left"
        >
          <td className="px-4 py-2">{user.username}</td>
          <td className="px-4 py-2 text-blue-400">{user.email}</td>
          <td className="px-4 py-2">
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                user.isAdmin
                  ? "bg-green-100 text-green-600"
                  : "bg-blue-400/30 text-blue-600"
              }`}
            >
              {user.isAdmin ? "Admin" : "User"}
            </span>
          </td>
          <td className="px-4 py-2">
            {new Date(user.createdAt).toLocaleDateString()}
          </td>
          <td className="px-4 py-2">
            <div className="flex gap-2 items-center">
              <button className="text-blue-500">
                <Edit />
              </button>
              {!user.isAdmin && (
                <button className="text-red-500">
                  <X />
                </button>
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TBodyTableUsers;

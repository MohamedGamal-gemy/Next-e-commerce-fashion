import TBodyTableUsers from "@/components/admin/users/tableShowUsers/TBodyTableUsers";

const Users = () => {
  return (
    <div>
      <table className="max-w-5xl w-full mx-auto   ">
        <thead className="bg-slate-700 text-left ">
          <tr className="">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">CreatedAt</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>

        <TBodyTableUsers />
      </table>
    </div>
  );
};

export default Users;

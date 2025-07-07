import SalesChart from "@/components/charts/SalesChart";
import React from "react";

const Admin = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 ">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className=" bg-gradient-to-bl to-sky-600/60 from-slate-950/80 rounded-lg h-[160px] flex flex-col 
            justify-center items-center gap-3"
            >
              <h2 className="font-bold text-2xl">Products</h2>
              <h3 className="font-bold text-3xl text-amber-500">{i + 20}</h3>
            </div>
          ))}
      </div>
      <SalesChart />
    </div>
  );
};

export default Admin;

const Friends = () => {
  return (
    <div>
      {/* Friends Banner*/}

      <div className="flex justify-between gap-4 p-20">
        <div className="card bg-white text-[#244D3F] w-62.5 shadow-sm ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">10</h2>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
        </div>
        <div className="card bg-white text-[#244D3F] w-62.5 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">10</h2>
            <p className="text-[#64748B]">On Track</p>
          </div>
        </div>
        <div className="card bg-white text-[#244D3F] w-62.5 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">10</h2>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
        </div>
        <div className="card bg-white text-[#244D3F] w-62.5 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">10</h2>
            <p className="text-[#64748B]">Interactions This Month</p>
          </div>
        </div>
      </div>

      {/*Divider*/}
      <hr className="border-[#244D3F] pb-20" />

      {/*Friends Card*/}
    </div>
  );
};

export default Friends;

export const Card = () => {
  //Default random value for story points
  return (
    <article className="w-sm border border-gray-800 rounded overflow-hidden shadow-box shadow-gray-800 hover:shadow-box hover:bg-slate-900">
      <div className="py-4 px-2">
        <section>
          <h3>DTTS-3440 BMS Producto - XXX</h3>
        </section>
        <section className="my-2">
          <span className="text-gray-500 text-base">Migración mortadela</span>
        </section>
        <div className="flex flex-col">
          <span title="Custom tooltip text" className="text-gray-700 text-base">
            5
          </span>
          <span className="">BO_Jamon</span>
        </div>
        <div className="my-2 flex gap-2">
          {/* <img
            className="rounded-full"
            src="https://via.placeholder.com/20?text=J"
            alt="img"
          /> */}
          <span>DTTS-3947</span>
        </div>
      </div>
    </article>
  );
};

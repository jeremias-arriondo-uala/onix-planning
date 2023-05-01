export const TaskCard = () => {
  //Default random value for story points
  return (
    <div className="flex justify-center mb-12">
      <div className="relative rounded-lg pointer-events-none shadow-lgDark ">
        <div className="z-10 relative overflow-hidden rounded-[inherit] p-[3px] m-[-2px] isolate">
          <div className="will-change-transform animate-buttonStroke blur-[4px] origin-[center_center] absolute top-0 left-0 right-0 bottom-0 bg-buttonConicGradient"></div>
          <div className="relative z-100">
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-[#0e1422] hover:bg-gray-200 border border-[#ffffff10] text-gray-900 dark:text-white font-bold px-8 py-4 rounded-lg">
              <article className="w-sm border border-gray-800 rounded overflow-hidden shadow-box shadow-gray-800 hover:shadow-box hover:bg-slate-900">
                <div className="py-4 px-2">
                  <section>
                    <h3 className="text-primary">
                      DTTS-3440 BMS Producto - XXX
                    </h3>
                  </section>
                  <section className="my-2">
                    <span className="text-gray-500 text-base">
                      Migración mortadela
                    </span>
                  </section>
                  <div className="flex flex-col">
                    <span
                      title="Custom tooltip text"
                      className="text-gray-700 text-base"
                    >
                      5
                    </span>
                    <span className="text-primary">BO_Jamon</span>
                  </div>
                  <div className="my-2 flex gap-2">
                    {/* <img
            className="rounded-full"
            src="https://via.placeholder.com/20?text=J"
            alt="img"
          /> */}
                    <span className="text-primary">DTTS-3947</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

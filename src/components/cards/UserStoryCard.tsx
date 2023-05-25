import { UserStory } from "@/@types";
import Link from "next/link";

interface TaskCard extends UserStory {
  newKey: string;
}

export const TaskCard = (story: TaskCard) => {
  const {
    newKey,
    self,
    fields: { summary, description, status, storyPoint },
  } = story;
  //Default random value for story points
  return (
    <article className="w-full flex justify-center my-8">
      <div className="relative rounded-lg shadow-lgDark ">
        <div className="z-10 relative overflow-hidden rounded-[inherit] p-[3px] m-[-2px] isolate">
          <div className="will-change-transform animate-buttonStroke blur-[4px] origin-[center_center] absolute top-0 left-0 right-0 bottom-0 bg-buttonConicGradient"></div>
          <div className="relative z-100">
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-[#0e1422] hover:bg-gray-200 border border-[#ffffff10] text-gray-900 dark:text-white font-bold px-8 py-4 rounded-lg">
              <div className="py-4 px-2">
                <section>
                  <h3 className="text-primary">
                    <Link href={`/user-story/${newKey}`}>{summary}</Link>
                  </h3>
                </section>
                <section className="my-2">
                  <span className="text-gray-500 text-base">{description}</span>
                </section>
                <div className="flex flex-col">
                  <span
                    title="Custom tooltip text"
                    className="text-gray-700 text-2xl text-active"
                  >
                    {storyPoint && storyPoint}
                  </span>
                  {/* <span className="text-primary">{key}</span> */}
                </div>
                <div className="my-2 flex gap-2">
                  {/* <img
            className="rounded-full"
            src="https://via.placeholder.com/20?text=J"
            alt="img"
          /> */}
                  <span className="text-primary">{newKey}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

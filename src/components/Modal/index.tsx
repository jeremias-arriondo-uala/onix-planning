"use client";
import { useStoryPointStore } from "@/store/storyPoint";
import React, { useState } from "react";
import { InfoUserStory } from "../InfoUserStory";

type ModalProps = {
  isOpen: boolean;
  toogleOpen: () => void;
};

const Modal = ({ isOpen = false, toogleOpen }: ModalProps) => {
  const { currentUserStory } = useStoryPointStore();
  return (
    <>
      {isOpen && currentUserStory?.id ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 bg-black bg-opacity-50 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="sm:mx-8 my-8 text-sm grid grid-cols-1 gap-8 text-gray-900 dark:text-[#AAB7D2] p-8 lg:p-12 rounded-[25px] bg-gray-100 dark:bg-[#09101F] relative bg-clip-padding border-[2px] border-transparent before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:-m-[2px] before:z-[-1] before:rounded-[inherit] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500">
                <button
                  onClick={toogleOpen}
                  className="absolute right-2 text-3xl text-violet-500 px-2"
                >
                  x
                </button>
                <InfoUserStory />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

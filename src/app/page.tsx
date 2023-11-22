"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import "@splidejs/react-splide/css";
import "./page.scss";
import gsap from "gsap";
// https://telegram-for-vision-pro.vercel.app/
// https://github.com/ln-dev7/telegram-for-vision-pro
const chats = [
  {
    name: "Lucy",
    message: "Bob says hi.",
    hour: "9:41 PM",
    image: "/avatar-1.jpg",
    group: false,
    unread: 3,
    check: true,
  },
  {
    name: "Digital Nomads",
    message: "Say hello to Lucy !",
    hour: "9:41 PM",
    image: "/avatar-2.jpg",
    group: false,
    unread: 0,
    check: true,
    active: true,
  },
  {
    name: "Roberto",
    message:
      "Moar cat videos in this channel ? Do you have any idea what time it is ? Announcing the winners of the 2021 Design Awards",
    hour: "9:41 PM",
    image: "/avatar-3.jpg",
    group: false,
    unread: 0,
    check: true,
  },
  {
    name: "LN",
    message: "Hello LN, Are you free ?",
    hour: "8:41 PM",
    image: "/avatar-4.jpg",
    group: false,
    unread: 0,
    check: true,
  },
  {
    name: "Study Group",
    message: "maths.zip - infos.zip",
    hour: "7:41 PM",
    image: "/avatar-5.jpg",
    group: true,
    unread: 1,
    check: false,
  },
  {
    name: "Lucy",
    message: "Bob says hi.",
    hour: "9:41 PM",
    image: "/image-3.jpg",
    group: false,
    unread: 3,
    check: true,
  },
  {
    name: "Study Group",
    message: "maths.zip - infos.zip",
    hour: "7:41 PM",
    image: "/avatar-5.jpg",
    group: true,
    unread: 1,
    check: false,
  },
];

export default function Home() {
  const tl = gsap.timeline();
  const openChats = () => {
    setTimeout(() => {
      document.querySelector(".dog")?.classList.remove("hidden");
    }, 500);
    document.querySelector(".button-settings")?.classList.remove("active");
    document.querySelector(".button-chats")?.classList.add("active");
    gsap.to(".box-left-chats", {
      x: "0",
      ease: "power0.easeNone",
    });
    gsap.to(".box-left-settings", {
      x: "0",
      ease: "power0.easeNone",
    });
    gsap.to(".box-right-chats", {
      x: "0",
      ease: "power0.easeNone",
    });
    gsap.to(".box-right-settings", {
      x: "0",
      ease: "power0.easeNone",
    });
  };
  const openSettins = () => {
    document.querySelector(".dog")?.classList.add("hidden");
    document.querySelector(".button-settings")?.classList.add("active");
    document.querySelector(".button-chats")?.classList.remove("active");
    gsap.to(".box-left-chats", {
      x: "-384px",
      ease: "power0.easeNone",
    });
    gsap.to(".box-left-settings", {
      x: "-384px",
      ease: "power0.easeNone",
    });
    gsap.to(".box-right-chats", {
      x: "-816px",
      ease: "power0.easeNone",
    });
    gsap.to(".box-right-settings", {
      x: "-816px",
      ease: "power0.easeNone",
    });
  };

  const mainRef = useRef(null);
  const [openImg, setOpenImg] = useState(false);
  const handleClickImage = () => {
    if (openImg) {
      setOpenImg(false);
      gsap.to(mainRef.current, {
        backgroundImage: `url("/banner.jpg")`,
        duration: 0.5,
      });
      gsap.to(".main-container", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
      });

      gsap.to(".dog", {
        x: "0",
        scale: 1,
        duration: 0.5,
      });
    } else {
      setOpenImg(true);

      gsap.to(mainRef.current, {
        backgroundImage: `url("/banner-night.jpg")`,
        duration: 0.5,
      });
      gsap.to(".main-container", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
      });
      gsap.to(".dog", {
        x: "-50px",
        scale: 3,
        duration: 0.5,
      });
    }
  };
  return (
    <main
      ref={mainRef}
      className="main relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url("/banner.jpg")`,
      }}
    >
      <Image
        onClick={handleClickImage}
        className="dog absolute left-[40%] top-[30%] w-[385px] h-[190px] object-cover rounded-2xl cursor-pointer z-50"
        width={2400}
        height={1600}
        alt="image"
        src="/image-1.jpg"
      />
      <div className="main-container relative mx-auto min-h-screen gap-6 flex justify-center items-center">
        <div className="relative z-40 w-fit">
          <div className="box-container flex z-30 w-full">
            <div className="box-left overflow-hidden flex w-96 shrink-0">
              <div className="box-left-chats w-96 h-full shrink-0 p-4">
                <div className="flex item-center justify-between gap-4">
                  <button className="cirle-button">
                    <svg
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 5.5H15.5M0.5 0.5H15.5M0.5 10.5H15.5"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div className="flex item-center justify-center gap-4 mt-[2px]">
                    <div className="flex -space-x-4">
                      <img
                        className="inline-block z-20 object-cover h-11 w-11 rounded-full ring-2 ring-green-400"
                        src="/image-2.jpg"
                        alt="avatar"
                      />
                      <img
                        className="inline-block z-10 object-cover h-11 w-11 rounded-full ring-2 ring-green-400"
                        src="/avatar-2.jpg"
                        alt="avatar"
                      />
                      <img
                        className="inline-block object-cover h-11 w-11 rounded-full ring-2 ring-green-400"
                        src="/avatar-3.jpg"
                        alt="avatar"
                      />
                    </div>
                    <h2 className="text-center text-2xl font-black pt-2">
                      Chats
                    </h2>
                  </div>
                  <button className="cirle-button">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4165 2.58353C14.1945 3.36157 14.1945 4.62302 13.4165 5.40106L6.05846 12.7591C5.7393 13.0782 5.33939 13.3047 4.9015 13.4141L2.61933 13.9847C2.25455 14.0759 1.92413 13.7455 2.01532 13.3807L2.58587 11.0985C2.69534 10.6606 2.92176 10.2607 3.24092 9.94154L10.5989 2.58353C11.377 1.80549 12.6384 1.80549 13.4165 2.58353ZM9.89448 4.69657L3.94531 10.6459C3.75381 10.8374 3.61796 11.0774 3.55227 11.3401L3.18307 12.8169L4.6599 12.4477C4.92264 12.382 5.16258 12.2462 5.35407 12.0547L11.303 6.10513L9.89448 4.69657ZM11.3033 3.28791L10.5988 3.9923L12.0073 5.40085L12.7121 4.69668C13.1011 4.30766 13.1011 3.67693 12.7121 3.28791C12.3231 2.89889 11.6923 2.89889 11.3033 3.28791Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                <div className="w-full relative my-4">
                  <img
                    className="absolute top-1/2 z-20 -translate-y-1/2 left-6"
                    src="/voice.svg"
                    alt="voice"
                  />
                  <input
                    type="text"
                    className="input w-full outline-none border-none py-2 px-6 pl-12 placeholder:text-white placeholder:opacity-50 rounded-2xl"
                    placeholder="Search"
                  />
                </div>

                <div className="w-full flex flex-col items-start gap-1">
                  {chats.map((chat, index) => (
                    <div
                      key={index}
                      className={`hover:bg-white/10 bg-transparent duration-300 rounded-2xl w-full p-3 cursor-pointer flex gap-3 ${
                        chat?.active && "bg-slate-100/10"
                      }`}
                    >
                      <div
                        className={`w-16 h-16 shrink-0 overflow-hidden ${
                          chat.group ? "rounded-xl" : "rounded-full"
                        }`}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={chat.image}
                          alt="avatar"
                        />
                      </div>
                      <div className="w-full relative flex flex-col items-start py-1">
                        <div className="w-full flex items-center justify-between">
                          <span className="font-bold text-md">{chat.name}</span>
                          <span className="flex items-center gap-2">
                            {chat.check && (
                              <span className="">
                                <svg
                                  width="14"
                                  height="9"
                                  viewBox="0 0 14 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.6619 0.647805C10.8358 0.836913 10.8272 1.1347 10.6427 1.31294L3.36284 8.34626C3.14493 8.55679 2.80285 8.55031 2.59268 8.33166L0.132048 5.77168C-0.0458764 5.58658 -0.0437243 5.28866 0.136855 5.10628C0.317435 4.92389 0.60806 4.9261 0.785985 5.1112L2.99455 7.40893L10.013 0.628117C10.1975 0.449882 10.488 0.458697 10.6619 0.647805Z"
                                    fill="white"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.8759 0.649633C14.0492 0.839213 14.0399 1.13698 13.8549 1.31471L6.51066 8.3726C6.32572 8.55033 6.03524 8.54073 5.86185 8.35115C5.68847 8.16157 5.69784 7.8638 5.88278 7.68607L13.227 0.628179C13.412 0.450447 13.7025 0.460052 13.8759 0.649633Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            )}
                            <span className="text-sm opacity-70">
                              {chat.hour}
                            </span>
                          </span>
                        </div>
                        <div className="w-[95%] ">
                          <span className="text-sm opacity-75 line-clamp-2">
                            {chat.message}
                          </span>
                        </div>
                        {chat.unread !== 0 && (
                          <div className="absolute bottom-3 right-0 flex items-center justify-center w-5 h-5 text-sm rounded-full bg-white text-[#818078]">
                            {chat.unread}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="box-left-settings w-96 h-full shrink-0 p-4">
                <div className="flex item-center justify-between gap-4">
                  <button className="cirle-button">
                    <svg
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 5.5H15.5M0.5 0.5H15.5M0.5 10.5H15.5"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div className="flex item-center justify-center gap-4 mt-[2px]">
                    <h2 className="text-center text-2xl font-black pt-2">
                      Settings
                    </h2>
                  </div>
                  <button className="bg-white/10 px-6 rounded-full">
                    Edit
                  </button>
                </div>

                <div className="w-full relative my-4">
                  <img
                    className="absolute top-1/2 z-20 -translate-y-1/2 left-6"
                    src="/voice.svg"
                    alt="voice"
                  />
                  <input
                    type="text"
                    className="input w-full outline-none border-none py-2 px-6 pl-12 placeholder:text-white placeholder:opacity-50 rounded-2xl"
                    placeholder="Search"
                  />
                </div>

                <div className="w-full flex items-center gap-3">
                  <Image
                    className="shrink-0 w-16 h-16 flex items-center justify-center rounded-full"
                    width={2400}
                    height={1600}
                    alt="image"
                    src="/image-3.jpg"
                  />
                  <div className="w-full flex flex-col items-start gap-1">
                    <h1 className="text-lg font-bold">Alicia Torreaux</h1>
                    <p className="text-sm opacity-60">+888 1234 6789</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="border-b-2 w-full my-4 border-white/10 mx-auto"></div>
                <div className="w-full flex flex-col items-start gap-2">
                  <button className="w-full flex items-center justify-start gap-2 py-3 px-4 rounded-xl hover:bg-white/10 duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8.5 9H5.5L5.41012 9.00806C5.17688 9.05039 5 9.25454 5 9.5C5 9.74546 5.17688 9.94961 5.41012 9.99194L5.5 10H8.5L8.58988 9.99194C8.82312 9.94961 9 9.74546 9 9.5C9 9.25454 8.82312 9.05039 8.58988 9.00806L8.5 9ZM10.5 6H5.5L5.41012 6.00806C5.17688 6.05039 5 6.25454 5 6.5C5 6.74546 5.17688 6.94961 5.41012 6.99194L5.5 7H10.5L10.5899 6.99194C10.8231 6.94961 11 6.74546 11 6.5C11 6.25454 10.8231 6.05039 10.5899 6.00806L10.5 6Z"
                        fill="white"
                      />
                    </svg>
                    <span>Saved Messages</span>
                  </button>
                  <button className="w-full flex items-center justify-start gap-2 py-3 px-4 rounded-xl hover:bg-white/10 duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8.5 9H5.5L5.41012 9.00806C5.17688 9.05039 5 9.25454 5 9.5C5 9.74546 5.17688 9.94961 5.41012 9.99194L5.5 10H8.5L8.58988 9.99194C8.82312 9.94961 9 9.74546 9 9.5C9 9.25454 8.82312 9.05039 8.58988 9.00806L8.5 9ZM10.5 6H5.5L5.41012 6.00806C5.17688 6.05039 5 6.25454 5 6.5C5 6.74546 5.17688 6.94961 5.41012 6.99194L5.5 7H10.5L10.5899 6.99194C10.8231 6.94961 11 6.74546 11 6.5C11 6.25454 10.8231 6.05039 10.5899 6.00806L10.5 6Z"
                        fill="white"
                      />
                    </svg>
                    <span>Recent Calls</span>
                  </button>
                  <button className="w-full flex items-center justify-start gap-2 py-3 px-4 rounded-xl hover:bg-white/10 duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8.5 9H5.5L5.41012 9.00806C5.17688 9.05039 5 9.25454 5 9.5C5 9.74546 5.17688 9.94961 5.41012 9.99194L5.5 10H8.5L8.58988 9.99194C8.82312 9.94961 9 9.74546 9 9.5C9 9.25454 8.82312 9.05039 8.58988 9.00806L8.5 9ZM10.5 6H5.5L5.41012 6.00806C5.17688 6.05039 5 6.25454 5 6.5C5 6.74546 5.17688 6.94961 5.41012 6.99194L5.5 7H10.5L10.5899 6.99194C10.8231 6.94961 11 6.74546 11 6.5C11 6.25454 10.8231 6.05039 10.5899 6.00806L10.5 6Z"
                        fill="white"
                      />
                    </svg>
                    <span>Chat Folders</span>
                  </button>
                </div>
                <div className="border-b-2 w-full my-2 border-white/10 mx-auto"></div>
                <div className="w-full flex flex-col items-start gap-2">
                  <button className="w-full flex items-center justify-start gap-2 py-3 px-4 rounded-xl hover:bg-white/10 duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.9979 2C13.1469 2 15.7418 4.33488 15.9824 7.3554L15.9958 7.57762L16.0003 7.80214L15.9993 11.398L16.9247 13.6202C16.9472 13.6743 16.9649 13.7302 16.9776 13.7871L16.9929 13.8733L17.0015 14.0046C17.0015 14.4526 16.705 14.8387 16.2524 14.9677L16.136 14.9945L16.0015 15.0046L12.4999 15.004L12.4949 15.1653C12.4098 16.469 11.3254 17.5 10.0003 17.5C8.67478 17.5 7.59022 16.4685 7.50558 15.1644L7.49986 15.004L3.99915 15.0046C3.9112 15.0046 3.82383 14.993 3.73927 14.9702L3.61481 14.9277C3.20403 14.7567 2.96206 14.3392 3.01246 13.8757L3.03354 13.7483L3.07596 13.6202L3.99926 11.401L4.00035 7.79281L4.00465 7.56824C4.12726 4.45115 6.77129 2 9.9979 2ZM11.4999 15.004H8.49986L8.50722 15.1454C8.57576 15.8581 9.143 16.425 9.8558 16.4931L10.0003 16.5C10.78 16.5 11.4207 15.9051 11.4934 15.1445L11.4999 15.004ZM9.9979 3C7.37535 3 5.22741 4.92372 5.0174 7.38498L5.00417 7.59723L5.00026 7.80214V11.5L4.96185 11.6922L3.99914 14.0046L15.9569 14.0066L16.0021 14.0045L15.0387 11.6922L15.0003 11.5L15.0004 7.81241L14.9963 7.60831C14.8911 5.0349 12.6949 3 9.9979 3Z"
                        fill="white"
                      />
                    </svg>
                    <span>Notifications</span>
                  </button>
                  <button className="w-full bg-white/10 flex items-center justify-start gap-2 py-3 px-4 rounded-xl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2C11.6569 2 13 3.34315 13 5V6H14C15.1046 6 16 6.89543 16 8V15C16 16.1046 15.1046 17 14 17H6C4.89543 17 4 16.1046 4 15V8C4 6.89543 4.89543 6 6 6H7V5C7 3.34315 8.34315 2 10 2ZM14 7H6C5.44772 7 5 7.44772 5 8V15C5 15.5523 5.44772 16 6 16H14C14.5523 16 15 15.5523 15 15V8C15 7.44772 14.5523 7 14 7ZM10 10.5C10.5523 10.5 11 10.9477 11 11.5C11 12.0523 10.5523 12.5 10 12.5C9.44772 12.5 9 12.0523 9 11.5C9 10.9477 9.44772 10.5 10 10.5ZM10 3C8.89543 3 8 3.89543 8 5V6H12V5C12 3.89543 11.1046 3 10 3Z"
                        fill="white"
                      />
                    </svg>
                    <span>Privacy and Security</span>
                  </button>
                  <button className="w-full flex items-center justify-start gap-2 py-3 px-4 rounded-xl hover:bg-white/10 duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.16667 3C7.43713 3 7.70151 3.0731 7.93238 3.21016L8.06667 3.3L9.667 4.5H15.5C16.7703 4.5 17.8192 5.44737 17.9789 6.67409L17.9947 6.83562L18 7V14.5C18 15.8255 16.9685 16.91 15.6644 16.9947L15.5 17H4.5C3.17452 17 2.08996 15.9685 2.00532 14.6644L2 14.5V5.5C2 4.17452 3.03154 3.08996 4.33562 3.00532L4.5 3H7.16667ZM8.15763 7.03449C7.90991 7.2946 7.57838 7.45592 7.22435 7.49219L7.07143 7.5L3 7.499V14.5C3 15.2797 3.59489 15.9204 4.35554 15.9931L4.5 16H15.5C16.2797 16 16.9204 15.4051 16.9931 14.6445L17 14.5V7C17 6.2203 16.4051 5.57955 15.6445 5.50687L15.5 5.5H9.617L8.15763 7.03449ZM7.16667 4H4.5C3.7203 4 3.07955 4.59489 3.00687 5.35554L3 5.5V6.499L7.07143 6.5C7.1809 6.5 7.28655 6.46411 7.37274 6.39902L7.4335 6.34483L8.694 5.021L7.46667 4.1C7.40176 4.05132 7.32632 4.01941 7.24701 4.0065L7.16667 4Z"
                        fill="white"
                      />
                    </svg>
                    <span>Data and Storage</span>
                  </button>
                  <button className="w-full flex items-center justify-start gap-2 py-3 px-4 rounded-xl hover:bg-white/10 duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.53828 2C4.94843 2 2.03828 4.91015 2.03828 8.5C2.03828 9.651 2.33787 10.7334 2.86353 11.6719L2.06779 13.7542C1.7745 14.5216 2.48048 15.2957 3.2716 15.0741L5.75898 14.3774C6.60219 14.7768 7.5448 15 8.53828 15C12.1281 15 15.0383 12.0899 15.0383 8.5C15.0383 4.91015 12.1281 2 8.53828 2ZM3.03828 8.5C3.03828 5.46243 5.50071 3 8.53828 3C11.5758 3 14.0383 5.46243 14.0383 8.5C14.0383 11.5376 11.5758 14 8.53828 14C7.63615 14 6.78612 13.7832 6.03606 13.3993L5.86185 13.3101L3.0019 14.1111L3.97101 11.5753L3.84272 11.3655C3.33247 10.5313 3.03828 9.55079 3.03828 8.5ZM11.5009 18C9.53124 18 7.76622 17.1239 6.57422 15.7402C7.13727 15.8926 7.7266 15.981 8.33392 15.9973C9.22932 16.629 10.3218 17 11.5009 17C12.403 17 13.253 16.7832 14.0031 16.3993L14.1773 16.3101L17.0373 17.1111L16.0681 14.5752L16.1964 14.3655C16.7067 13.5313 17.0009 12.5508 17.0009 11.5C17.0009 10.3455 16.6452 9.27414 16.0374 8.38943C16.0286 7.78165 15.9475 7.19137 15.8024 6.6268C17.1506 7.81779 18.0009 9.5596 18.0009 11.5C18.0009 12.651 17.7013 13.7333 17.1756 14.6719L17.9714 16.7542C18.2646 17.5216 17.5587 18.2957 16.7675 18.0741L14.2802 17.3774C13.437 17.7768 12.4943 18 11.5009 18Z"
                        fill="white"
                      />
                    </svg>
                    <span>Apparence</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="box-right overflow-hidden flex w-full">
              <div className="box-right-chats w-full shrink-0 h-full p-4 flex flex-col items-center justify-between">
                <div className="w-full flex items-center justify-between gap-4">
                  <button className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col items-center gap-1">
                    <h1 className="text-xl text-center font-bold">
                      Digital Nomads
                    </h1>
                    <p className="text-center text-sm opacity-70">
                      2.34k Members, 300 Online
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Image
                      className="w-[50px] h-[50px] object-cover rounded-full"
                      width={2400}
                      height={1600}
                      alt="image"
                      src="/image-2.jpg"
                    />
                  </div>
                </div>
                <div className="w-full h-full z-10 py-4">
                  <div className="w-full flex items-center justify-center">
                    <button className="bg-white/20 py-1 px-4 rounded-full text-sm">
                      LN joined the group
                    </button>
                  </div>
                  <div className="w-full flex flex-col items-center my-4 space-y-4">
                    <div className="self-start flex items-center gap-2">
                      <Image
                        className="w-[50px] h-[50px] object-cover rounded-full"
                        width={2400}
                        height={1600}
                        alt="image"
                        src="/image-2.jpg"
                      />
                      <div className="w-[385px] rounded-full relative bg-black/20 py-2 pl-4 pr-20 text-justify text-opacity-80 text-white">
                        Hello Everyone 👋🏾
                        <span className="absolute scale-[.8] right-1 bottom-1 flex items-center gap-2">
                          <span className="">
                            <svg
                              width="14"
                              height="9"
                              viewBox="0 0 14 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.6619 0.647805C10.8358 0.836913 10.8272 1.1347 10.6427 1.31294L3.36284 8.34626C3.14493 8.55679 2.80285 8.55031 2.59268 8.33166L0.132048 5.77168C-0.0458764 5.58658 -0.0437243 5.28866 0.136855 5.10628C0.317435 4.92389 0.60806 4.9261 0.785985 5.1112L2.99455 7.40893L10.013 0.628117C10.1975 0.449882 10.488 0.458697 10.6619 0.647805Z"
                                fill="white"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.8759 0.649633C14.0492 0.839213 14.0399 1.13698 13.8549 1.31471L6.51066 8.3726C6.32572 8.55033 6.03524 8.54073 5.86185 8.35115C5.68847 8.16157 5.69784 7.8638 5.88278 7.68607L13.227 0.628179C13.412 0.450447 13.7025 0.460052 13.8759 0.649633Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span className="text-sm opacity-70">9:41 PM</span>
                        </span>
                      </div>
                    </div>

                    <div className="self-start flex items-end gap-2 ml-14">
                      <Image
                        className="w-[385px] h-[190px] object-cover rounded-2xl cursor-pointer z-50"
                        width={2400}
                        height={1600}
                        alt="image"
                        src="/image-1.jpg"
                      />
                    </div>

                    <div className="self-start flex items-end gap-2">
                      <Image
                        className="w-[50px] h-[50px] object-cover rounded-full"
                        width={2400}
                        height={1600}
                        alt="image"
                        src="/avatar-4.jpg"
                      />
                      <div className="w-[385px] rounded-2xl rounded-bl-none relative bg-black/20 py-4 pt-3 pl-4 pr-20 text-justify text-opacity-80 text-white">
                        J&apos;avais créé une application pour permettre aux
                        personnes de créer et postuler à des offres
                        d&apos;emplois.
                        <br />
                        J&apos;ai eu un bug qui m&apos;avait fait mettre pause
                        mais je l&apos;ai résolu hier.
                        <span className="absolute scale-[.8] right-1 bottom-1 flex items-center gap-2">
                          <span className="">
                            <svg
                              width="14"
                              height="9"
                              viewBox="0 0 14 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.6619 0.647805C10.8358 0.836913 10.8272 1.1347 10.6427 1.31294L3.36284 8.34626C3.14493 8.55679 2.80285 8.55031 2.59268 8.33166L0.132048 5.77168C-0.0458764 5.58658 -0.0437243 5.28866 0.136855 5.10628C0.317435 4.92389 0.60806 4.9261 0.785985 5.1112L2.99455 7.40893L10.013 0.628117C10.1975 0.449882 10.488 0.458697 10.6619 0.647805Z"
                                fill="white"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.8759 0.649633C14.0492 0.839213 14.0399 1.13698 13.8549 1.31471L6.51066 8.3726C6.32572 8.55033 6.03524 8.54073 5.86185 8.35115C5.68847 8.16157 5.69784 7.8638 5.88278 7.68607L13.227 0.628179C13.412 0.450447 13.7025 0.460052 13.8759 0.649633Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span className="text-sm opacity-70">9:41 PM</span>
                        </span>
                      </div>
                    </div>
                    <div className="rounded-full relative font-bold bg-white/10 py-2 pl-4 pr-20 self-end">
                      Do you have any idea what time it is ?
                      <span className="absolute scale-[.8] right-1 bottom-1 flex items-center gap-2">
                        <span className="">
                          <svg
                            width="14"
                            height="9"
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.6619 0.647805C10.8358 0.836913 10.8272 1.1347 10.6427 1.31294L3.36284 8.34626C3.14493 8.55679 2.80285 8.55031 2.59268 8.33166L0.132048 5.77168C-0.0458764 5.58658 -0.0437243 5.28866 0.136855 5.10628C0.317435 4.92389 0.60806 4.9261 0.785985 5.1112L2.99455 7.40893L10.013 0.628117C10.1975 0.449882 10.488 0.458697 10.6619 0.647805Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.8759 0.649633C14.0492 0.839213 14.0399 1.13698 13.8549 1.31471L6.51066 8.3726C6.32572 8.55033 6.03524 8.54073 5.86185 8.35115C5.68847 8.16157 5.69784 7.8638 5.88278 7.68607L13.227 0.628179C13.412 0.450447 13.7025 0.460052 13.8759 0.649633Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <span className="text-sm opacity-70">9:41 PM</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between gap-4">
                  <button className="w-12 h-12 shrink-0 rounded-full flex justify-center items-center bg-white/20 z-30">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.77169 2.74358C12.1132 0.399998 15.9121 0.399998 18.2553 2.74314C20.5384 5.02621 20.5969 8.69142 18.4309 11.0454L18.2428 11.2427L9.44273 20.0409L9.40616 20.0712C7.94492 21.3879 5.69092 21.3432 4.28355 19.9358C2.96453 18.6168 2.84241 16.5541 3.9172 15.0974C3.94054 15.0521 3.96879 15.0083 4.002 14.9672L4.05556 14.9075L4.14247 14.8198L4.28355 14.6719L4.28647 14.6748L11.7222 7.22047C11.9881 6.95385 12.4047 6.92909 12.6986 7.14656L12.7829 7.21906C13.0495 7.48497 13.0742 7.9016 12.8568 8.19551L12.7843 8.27972L5.18966 15.8928C4.47202 16.7684 4.5219 18.0627 5.3393 18.8801C6.16836 19.7091 7.48801 19.7486 8.3638 18.9985L17.1965 10.1681C18.952 8.41041 18.952 5.56116 17.1946 3.8038C15.4922 2.10136 12.765 2.04816 10.9986 3.6442L10.8307 3.8038L10.8181 3.81812L1.28179 13.3544C0.988902 13.6473 0.514028 13.6473 0.221135 13.3544C-0.0451319 13.0882 -0.0693378 12.6715 0.148517 12.3779L0.221135 12.2938L9.77001 2.74314L9.77169 2.74358Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <div className="w-full relative">
                    <img
                      className="absolute top-1/2 -translate-y-1/2 left-6 z-20"
                      src="/voice.svg"
                      alt="voice"
                    />
                    <input
                      type="text"
                      className="input w-full outline-none border-none py-2 px-6 pl-12 placeholder:text-white placeholder:opacity-50 rounded-[40px]"
                      placeholder="Message"
                    />
                    <img
                      className="absolute top-1/2 -translate-y-1/2 right-6 z-20"
                      src="/sticker.svg"
                      alt="sticker"
                    />
                  </div>
                  <button className="w-12 h-12 shrink-0 rounded-full flex justify-center items-center bg-white/20 z-30">
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.25 9C13.6297 9 13.9435 9.28215 13.9932 9.64823L14 9.75V10.25C14 13.8094 11.245 16.7254 7.75098 16.9817L7.75 19.25C7.75 19.6642 7.41421 20 7 20C6.6203 20 6.30651 19.7178 6.25685 19.3518L6.25 19.25L6.25002 16.9818C2.83323 16.7316 0.122835 13.938 0.00406027 10.4863L0 10.25V9.75C0 9.33579 0.335786 9 0.75 9C1.1297 9 1.44349 9.28215 1.49315 9.64823L1.5 9.75V10.25C1.5 13.077 3.73445 15.3821 6.5336 15.4956L6.75 15.5H7.25C10.077 15.5 12.3821 13.2656 12.4956 10.4664L12.5 10.25V9.75C12.5 9.33579 12.8358 9 13.25 9ZM7 0C9.20914 0 11 1.79086 11 4V10C11 12.2091 9.20914 14 7 14C4.79086 14 3 12.2091 3 10V4C3 1.79086 4.79086 0 7 0ZM7 1.5C5.61929 1.5 4.5 2.61929 4.5 4V10C4.5 11.3807 5.61929 12.5 7 12.5C8.38071 12.5 9.5 11.3807 9.5 10V4C9.5 2.61929 8.38071 1.5 7 1.5Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="box-right-settings w-full shrink-0 h-full p-4 gap-4 flex flex-col">
                <div className="w-full flex items-center justify-between gap-4">
                  <button className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col items-center gap-1 w-full">
                    <h1 className="text-xl text-center font-bold pr-12">
                      Privacy and Security
                    </h1>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col items-center">
                  <div className="rounded-2xl overflow-hidden w-96 bg-black/10">
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3">
                      <span className="text-sm">Blocked Users</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <div className="border-b-2 w-full my-0 border-white/10 mx-auto"></div>
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3">
                      <span className="text-sm">Passcode</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <div className="border-b-2 w-full my-0 border-white/10 mx-auto"></div>
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3">
                      <span className="text-sm">Two-Step Verification</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <div className="border-b-2 w-full my-0 border-white/10 mx-auto"></div>
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3">
                      <span className="text-sm">Auto-Delete Messages </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs opacity-50 px-6 py-3 w-96">
                    Automatically delete messages for everyone after a period of
                    time in all new chats you start.
                  </p>
                  <div className="w-96 px-4">
                    <h2 className="mt-3 mb-3 text-left text-lg font-bold">Privacy</h2>
                  </div>
                  <div className="rounded-2xl overflow-hidden w-96 bg-black/10">
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3">
                      <span className="text-sm">Phone Number</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <div className="border-b-2 w-full my-0 border-white/10 mx-auto"></div>
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3">
                      <span className="text-sm">Last Seen & Online</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <div className="border-b-2 w-full my-0 border-white/10 mx-auto"></div>
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3">
                      <span className="text-sm">Profile Photos</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <div className="border-b-2 w-full my-0 border-white/10 mx-auto"></div>
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3">
                      <span className="text-sm">Voice Messages</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs opacity-50 px-6 py-3 w-96">
                    Change who can see your Last Seen, Profile Photo and Status
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute top-1/2 -translate-y-1/2 -left-[100px] z-20 px-4 py-4 flex flex-col items-start gap-2">
            <div className="nav px-4 py-4 flex flex-col items-start gap-2">
              <button className="nav-button flex items-center justify-start p-2 w-full gap-2">
                <span className="flex items-center justify-center">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM17 10C17 12.2091 15.2091 14 13 14C10.7909 14 9 12.2091 9 10C9 7.79086 10.7909 6 13 6C15.2091 6 17 7.79086 17 10ZM20.5696 19.9231C20.3936 19.5007 20.1314 19.3274 19.6069 18.9809C17.7121 17.7289 15.4412 17 13.0001 17C10.559 17 8.28806 17.7289 6.39319 18.981C5.86874 19.3276 5.60652 19.5008 5.43056 19.9232C5.30846 20.2163 5.30847 20.7839 5.43057 21.0769C5.60654 21.4993 5.86876 21.6726 6.39321 22.0191C8.28805 23.2711 10.5589 24 13 24C15.4412 24 17.7121 23.2711 19.6069 22.019C20.1314 21.6724 20.3936 21.4992 20.5696 21.0768C20.6917 20.7838 20.6917 20.2161 20.5696 19.9231Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="text-white">Contacts</span>
              </button>
              <button className="nav-button flex items-center justify-start p-2 w-full gap-2">
                <span className="flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.36751 1.06498C3.47524 0.115295 5.1431 0.24341 6.09279 1.35114C6.17156 1.44301 6.24392 1.54019 6.30936 1.64199L8.31243 4.75766C9.05549 5.90547 8.96371 7.39333 8.08676 8.41592L7.27111 9.32736C6.58095 10.0986 6.58961 11.2747 7.29122 12.0574C7.93006 12.9486 8.63197 13.7766 9.39696 14.5416L9.7847 14.9189C10.4397 15.5388 11.1385 16.115 11.8811 16.6474C12.6248 17.3139 13.7234 17.355 14.4926 16.7658L14.6112 16.6675L15.5227 15.8518C16.4988 15.0147 17.8988 14.8931 19.0224 15.53L19.1809 15.6262L22.2966 17.6292C22.3984 17.6947 22.4956 17.767 22.5875 17.8458C23.6952 18.7955 23.8233 20.4634 22.8736 21.5711C20.3067 24.1379 14.6791 25.1344 6.96011 17.5867L6.65433 17.2843C-1.22181 9.40813 -0.233126 3.66562 2.36751 1.06498Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="text-white opacity-[.85]">Calls</span>
              </button>
              <button
                onClick={openChats}
                className="nav-button button-chats active flex items-center justify-start p-2 w-full gap-2"
              >
                <span className="flex items-center justify-center">
                  <svg
                    width="29"
                    height="26"
                    viewBox="0 0 29 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8902 3.03227C16.8914 1.162 14.095 0 11 0C4.92487 0 0 4.47715 0 10C0 13.1499 1.47133 15.7318 3.97498 17.5647C4.29515 17.7991 4.59005 19.1016 3.87638 20.1956C3.58455 20.643 3.26327 20.991 3.01594 21.2589C2.65843 21.6462 2.45542 21.8661 2.71917 21.9767C2.99426 22.0921 4.61974 22.1492 5.79294 21.4912C6.71121 20.9763 7.26736 20.4625 7.64189 20.1166C7.95158 19.8305 8.13709 19.6592 8.30048 19.6967C8.8863 19.831 9.49081 19.9227 10.1098 19.9677C10.1182 19.9683 10.1267 19.9689 10.1351 19.9695C10.4205 19.9897 10.7089 20 11 20C17.0751 20 22 15.5228 22 10C22 7.29077 20.8149 4.83317 18.8902 3.03227Z"
                      fill="white"
                    />
                    <path
                      d="M29 13C29 9.0932 26.5356 5.70967 22.9429 4.06405C22.5059 3.86387 22.1121 4.37581 22.3411 4.79849C23.1828 6.35273 23.66 8.11446 23.66 10C23.66 15.6043 19.444 20.1149 13.9721 21.3341C13.4915 21.4412 13.3851 22.0914 13.8467 22.2627C15.1282 22.738 16.5305 23 18 23C18.9314 23 19.8358 22.8948 20.6995 22.6967C20.8629 22.6592 21.0484 22.8305 21.3581 23.1166C21.7326 23.4625 22.2888 23.9763 23.2071 24.4912C24.3803 25.1492 26.0057 25.0921 26.2808 24.9767C26.5446 24.8661 26.3416 24.6462 25.9841 24.2589C25.7367 23.991 25.4155 23.643 25.1236 23.1956C24.41 22.1016 24.7048 20.7991 25.025 20.5647C27.5287 18.7318 29 16.1499 29 13Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="text-white opacity-[.85]">Chats</span>
              </button>
              <button
                onClick={openSettins}
                className="nav-button button-settings flex items-center justify-start p-2 w-full gap-2"
              >
                <span className="flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.069 12.0176C21.2235 12.6121 20.738 13.1656 20.1237 13.1657L15.4587 13.1662C15.1305 13.1662 14.8231 13.0052 14.6364 12.7353L11.5606 8.29134C11.2215 7.80142 11.4125 7.09976 11.9856 6.93656C12.6257 6.75427 13.3015 6.65668 14 6.65668C17.3331 6.65668 20.1473 8.87828 21.0426 11.9215C21.0513 11.9513 21.0602 11.9835 21.069 12.0176Z"
                      fill="white"
                    />
                    <path
                      d="M10.1131 9.11844C9.7763 8.63202 9.083 8.53295 8.66799 8.95459C8.63605 8.98703 8.60645 9.01805 8.58002 9.04697C7.38747 10.3521 6.66004 12.0894 6.66004 13.9967C6.66004 15.9198 7.39964 17.6702 8.60992 18.9789C8.62804 18.9985 8.64769 19.0191 8.66858 19.0405C9.08145 19.4634 9.77569 19.3622 10.1121 18.8763L13.0964 14.5659C13.3335 14.2235 13.3335 13.7699 13.0964 13.4274L10.1131 9.11844Z"
                      fill="white"
                    />
                    <path
                      d="M12.1081 21.0906C12.7117 21.2511 13.3459 21.3367 14 21.3367C17.3102 21.3367 20.1086 19.1455 21.0239 16.1345C21.0382 16.0872 21.0527 16.0342 21.0672 15.9772C21.2187 15.3809 20.7364 14.8268 20.1211 14.8267L15.4577 14.8263C15.1295 14.8263 14.8222 14.9873 14.6354 15.2572L11.6064 19.6339C11.2437 20.1579 11.4511 20.9047 12.0642 21.0785C12.0792 21.0827 12.0939 21.0868 12.1081 21.0906Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 1.33002C13 0.777732 13.4478 0.330017 14 0.330017C14.5523 0.330017 15 0.777732 15 1.33002V2.15958C15 2.55869 15.2588 2.91172 15.6394 3.03191L16.271 3.23137C16.6632 3.31369 17.0477 3.41691 17.4233 3.53979L18.0627 3.68125C18.4524 3.76746 18.853 3.59109 19.0526 3.24545L19.4674 2.52703C19.7435 2.04874 20.3551 1.88486 20.8334 2.161C21.3117 2.43715 21.4755 3.04874 21.1994 3.52703L20.7846 4.24545C20.5851 4.59109 20.6326 5.0262 20.9021 5.32056L21.3644 5.82548C21.647 6.08037 21.9164 6.34972 22.1712 6.63236L22.6762 7.09461C22.9705 7.36411 23.4056 7.41166 23.7513 7.21211L24.4697 6.79733C24.948 6.52118 25.5596 6.68506 25.8357 7.16335C26.1119 7.64164 25.948 8.25323 25.4697 8.52938L24.7513 8.94416C24.4056 9.14371 24.2293 9.5443 24.3155 9.93398L24.4569 10.5734C24.5798 10.949 24.683 11.3335 24.7653 11.7257L24.9648 12.3574C25.085 12.7379 25.438 12.9967 25.8371 12.9967H26.6667C27.219 12.9967 27.6667 13.4444 27.6667 13.9967C27.6667 14.549 27.219 14.9967 26.6667 14.9967H25.8371C25.438 14.9967 25.085 15.2554 24.9648 15.636L24.7653 16.2677C24.683 16.6599 24.5798 17.0443 24.457 17.4199L24.3155 18.0594C24.2293 18.4491 24.4056 18.8497 24.7513 19.0492L25.4697 19.464C25.948 19.7401 26.1119 20.3517 25.8357 20.83C25.5596 21.3083 24.948 21.4722 24.4697 21.196L23.7513 20.7813C23.4056 20.5817 22.9705 20.6293 22.6762 20.8988L22.1712 21.3611C21.9163 21.6437 21.647 21.913 21.3644 22.1679L20.9021 22.6728C20.6326 22.9672 20.5851 23.4023 20.7846 23.7479L21.1994 24.4663C21.4755 24.9446 21.3117 25.5562 20.8334 25.8324C20.3551 26.1085 19.7435 25.9446 19.4673 25.4663L19.0526 24.7479C18.853 24.4023 18.4524 24.2259 18.0627 24.3121L17.4234 24.4536C17.0477 24.5765 16.6632 24.6797 16.271 24.762L15.6394 24.9615C15.2588 25.0816 15 25.4347 15 25.8338V26.6634C15 27.2156 14.5523 27.6634 14 27.6634C13.4478 27.6634 13 27.2156 13 26.6634V25.8338C13 25.4347 12.7413 25.0816 12.3607 24.9615L11.7291 24.762C11.3369 24.6797 10.9523 24.5765 10.5767 24.4536L9.93734 24.3121C9.54766 24.2259 9.14707 24.4023 8.94752 24.7479L8.53273 25.4663C8.25659 25.9446 7.645 26.1085 7.16671 25.8324C6.68842 25.5562 6.52454 24.9446 6.80068 24.4663L7.21547 23.7479C7.41502 23.4023 7.36746 22.9672 7.09796 22.6728L6.63573 22.1679C6.35307 21.913 6.08371 21.6436 5.8288 21.361L5.32392 20.8988C5.02955 20.6293 4.59445 20.5817 4.24881 20.7813L3.53039 21.196C3.0521 21.4722 2.44051 21.3083 2.16436 20.83C1.88822 20.3517 2.0521 19.7401 2.53039 19.464L3.24881 19.0492C3.59445 18.8497 3.77082 18.4491 3.68461 18.0594L3.54317 17.42C3.42027 17.0444 3.31705 16.6599 3.23472 16.2676L3.03526 15.636C2.91508 15.2554 2.56204 14.9967 2.16294 14.9967H1.33337C0.781089 14.9967 0.333374 14.549 0.333374 13.9967C0.333374 13.4444 0.781089 12.9967 1.33337 12.9967H2.16294C2.56204 12.9967 2.91508 12.7379 3.03526 12.3574L3.23472 11.7258C3.31704 11.3335 3.42026 10.949 3.54315 10.5734L3.6846 9.93398C3.77081 9.5443 3.59444 9.14371 3.24881 8.94416L2.53038 8.52938C2.05209 8.25323 1.88822 7.64164 2.16436 7.16335C2.4405 6.68506 3.05209 6.52118 3.53038 6.79733L4.24881 7.21211C4.59444 7.41166 5.02955 7.36411 5.32392 7.09461L5.82882 6.63237C6.08372 6.34972 6.35307 6.08036 6.63572 5.82546L7.09796 5.32056C7.36746 5.02619 7.41501 4.59109 7.21546 4.24545L6.80068 3.52703C6.52454 3.04874 6.68841 2.43715 7.1667 2.161C7.645 1.88486 8.25659 2.04874 8.53273 2.52703L8.94751 3.24545C9.14706 3.59109 9.54766 3.76746 9.93734 3.68125L10.5767 3.5398C10.9524 3.41691 11.3369 3.31369 11.7291 3.23137L12.3607 3.03191C12.7413 2.91172 13 2.55869 13 2.15958V1.33002ZM14 22.9967C18.9706 22.9967 23 18.9672 23 13.9967C23 9.02612 18.9706 4.99668 14 4.99668C9.02948 4.99668 5.00004 9.02612 5.00004 13.9967C5.00004 18.9672 9.02948 22.9967 14 22.9967Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="text-white opacity-[.85]">Settings</span>
              </button>
            </div>
          </div>

          <img
            src="/vector-1.svg"
            alt="vector"
            className="absolute vector -bottom-8 -right-8 w-[45px]"
          />
          <img
            src="/vector-2.svg"
            alt="vector"
            className="absolute vector -bottom-20 -translate-x-1/2 left-1/2 w-[180px]"
          />
          <div className="box-author py-4 px-8 absolute -top-24 -translate-x-1/2 left-1/2">
            <a href="https://leonelngoya.com" className="text-white">
              Coded by LN
            </a>
          </div>
        </div>
      </div>

      <div className="main-container-none items-center justify-center min-h-screen">
        <p className="p-4 text-xl text-center font-light text-white">
          Please resize your screen ...
        </p>
      </div>
    </main>
  );
}

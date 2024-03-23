import { Link } from "react-router-dom";
import ReactRoadmap from "../assets/blogs/React-Roadmap.jpg";
import TailwindThum from "../assets/blogs/taiulwind-cn-thumb.jpg";
import CloseIcon from "../assets/icons/close.svg";

export default function SearchPage() {
  return (
    <>
      <section class="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        <div class="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <div>
            <h3 class="font-bold text-xl pl-2 text-slate-400 my-2">
              Search for Your Desire Blogs
            </h3>
            <input
              type="text"
              placeholder="Start Typing to Search"
              class="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
            />
          </div>

          <div class="">
            <h3 class="text-slate-400 font-bold mt-6">Search Results</h3>
            <div class="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
              <div class="flex gap-6 py-2">
                <img class="h-28 object-contain" src={TailwindThum} alt="" />
                <div class="mt-2">
                  <h3 class="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p class="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>

              <div class="flex gap-6 py-2">
                <img class="h-28 object-contain" src={TailwindThum} alt="" />
                <div class="mt-2">
                  <h3 class="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p class="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>

              <div class="flex gap-6 py-2">
                <img class="h-28 object-contain" src={TailwindThum} alt="" />
                <div class="mt-2">
                  <h3 class="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p class="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>
              <div class="flex gap-6 py-2">
                <img class="h-28 object-contain" src={TailwindThum} alt="" />
                <div class="mt-2">
                  <h3 class="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p class="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>
              <div class="flex gap-6 py-2">
                <img class="h-28 object-contain" src={TailwindThum} alt="" />
                <div class="mt-2">
                  <h3 class="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p class="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/">
            <img
              src={CloseIcon}
              alt="Close"
              class="absolute right-2 top-2 cursor-pointer w-8 h-8"
            />
          </Link>
        </div>
      </section>

      <main>
        <section>
          <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-7 gap-4">
              <div class="space-y-3 md:col-span-5">
                <div class="blog-card">
                  <img class="blog-thumb" src={ReactRoadmap} alt="" />
                  <div class="mt-2 relative">
                    <a href="./single-blog.html">
                      <h3 class="text-slate-300 text-xl lg:text-2xl">
                        React Roadmap in 2024
                      </h3>
                    </a>
                    <p class="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div class="flex justify-between items-center">
                      <div class="flex items-center capitalize space-x-2">
                        <div class="avater-img bg-indigo-600 text-white">
                          <span class="">S</span>
                        </div>

                        <div>
                          <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                          <div class="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div class="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>

                    <div class="absolute right-0 top-0">
                      <button>
                        <img
                          src="./assets/icons/3dots.svg"
                          alt="3dots of Action"
                        />
                      </button>

                      <div class="action-modal-container">
                        <button class="action-menu-item hover:text-lwsGreen">
                          <img src="./assets/icons/edit.svg" alt="Edit" />
                          Edit
                        </button>
                        <button class="action-menu-item hover:text-red-500">
                          <img src="./assets/icons/delete.svg" alt="Delete" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="blog-card">
                  <img
                    class="blog-thumb"
                    src="./assets/blogs/Underrated Video.jpg"
                    alt=""
                  />
                  <div class="mt-2">
                    <h3 class="text-slate-300 text-xl lg:text-2xl">
                      React Fetch API
                    </h3>
                    <p class="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div class="flex justify-between items-center">
                      <div class="flex items-center capitalize space-x-2">
                        <div class="avater-img bg-indigo-600 text-white">
                          <span class="">S</span>
                        </div>

                        <div>
                          <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                          <div class="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div class="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="blog-card">
                  <img
                    class="blog-thumb"
                    src="./assets/blogs/taiulwind-cn-thumb.jpg"
                    alt=""
                  />
                  <div class="mt-2">
                    <h3 class="text-slate-300 text-xl lg:text-2xl">
                      Style your components with TailwindCSS
                    </h3>
                    <p class="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div class="flex justify-between items-center">
                      <div class="flex items-center capitalize space-x-2">
                        <div class="avater-img bg-indigo-600 text-white">
                          <span class="">S</span>
                        </div>

                        <div>
                          <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                          <div class="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div class="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="blog-card">
                  <img
                    class="blog-thumb"
                    src="./assets/blogs/React-Roadmap.jpg"
                    alt=""
                  />
                  <div class="mt-2">
                    <a href="./single-blog.html">
                      <h3 class="text-slate-300 text-xl lg:text-2xl">
                        React Roadmap in 2024
                      </h3>
                    </a>
                    <p class="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div class="flex justify-between items-center">
                      <div class="flex items-center capitalize space-x-2">
                        <div class="avater-img bg-indigo-600 text-white">
                          <span class="">S</span>
                        </div>

                        <div>
                          <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                          <div class="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div class="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="blog-card">
                  <img
                    class="blog-thumb"
                    src="./assets/blogs/Underrated Video.jpg"
                    alt=""
                  />
                  <div class="mt-2">
                    <h3 class="text-slate-300 text-xl lg:text-2xl">
                      React Fetch API
                    </h3>
                    <p class="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div class="flex justify-between items-center">
                      <div class="flex items-center capitalize space-x-2">
                        <div class="avater-img bg-indigo-600 text-white">
                          <span class="">S</span>
                        </div>

                        <div>
                          <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                          <div class="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div class="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="blog-card">
                  <img
                    class="blog-thumb"
                    src="./assets/blogs/taiulwind-cn-thumb.jpg"
                    alt=""
                  />
                  <div class="mt-2">
                    <h3 class="text-slate-300 text-xl lg:text-2xl">
                      Style your components with TailwindCSS
                    </h3>
                    <p class="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div class="flex justify-between items-center">
                      <div class="flex items-center capitalize space-x-2">
                        <div class="avater-img bg-indigo-600 text-white">
                          <span class="">S</span>
                        </div>

                        <div>
                          <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
                          <div class="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div class="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:col-span-2 h-full w-full space-y-5">
                <div class="sidebar-card">
                  <h3 class="text-slate-300 text-xl lg:text-2xl font-semibold">
                    Most Popular 👍️
                  </h3>

                  <ul class="space-y-5 my-5">
                    <li>
                      <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p class="text-slate-600 text-sm">
                        by Saad Hasan <span>·</span> 100 Likes
                      </p>
                    </li>

                    <li>
                      <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p class="text-slate-600 text-sm">
                        by Saad Hasan <span>·</span> 100 Likes
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

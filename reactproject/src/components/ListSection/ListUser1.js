import React from "react";

const ListUser1 = () => {
  return (
    <div class="min-h-[1024px] bg-white">
      <div class="min-h-full">
        <main class="pt-8 pb-16">
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="px-4 sm:px-0">
              <h2 class="text-lg font-medium text-gray-900">Candidates</h2>

              <div class="sm:hidden">
                <label for="tabs" class="sr-only">
                  Select a tab
                </label>

                <select
                  id="tabs"
                  name="tabs"
                  class="mt-4 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                >
                  <option>Applied</option>

                  <option>Phone Screening</option>

                  <option selected="">Interview</option>

                  <option>Offer</option>

                  <option>Disqualified</option>
                </select>
              </div>
              <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                  <nav class="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                    <a
                      href="#"
                      class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      x-state-description='undefined: "border-purple-500 text-purple-600", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"'
                    >
                      Applied
                      <span
                        class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                        x-state-description='undefined: "bg-purple-100 text-purple-600", undefined: "bg-gray-100 text-gray-900"'
                      >
                        2
                      </span>
                    </a>
                    <a
                      href="#"
                      class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      x-state-description='undefined: "border-purple-500 text-purple-600", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"'
                    >
                      Phone Screening
                      <span
                        class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                        x-state-description='undefined: "bg-purple-100 text-purple-600", undefined: "bg-gray-100 text-gray-900"'
                      >
                        4
                      </span>
                    </a>

                    <a
                      href="#"
                      class="border-purple-500 text-purple-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      x-state-description='undefined: "border-purple-500 text-purple-600", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"'
                    >
                      Interview
                      <span
                        class="bg-purple-100 text-purple-600 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                        x-state-description='undefined: "bg-purple-100 text-purple-600", undefined: "bg-gray-100 text-gray-900"'
                      >
                        6
                      </span>
                    </a>

                    <a
                      href="#"
                      class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      x-state-description='undefined: "border-purple-500 text-purple-600", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"'
                    >
                      Offer
                    </a>

                    <a
                      href="#"
                      class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      x-state-description='undefined: "border-purple-500 text-purple-600", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"'
                    >
                      Disqualified
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <ul
              role="list"
              class="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0"
            >
              <li>
                <a href="/user-details" class="group block">
                  <div class="flex  items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Emily Selman
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              emily.selman@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/user-details" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Michael Foster
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              michael.foster@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Emma Dorsey
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              emma.dorsey@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Anna Roberts
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              anna.roberts@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Leonard Krasner
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              leonard.krasner@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Floyd Miles
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              floyd.miles@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Benjamin Russel
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              benjamin.russel@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Courtney Henry
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              courtney.henry@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Lawrence Hunter
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              lawrence.hunter@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block">
                  <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="truncate text-sm font-medium text-purple-600">
                            Alicia Bell
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              x-description="Heroicon name: mini/envelope"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                            </svg>
                            <span class="truncate">
                              alicia.bell@example.com
                            </span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p class="text-sm text-gray-900">
                              Applied on
                              <time datetime="2020-07-01T15:34:56">
                                January 7, 2020
                              </time>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                x-description="Heroicon name: mini/check-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Completed phone screening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            <nav
              class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
              aria-label="Pagination"
            >
              <div class="-mt-px flex w-0 flex-1">
                <a
                  href="#"
                  class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  <svg
                    class="mr-3 h-5 w-5 text-gray-400"
                    x-description="Heroicon name: mini/arrow-long-left"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Previous
                </a>
              </div>
              <div class="hidden md:-mt-px md:flex">
                <a
                  href="#"
                  class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  1
                </a>

                <a
                  href="#"
                  class="inline-flex items-center border-t-2 border-purple-500 px-4 pt-4 text-sm font-medium text-purple-600"
                  aria-current="page"
                >
                  2
                </a>
                <a
                  href="#"
                  class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  3
                </a>
                <a
                  href="#"
                  class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  4
                </a>
                <a
                  href="#"
                  class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  5
                </a>
                <a
                  href="#"
                  class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  6
                </a>
              </div>
              <div class="-mt-px flex w-0 flex-1 justify-end">
                <a
                  href="#"
                  class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  Next
                  <svg
                    class="ml-3 h-5 w-5 text-gray-400"
                    x-description="Heroicon name: mini/arrow-long-right"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListUser1;

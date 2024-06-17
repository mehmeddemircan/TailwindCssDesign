import React, { Fragment } from 'react'

const CookieConsentBanner1 = () => {
  return (
  <Fragment>
      <div class="h-screen w-full relative">
  <div class="absolute bottom-20 left-20 max-w-sm px-4 py-2 shadow-md transition-all duration-500 ease-in-out"
    style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); font-family: Inter, sans-serif; border-radius: 1rem;">
    <div class="flex flex-col px-0 ltr:lg:pl-10 rtl:lg:pr-10">
      <div class="w-full flex justify-between items-center">
        <p class="text-md md:text-lg font-semibold m-0" style="color: rgb(89, 79, 253);">Your Cookie Preferences</p>
      </div>
      <div class="flex flex-col gap-2 items-stretch ltr:lg:pr-10 rtl:lg:pl-10">
        <div class="flex-1">
          <p class="my-1 text-xs md:text-sm" style="color: rgb(0, 0, 0);">
            By clicking “Accept all,” you agree to the storing of cookies on your device for functional, analytics, and advertising purposes.
          </p>
          <div class="flex text-center text-[9px] mt-2 gap-2">
            <span class="ltr:mr-4 ltr:last:mr-0 rtl:ml-4 rtl:last:ml-0">
              <a href="" target="_blank" class="no-underline cursor-pointer shrink-0" style="color: rgb(89, 79, 253); border-bottom: 1px solid rgb(89, 79, 253);">Privacy policy</a>
            </span>
            <span class="ltr:mr-4 ltr:last:mr-0 rtl:ml-4 rtl:last:ml-0">
              <a class="no-underline cursor-pointer shrink-0" style="color: rgb(89, 79, 253); border-bottom: 1px solid rgb(89, 79, 253);">Cookie policy</a>
            </span>
          </div>
        </div>
        <div class="flex flex-col justify-around mt-4 lg:mt-0 ltr:lg:pl-14 rtl:lg:pr-14">
          <div class="flex-1 gap-2  items-center flex my-0">
            <button class="flex-1 lg:flex-none ltr:mr-2 rtl:ml-2 flex justify-center items-center text-center cursor-pointer px-2 md:px-4 py-2 border border-transparent text-xs leading-4 font-black" style="background-color: rgba(89, 79, 253, 0.2); color: rgb(89, 79, 253); border-radius: 0.375rem;">
              <span>Custom permissions</span>
            </button>
            <button class="flex-1 lg:flex-none flex justify-center items-center text-center cursor-pointer px-2 md:px-4 py-2 border border-transparent text-xs leading-4 font-black" style="background-color: rgb(89, 79, 253); color: rgb(255, 255, 255); border-radius: 0.375rem;">
              <span>Accept all</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </Fragment>
  )
}

export default CookieConsentBanner1
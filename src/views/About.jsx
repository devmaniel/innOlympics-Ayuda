import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="font-ranade">
        <div className="container px-4 py-24 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="object-contain w-24 h-24"
            />
            <h1 className="text-5xl md:text-6xl font-semibold font-['Halenoir-DemiBold'] max-w-4xl">
              Connecting Communities with Local Government Services
            </h1>
            <p className="text-xl max-w-2xl font-['Helvetica Neue']">
              Access barangay assistance programs, subsidies, and aid
              efficiently through our digital platform. We're bridging the gap
              between residents and local government services.
            </p>
          </div>
        </div>

        <div className="container px-4 py-24 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <img
                  className="w-full h-[630px] object-cover rounded-2xl"
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300"
                  alt="Community gathering"
                />
              </div>
              <div className="flex flex-col col-span-1 gap-8">
                <img
                  className="w-full h-[300px] object-cover rounded-3xl"
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=300"
                  alt="Digital services"
                />
                <img
                  className="w-full h-[300px] object-cover rounded-3xl"
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=300"
                  alt="Local government office"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-16 px-4">
              <div className="self-stretch h-56 pr-0.5 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-[#222222] text-3xl font-semibold font-ranade leading-9">
                  Streamlined Access to Barangay Services and Aid Programs
                </div>
                <div className="self-stretch text-[#8f8f8f] text-2xl font-semibold font-ranade leading-loose">
                  Experience hassle-free access to government assistance through
                  our digital platform. Track applications, receive updates, and
                  connect directly with local officials.
                </div>
              </div>
              <div className="self-stretch h-[140px] flex-col justify-start items-start gap-4 flex">
                <div className="inline-flex items-center self-stretch justify-start gap-4">
                  <img
                    className="w-9 h-9 relative rounded-[100px]"
                    src="https://images.unsplash.com/photo-1533749047139-189de3cf06d3?w=36"
                  />
                  <div className="text-[#343434] text-2xl font-semibold font-ranade leading-loose">
                    Easy Application for Aid Programs
                  </div>
                </div>
                <div className="inline-flex items-center self-stretch justify-start gap-4">
                  <img
                    className="w-9 h-9 relative rounded-[100px]"
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=36"
                  />
                  <div className="text-[#343434] text-2xl font-semibold font-ranade leading-loose">
                    Real-time Application Status Updates
                  </div>
                </div>
                <div className="inline-flex items-center self-stretch justify-start gap-4">
                  <img
                    className="w-9 h-9 relative rounded-[100px]"
                    src="https://images.unsplash.com/photo-1553484771-047a44eee27b?w=36"
                  />
                  <div className="text-[#343434] text-2xl font-semibold font-ranade leading-loose">
                    Direct Communication with Officials
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-24 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-16">
            <div className="h-20 px-[52px] bg-white/0 flex-col justify-start items-center gap-3 flex">
              <div className="flex flex-col items-center justify-start gap-2">
                <div className="self-stretch text-base font-normal leading-normal text-center text-black font-ranade">
                  PLATFORM FEATURES
                </div>
                <div className="w-[652px] text-center text-black text-5xl font-extrabold font-ranade leading-[48px]">
                  Empowering Communities
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-10">
              <div className="inline-flex items-start self-stretch justify-start gap-8 overflow-hidden">
                <div className="inline-flex flex-col items-start justify-start gap-16">
                  <div className="flex flex-col items-start justify-start gap-3 h-28">
                    <div className="inline-flex items-center self-stretch justify-start gap-4">
                      <div className="p-2.5 bg-[#e6f0ff] rounded-[100px] justify-start items-start gap-2.5 flex">
                        <div className="relative w-6 h-6">
                          <img
                            className="w-[15.50px] h-[19.50px] left-[4.42px] top-[2.20px] absolute"
                            src="/images/icons/shield.svg"
                          />
                        </div>
                      </div>
                      <div className="text-xl font-semibold leading-7 text-black grow shrink basis-0 font-ranade">
                        Secure Data Protection
                      </div>
                    </div>
                    <div className="self-stretch text-base font-normal leading-7 text-black font-ranade">
                      Your personal information is protected with
                      enterprise-grade security. We ensure confidential handling
                      of all resident data and documents.
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-3 h-28">
                    <div className="inline-flex items-center self-stretch justify-start gap-4">
                      <div className="p-2.5 bg-[#e6f0ff] rounded-[100px] justify-start items-start gap-2.5 flex">
                        <div className="relative w-6 h-6 overflow-hidden">
                          <img
                            className="w-[19.50px] h-[15px] left-[2.25px] top-[4.25px] absolute"
                            src="https://via.placeholder.com/19x15"
                          />
                        </div>
                      </div>
                      <div className="text-xl font-semibold leading-7 text-black grow shrink basis-0 font-ranade">
                        Control
                      </div>
                    </div>
                    <div className="self-stretch text-base font-normal leading-7 text-black font-ranade">
                      Take control of your applications with our user-friendly
                      dashboard. Track status, manage documents, and receive
                      notifications.
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-16">
                  <div className="flex flex-col items-start justify-start gap-3 h-28">
                    <div className="inline-flex items-center self-stretch justify-start gap-4">
                      <div className="p-2.5 bg-[#e6f0ff] rounded-[100px] justify-start items-start gap-2.5 flex">
                        <div className="relative w-6 h-6">
                          <img
                            className="w-[17.50px] h-[17.50px] left-[3.52px] top-[3.20px] absolute"
                            src="https://via.placeholder.com/17x17"
                          />
                        </div>
                      </div>
                      <div className="text-xl font-semibold leading-7 text-black grow shrink basis-0 font-ranade">
                        Integrations
                      </div>
                    </div>
                    <div className="self-stretch text-base font-normal leading-7 text-black font-ranade">
                      Seamlessly integrated with barangay systems for efficient
                      processing of applications and aid distribution.
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-3 h-28">
                    <div className="inline-flex items-center self-stretch justify-start gap-4">
                      <div className="p-2.5 bg-[#e6f0ff] rounded-[100px] justify-start items-start gap-2.5 flex">
                        <div className="relative w-6 h-6 overflow-hidden" />
                      </div>
                      <div className="text-xl font-semibold leading-7 text-black grow shrink basis-0 font-ranade">
                        Exchange
                      </div>
                    </div>
                    <div className="self-stretch text-base font-normal leading-7 text-black font-ranade">
                      Direct communication channel between residents and local
                      government officials for quick response and updates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

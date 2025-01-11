import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 font-">
        <div className="h-[638px] pl-[272px] pr-[273px] py-[139px] justify-center items-center inline-flex">
          <div className="w-[895px] flex-col justify-center items-center gap-[25px] inline-flex">
            <div className="w-[120px] h-[120px] bg-[#d9d9d9]" />
            <div className="self-stretch text-center text-black text-[64px] font-semibold font-['Halenoir-DemiBold']">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className="w-[679px] text-center text-black text-xl font-normal font-['Helvetica Neue']">
              Lorem ipsum dolor sit amet consectetur. Sed mauris nibh feugiat
              ultricies aenean amet faucibus rhoncus cras. Eget odio eget
              posuere nisi justo.{" "}
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[896px] px-[104px] py-[88px] bg-white flex-col justify-start items-start gap-0.5 inline-flex overflow-hidden">
          <div className="self-stretch justify-start items-start gap-[104px] inline-flex">
            <div className="w-[632px] h-[720px] relative">
              <img
                className="w-[300px] h-[630px] left-0 top-[88px] absolute rounded-2xl"
                src="https://via.placeholder.com/300x630"
              />
              <img
                className="w-[300px] h-[300px] left-[332px] top-0 absolute rounded-3xl"
                src="https://via.placeholder.com/300x300"
              />
              <img
                className="w-[300px] h-[300px] left-[332px] top-[332px] absolute rounded-3xl"
                src="https://via.placeholder.com/300x300"
              />
            </div>
            <div className="grow shrink basis-0 py-[88px] flex-col justify-start items-start gap-[88px] inline-flex">
              <div className="self-stretch h-56 pr-0.5 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-[#222222] text-3xl font-semibold font-['Inter'] leading-9">
                  Lörem ipsum kvasition vafodorar köss otökast vavis bur tiplask
                </div>
                <div className="self-stretch text-[#8f8f8f] text-2xl font-semibold font-['Inter'] leading-loose">
                  USP copy Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam a ultrices quam. Fusce rutrum mauris quis urna
                  semper lacinia.
                </div>
              </div>
              <div className="self-stretch h-[140px] flex-col justify-start items-start gap-4 flex">
                <div className="inline-flex items-center self-stretch justify-start gap-4">
                  <img
                    className="w-9 h-9 relative rounded-[100px]"
                    src="https://via.placeholder.com/36x36"
                  />
                  <div className="text-[#343434] text-2xl font-semibold font-['Inter'] leading-loose">
                    Makakatulong sa ...
                  </div>
                </div>
                <div className="inline-flex items-center self-stretch justify-start gap-4">
                  <img
                    className="w-9 h-9 relative rounded-[100px]"
                    src="https://via.placeholder.com/36x36"
                  />
                  <div className="text-[#343434] text-2xl font-semibold font-['Inter'] leading-loose">
                    Lörem ipsum johanna Olsson milusat.{" "}
                  </div>
                </div>
                <div className="inline-flex items-center self-stretch justify-start gap-4">
                  <img
                    className="w-9 h-9 relative rounded-[100px]"
                    src="https://via.placeholder.com/36x36"
                  />
                  <div className="text-[#343434] text-2xl font-semibold font-['Inter'] leading-loose">
                    Lörem ipsum johanna Olsson milusat.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1440px] h-[680px] px-[52px] py-20 bg-white flex-col justify-center items-center gap-16 inline-flex">
          <div className="h-20 px-[52px] bg-white/0 flex-col justify-start items-center gap-3 flex">
            <div className="flex flex-col items-center justify-start gap-2">
              <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] leading-normal">
                FULL CONTROL
              </div>
              <div className="w-[652px] text-center text-black text-5xl font-extrabold font-['Inter'] leading-[48px]">
                Packed with features
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
                          src="https://via.placeholder.com/15x19"
                        />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 text-black text-xl font-semibold font-['Inter'] leading-7">
                      Secure
                    </div>
                  </div>
                  <div className="self-stretch text-black text-base font-normal font-['Inter'] leading-7">
                    Excepteur sint occaecat cupidat non proident sunt in culpam
                    qui the officia aliquip ex ea comm.
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
                    <div className="grow shrink basis-0 text-black text-xl font-semibold font-['Inter'] leading-7">
                      Control
                    </div>
                  </div>
                  <div className="self-stretch text-black text-base font-normal font-['Inter'] leading-7">
                    Excepteur sint occaecat cupidat non proident sunt in culpam
                    qui the officia aliquip ex ea comm.
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
                    <div className="grow shrink basis-0 text-black text-xl font-semibold font-['Inter'] leading-7">
                      Integrations
                    </div>
                  </div>
                  <div className="self-stretch text-black text-base font-normal font-['Inter'] leading-7">
                    Excepteur sint occaecat cupidat non proident sunt in culpam
                    qui the officia aliquip ex ea comm.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3 h-28">
                  <div className="inline-flex items-center self-stretch justify-start gap-4">
                    <div className="p-2.5 bg-[#e6f0ff] rounded-[100px] justify-start items-start gap-2.5 flex">
                      <div className="relative w-6 h-6 overflow-hidden" />
                    </div>
                    <div className="grow shrink basis-0 text-black text-xl font-semibold font-['Inter'] leading-7">
                      Exchange
                    </div>
                  </div>
                  <div className="self-stretch text-black text-base font-normal font-['Inter'] leading-7">
                    Excepteur sint occaecat cupidat non proident sunt in culpam
                    qui the officia aliquip ex ea comm.
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

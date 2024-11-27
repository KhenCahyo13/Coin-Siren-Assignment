import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { FC, Fragment, memo } from "react";
import { FaCheck, FaComputer } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation } from 'swiper/modules';

const HomeView: FC = () => (
    <Fragment>
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <main className="px-4 py-8 h-fit md:px-12 lg:px-24 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:items-center">
                {/* Left Content */}
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <div className="relative px-2 py-2 w-fit rounded-md bg-[#8BC4FF] lg:px-3 lg:bg-white">
                            <p className="text-sm lg:text-[#40E2E8] lg:text-base" style={{ fontWeight: 600 }}>풀타임, 파트타임</p>
                            <div className="absolute bottom-[-8px] left-2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-[#8BC4FF] lg:border-t-white" />
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-3">
                            <h1 className="text-4xl leading-tight lg:text-5xl lg:leading-tight" style={{ fontWeight: 700 }}>최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
                            <p style={{ fontWeight: 600 }} className="lg:text-xl">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
                        </div>
                    </div>
                    <div className="block mt-5 lg:hidden lg:mt-0">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={1.2}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                            navigation={true}
                            modules={[EffectCoverflow, Navigation]}
                        >
                            <SwiperSlide className="rounded-lg bg-white">
                                <div className="px-4 py-4 flex flex-col items-center justify-between h-[21rem]">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-fit">
                                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                                <img src="/images/profile-sample1.jpeg" alt="Profile Image" />
                                            </div>
                                            <div className="w-8 h-8 absolute bottom-0 right-0">
                                                <img src="/images/india-flag.png" alt="Flag" className="rounded-sm" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-gray-950" style={{ fontWeight: 600 }}>Abhishek Gupta</p>
                                            <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>마케팅 <span style={{ fontWeight: 600 }}>· 2y+</span></p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>마케팅 콘텐츠 제작</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>인스타그램 관리</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>트위터 관리</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>블로그 글 작성</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-lg bg-white">
                                <div className="px-4 py-4 flex flex-col items-center justify-between h-[21rem]">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-fit">
                                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                                <img src="/images/profile-sample1.jpeg" alt="Profile Image" />
                                            </div>
                                            <div className="w-8 h-8 absolute bottom-0 right-0">
                                                <img src="/images/india-flag.png" alt="Flag" className="rounded-sm" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-gray-950" style={{ fontWeight: 600 }}>Abhishek Gupta</p>
                                            <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>마케팅 <span style={{ fontWeight: 600 }}>· 2y+</span></p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>마케팅 콘텐츠 제작</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>인스타그램 관리</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>트위터 관리</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>블로그 글 작성</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-lg bg-white">
                                <div className="px-4 py-4 flex flex-col items-center justify-between h-[21rem]">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-fit">
                                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                                <img src="/images/profile-sample1.jpeg" alt="Profile Image" />
                                            </div>
                                            <div className="w-8 h-8 absolute bottom-0 right-0">
                                                <img src="/images/india-flag.png" alt="Flag" className="rounded-sm" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-gray-950" style={{ fontWeight: 600 }}>Abhishek Gupta</p>
                                            <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>마케팅 <span style={{ fontWeight: 600 }}>· 2y+</span></p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>마케팅 콘텐츠 제작</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>인스타그램 관리</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>트위터 관리</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>블로그 글 작성</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-lg bg-white">
                                <div className="px-4 py-4 flex flex-col items-center justify-between h-[21rem]">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-fit">
                                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                                <img src="/images/profile-sample1.jpeg" alt="Profile Image" />
                                            </div>
                                            <div className="w-8 h-8 absolute bottom-0 right-0">
                                                <img src="/images/india-flag.png" alt="Flag" className="rounded-sm" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-gray-950" style={{ fontWeight: 600 }}>Abhishek Gupta</p>
                                            <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>마케팅 <span style={{ fontWeight: 600 }}>· 2y+</span></p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>마케팅 콘텐츠 제작</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>인스타그램 관리</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>트위터 관리</p>
                                        </div>
                                        <div className="px-4 py-2 border border-gray-400 rounded-md">
                                            <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>블로그 글 작성</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex flex-col gap-4 mt-5 lg:hidden">
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <div className="px-1 py-1 rounded-md bg-[#E8ECFF]">
                                    <FaCheck className="text-[#2C599B]" />
                                </div>
                                <p className="text-sm" style={{ fontWeight: 600 }}>한국어 능력</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-1 py-1 rounded-md bg-[#E8ECFF]">
                                    <FaCheck className="text-[#2C599B]" />
                                </div>
                                <p className="text-sm" style={{ fontWeight: 600 }}>업무 수행 능력</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-1 py-1 rounded-md bg-[#E8ECFF]">
                                    <FaCheck className="text-[#2C599B]" />
                                </div>
                                <p className="text-sm" style={{ fontWeight: 600 }}>겸업 여부</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-1 py-1 rounded-md bg-[#E8ECFF]">
                                    <FaCheck className="text-[#2C599B]" />
                                </div>
                                <p className="text-sm" style={{ fontWeight: 600 }}>평판 조회</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-[#FBFF23] underline mt-4 lg:text-white lg:text-lg" style={{ fontWeight: 600 }}>개발자가 필요하신가요?</p>
                    <div className="hidden mt-6 items-center gap-4 lg:flex">
                        <div className="py-2 flex flex-col gap-4 border-t">
                            <p style={{ fontWeight: 600 }}>평균 월 120만원</p>
                            <p className="text-sm" style={{ fontWeight: 500 }}>임금을 해당 국가를 기준으로 계산합니다.</p>
                        </div>
                        <div className="py-2 flex flex-col gap-4 border-t">
                            <p style={{ fontWeight: 600 }}>최대 3회 인력교체</p>
                            <p className="text-sm" style={{ fontWeight: 500 }}>막상 채용해보니 맞지 않아도 걱정하지 마세요. </p>
                        </div>
                        <div className="py-2 flex flex-col gap-4 border-t">
                            <p style={{ fontWeight: 600 }}>평균 3일, 최대 10일</p>
                            <p className="text-sm" style={{ fontWeight: 500 }}>급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
                        </div>
                    </div>
                </div>
                {/* Right Content */}
                <div className="hidden lg:block">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={2}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        navigation={true}
                        modules={[EffectCoverflow, Navigation]}
                    >
                        <SwiperSlide className="rounded-lg bg-white">
                            <div className="px-4 py-4 flex flex-col items-center justify-between h-[19rem]">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative w-fit">
                                        <div className="w-24 h-24 rounded-full overflow-hidden">
                                            <img src="/images/profile-sample1.jpeg" alt="Profile Image" />
                                        </div>
                                        <div className="w-8 h-8 absolute bottom-0 right-0">
                                            <img src="/images/india-flag.png" alt="Flag" className="rounded-sm" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-gray-950" style={{ fontWeight: 600 }}>Abhishek Gupta</p>
                                        <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>마케팅 <span style={{ fontWeight: 600 }}>· 2y+</span></p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>마케팅 콘텐츠 제작</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>인스타그램 관리</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>트위터 관리</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>블로그 글 작성</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-lg bg-white">
                            <div className="px-4 py-4 flex flex-col items-center justify-between h-[19rem]">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative w-fit">
                                        <div className="w-24 h-24 rounded-full overflow-hidden">
                                            <img src="/images/profile-sample1.jpeg" alt="Profile Image" />
                                        </div>
                                        <div className="w-8 h-8 absolute bottom-0 right-0">
                                            <img src="/images/india-flag.png" alt="Flag" className="rounded-sm" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-gray-950" style={{ fontWeight: 600 }}>Abhishek Gupta</p>
                                        <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>마케팅 <span style={{ fontWeight: 600 }}>· 2y+</span></p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>마케팅 콘텐츠 제작</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>인스타그램 관리</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>트위터 관리</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>블로그 글 작성</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-lg bg-white">
                            <div className="px-4 py-4 flex flex-col items-center justify-between h-[19rem]">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative w-fit">
                                        <div className="w-24 h-24 rounded-full overflow-hidden">
                                            <img src="/images/profile-sample1.jpeg" alt="Profile Image" />
                                        </div>
                                        <div className="w-8 h-8 absolute bottom-0 right-0">
                                            <img src="/images/india-flag.png" alt="Flag" className="rounded-sm" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-gray-950" style={{ fontWeight: 600 }}>Abhishek Gupta</p>
                                        <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>마케팅 <span style={{ fontWeight: 600 }}>· 2y+</span></p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>마케팅 콘텐츠 제작</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>인스타그램 관리</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>트위터 관리</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>블로그 글 작성</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-lg bg-white">
                            <div className="px-4 py-4 flex flex-col items-center justify-between h-[19rem]">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative w-fit">
                                        <div className="w-24 h-24 rounded-full overflow-hidden">
                                            <img src="/images/profile-sample1.jpeg" alt="Profile Image" />
                                        </div>
                                        <div className="w-8 h-8 absolute bottom-0 right-0">
                                            <img src="/images/india-flag.png" alt="Flag" className="rounded-sm" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-gray-950" style={{ fontWeight: 600 }}>Abhishek Gupta</p>
                                        <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>마케팅 <span style={{ fontWeight: 600 }}>· 2y+</span></p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>마케팅 콘텐츠 제작</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>인스타그램 관리</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>트위터 관리</p>
                                    </div>
                                    <div className="px-4 py-2 border border-gray-400 rounded-md">
                                        <p className="text-sm text-gray-950" style={{ fontWeight: 500 }}>블로그 글 작성</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="hidden lg:block lg:mt-6">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    modules={[]}
                >
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white bg-opacity-20 rounded-md" style={{ opacity: 1 }}>
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="bg-white bg-opacity-50 rounded-md px-3 py-3">
                                <FaComputer className="text-lg" />
                            </div>
                            <p className="text-sm" style={{ fontWeight: 500 }}>해외 마케팅</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
        {/* Footer */}
        <Footer />
    </Fragment>
);

export default memo(HomeView);
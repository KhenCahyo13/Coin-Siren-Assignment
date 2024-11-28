import { FC, Fragment, memo } from "react";
import { FaCheck, FaComputer, FaDollarSign, FaImage, FaPhone } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { HomeViewProps } from "./Home.type";
import { IconType } from "react-icons";
import BadgeIcon from "@/app/components/Badge/BadgeIcon";
import Card from "@/app/components/Card";
import BadgeOutline from "@/app/components/Badge/BadgeOutline";
import Chatbox from "@/app/components/Chatbox";
import Tooltip from "@/app/components/Tooltip";

const iconsMap: Record<string, IconType> = {
    FaComputer: FaComputer,
    FaImage: FaImage,
    FaPhone: FaPhone
};

const HomeView: FC<HomeViewProps> = ({ fields, employees, tooltipPosition, handleOnMouseEnterEmployeeCard, handleOnMouseLeaveEmployeeCard }) => (
    <Fragment>
        {/* Hero */}
        <main className="page-container">
            <div className="hero">
                {/* Left Content */}
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <div className="animate__animated animate__fadeIn duration-500" style={{ animationDelay: '1.1s' }}>
                            <Chatbox
                                title="풀타임, 파트타임"
                                type="White"
                            />
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-3">
                            <h1 className="text-4xl leading-tight font-bold lg:text-5xl lg:leading-tight animate__animated animate__fadeInUp duration-500">
                                최고의 실력을 가진 외국인 인재를 찾고 계신가요?
                            </h1>
                            <p style={{ fontWeight: 600 }} className="lg:text-xl animate__animated animate__fadeInUp duration-500">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
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
                            {employees && employees.map((employee) => (
                                <SwiperSlide
                                    key={employee.id}
                                    className="relative group"
                                    onMouseEnter={handleOnMouseEnterEmployeeCard}
                                    onMouseLeave={handleOnMouseLeaveEmployeeCard}
                                >
                                    <div className="animate__animated animate__fadeIn duration-500">
                                        <Card
                                            height={21}
                                            renderBody={() => (
                                                <Fragment>
                                                    <div className="flex flex-col items-center gap-4">
                                                        <div className="card-profile">
                                                            <div className="card-profile-img">
                                                                <img src={employee.profileImage} alt="Profile Image" />
                                                            </div>
                                                            <div className="card-profile-country">
                                                                <img src={employee.countryFlag} alt="Flag" className="rounded-sm" />
                                                            </div>
                                                        </div>
                                                        <div className="card-profile-info">
                                                            <p className="text-gray-950" style={{ fontWeight: 600 }}>{employee.name}</p>
                                                            <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>{employee.position} <span style={{ fontWeight: 600 }}>· {employee.lengthOfExperience}y+</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5 card-profile-skills">
                                                        {employee.skills.map((skill) => (
                                                            <BadgeOutline
                                                                key={skill.id}
                                                                title={skill.name}
                                                                type="Secondary"
                                                            />
                                                        ))}
                                                    </div>
                                                </Fragment>
                                            )}
                                        />
                                        {tooltipPosition && (
                                            <Tooltip position={tooltipPosition}>
                                                <Chatbox
                                                    title={`월 ${employee.salary}만원`}
                                                    type="Success"
                                                    centered={true}
                                                    icon={<FaDollarSign className="text-green-500" />}
                                                />
                                            </Tooltip>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
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
                    <div className="hidden mt-6 items-center gap-4 lg:flex animate__animated animate__fadeIn duration-500">
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
                    {/* Employee Swiper Card Desktop */}
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
                        {employees && employees.map((employee) => (
                            <SwiperSlide
                                key={employee.id}
                                className="relative group"
                                onMouseEnter={handleOnMouseEnterEmployeeCard}
                                onMouseLeave={handleOnMouseLeaveEmployeeCard}
                            >
                                <div className="animate__animated animate__fadeIn duration-500">
                                    <Card
                                        height={20}
                                        renderBody={() => (
                                            <Fragment>
                                                <div className="flex flex-col items-center gap-4">
                                                    <div className="card-profile">
                                                        <div className="card-profile-img">
                                                            <img src={employee.profileImage} alt="Profile Image" />
                                                        </div>
                                                        <div className="card-profile-country">
                                                            <img src={employee.countryFlag} alt="Flag" className="rounded-sm" />
                                                        </div>
                                                    </div>
                                                    <div className="card-profile-info">
                                                        <p className="text-gray-950" style={{ fontWeight: 600 }}>{employee.name}</p>
                                                        <p className="text-sm text-blue-500" style={{ fontWeight: 500 }}>{employee.position} <span style={{ fontWeight: 600 }}>· {employee.lengthOfExperience}y+</span></p>
                                                    </div>
                                                </div>
                                                <div className="mt-5 card-profile-skills">
                                                    {employee.skills.map((skill) => (
                                                        <BadgeOutline
                                                            key={skill.id}
                                                            title={skill.name}
                                                            type="Secondary"
                                                        />
                                                    ))}
                                                </div>
                                            </Fragment>
                                        )}
                                    />
                                    {tooltipPosition && (
                                        <Tooltip position={tooltipPosition}>
                                            <Chatbox
                                                title={`월 ${employee.salary}만원`}
                                                type="Success"
                                                centered={true}
                                                icon={<FaDollarSign className="text-green-500" />}
                                            />
                                        </Tooltip>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* Fields Swiper */}
            <div className="hidden lg:block lg:mt-6">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={16}
                    modules={[]}
                >
                    {fields && fields.map((field) => {
                        const IconComponent = iconsMap[field.icon];
                        return (
                            <SwiperSlide className="animate__animated animate__fadeIn duration-500" style={{ opacity: 1 }} key={field.id}>
                                <BadgeIcon
                                    icon={IconComponent}
                                    title={field.title}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </main>
    </Fragment>
);

export default memo(HomeView);
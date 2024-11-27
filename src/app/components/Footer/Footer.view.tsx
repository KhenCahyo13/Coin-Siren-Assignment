import { FC, memo } from "react";
import { FaArrowRight, FaCode, FaGear, FaUser } from "react-icons/fa6";

const FooterView: FC = () => (
    <footer className="px-4 py-8 h-fit bg-[#FBFBFB] md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <img src="/images/logo-original.png" alt="Nav Logo" className="w-32 lg:w-36" />
                    <p className="text-gray-950 text-sm" style={{ fontWeight: 600 }}>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-gray-950 text-sm" style={{ fontWeight: 700 }}>010-0000-0000</p>
                    <p className="text-gray-950 text-sm" style={{ fontWeight: 700 }}>aaaaa@naver.com</p>
                </div>
            </div>
            {/* Card Collections */}
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:col-start-4">
                <div className="px-4 py-4 bg-white h-40 rounded-md shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-3">
                            <div className="px-2 py-2 w-fit bg-[#EFF1F6] rounded-md">
                                <FaCode className="text-[#7388A9] text-2xl" />
                            </div>
                            <p className="text-sm text-gray-950" style={{ fontWeight: 600 }}>해외 개발자 원격 채용</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-950" style={{ fontWeight: 600 }}>바로가기</p>
                            <button className="px-2 py-2 w-fit border border-gray-950 rounded-md">
                                <FaArrowRight className="text-gray-950 text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 bg-white h-40 rounded-md shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-3">
                            <div className="px-2 py-2 w-fit bg-[#EFF1F6] rounded-md">
                                <FaUser className="text-[#7388A9] text-2xl" />
                            </div>
                            <p className="text-sm text-gray-950" style={{ fontWeight: 600 }}>외국인 원격 채용 <span style={{ fontWeight: 700 }}>(비개발)</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-950" style={{ fontWeight: 600 }}>바로가기</p>
                            <button className="px-2 py-2 w-fit border border-gray-950 rounded-md">
                                <FaArrowRight className="text-gray-950 text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 bg-white h-40 rounded-md shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-3">
                            <div className="px-2 py-2 w-fit bg-[#EFF1F6] rounded-md">
                                <p className="text-[#7388A9] text-sm lg:text-lg" style={{ fontWeight: 700 }}>KOR</p>
                            </div>
                            <p className="text-sm text-gray-950" style={{ fontWeight: 600 }}>한국어 가능 외국인 채용</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-950" style={{ fontWeight: 600 }}>바로가기</p>
                            <button className="px-2 py-2 w-fit border border-gray-950 rounded-md">
                                <FaArrowRight className="text-gray-950 text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 bg-white h-40 rounded-md shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-3">
                            <div className="px-2 py-2 w-fit bg-[#EFF1F6] rounded-md">
                                <FaGear className="text-[#7388A9] text-2xl" />
                            </div>
                            <p className="text-sm text-gray-950" style={{ fontWeight: 600 }}>해외 개발자 활용 서비스</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-950" style={{ fontWeight: 600 }}>바로가기</p>
                            <button className="px-2 py-2 w-fit border border-gray-950 rounded-md">
                                <FaArrowRight className="text-gray-950 text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 mt-8 lg:grid-cols-4 lg:mt-12">
            {/* Kolom 1 */}
            <div className="flex flex-col gap-2 lg:col-span-1">
                <p className="text-sm text-gray-950 font-semibold">상호명</p>
                <p className="text-sm text-gray-950 font-medium">하이퍼하이어</p>
                <p className="text-sm text-gray-950 font-bold">Hyperhire India Private Limited</p>
            </div>
            {/* Kolom 2 */}
            <div className="flex flex-col gap-2 lg:col-span-1">
                <p className="text-sm text-gray-950 font-semibold">대표 CEO</p>
                <p className="text-sm text-gray-950 font-medium">김주현</p>
                <p className="text-sm text-gray-950 font-bold">Juhyun Kim</p>
            </div>
            {/* Kolom 3 */}
            <div className="flex flex-col gap-2 lg:col-span-1">
                <p className="text-sm text-gray-950 font-semibold">사업자등록번호 CIN</p>
                <p className="text-sm text-gray-950 font-medium">427-86-01187</p>
                <p className="text-sm text-gray-950 font-bold">U74110DL2016PTC290812</p>
            </div>
            {/* Kolom 4 */}
            <div className="flex flex-col gap-2 lg:col-span-1">
                <p className="text-sm text-gray-950 font-semibold">주소 ADDRESS</p>
                <p className="text-sm text-gray-950 font-medium">
                    서울특별시 강남대로 479, 지하 1층 238호
                </p>
                <p className="text-sm text-gray-950 font-bold">
                    D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
                </p>
            </div>
        </div>
        <p className="text-sm text-gray-950 mt-8" style={{ fontWeight: 600 }}>&copy; 2023 Hyperhire</p>
    </footer>
);

export default memo(FooterView);
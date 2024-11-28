import { FC, Fragment, memo } from 'react';
import { FaArrowRight, FaCode, FaGear, FaUser } from 'react-icons/fa6';
import Card from '../Card';
import Image from 'next/image';

const FooterView: FC = () => (
  <footer className="footer">
    <div className="footer-body">
      <div className="footer-office">
        <div className="footer-office-info">
          <Image src="/images/logo-original.png" alt="Nav Logo" className="footer-office-info-brand-img" />
          <p className="footer-office-info-desc font-semibold">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
        </div>
        <div className="footer-office-info">
          <p className="footer-office-info-desc font-bold">010-0000-0000</p>
          <p className="footer-office-info-desc font-bold">aaaaa@naver.com</p>
        </div>
      </div>
      {/* Card Collections */}
      <div className="footer-services">
        <Card
          height={16}
          renderBody={() => (
            <Fragment>
              <div className="flex flex-col gap-3">
                <div className="card-icon">
                  <FaCode className="text-[#7388A9] text-2xl" />
                </div>
                <p className="card-title font-semibold">해외 개발자 원격 채용</p>
              </div>
              <div className="card-action">
                <p className="card-title font-semibold">바로가기</p>
                <button className="card-action-button">
                  <FaArrowRight className="text-gray-950 text-xs" />
                </button>
              </div>
            </Fragment>
          )}
        />
        <Card
          height={16}
          renderBody={() => (
            <Fragment>
              <div className="flex flex-col gap-3">
                <div className="card-icon">
                  <FaUser className="text-[#7388A9] text-2xl" />
                </div>
                <p className="card-title font-semibold">
                  외국인 원격 채용 <span className="font-bold">(비개발)</span>
                </p>
              </div>
              <div className="card-action">
                <p className="card-title font-semibold">바로가기</p>
                <button className="card-action-button">
                  <FaArrowRight className="text-gray-950 text-xs" />
                </button>
              </div>
            </Fragment>
          )}
        />
        <Card
          height={16}
          renderBody={() => (
            <Fragment>
              <div className="flex flex-col gap-3">
                <div className="card-icon">
                  <p className="text-[#7388A9] text-sm lg:text-lg font-bold">KOR</p>
                </div>
                <p className="card-title font-semibold">한국어 가능 외국인 채용</p>
              </div>
              <div className="card-action">
                <p className="card-title font-semibold">바로가기</p>
                <button className="card-action-button">
                  <FaArrowRight className="text-gray-950 text-xs" />
                </button>
              </div>
            </Fragment>
          )}
        />
        <Card
          height={16}
          renderBody={() => (
            <Fragment>
              <div className="flex flex-col gap-3">
                <div className="card-icon">
                  <FaGear className="text-[#7388A9] text-2xl" />
                </div>
                <p className="card-title font-semibold">해외 개발자 활용 서비스</p>
              </div>
              <div className="card-action">
                <p className="card-title font-semibold">바로가기</p>
                <button className="card-action-button">
                  <FaArrowRight className="text-gray-950 text-xs" />
                </button>
              </div>
            </Fragment>
          )}
        />
      </div>
    </div>
    <div className="footer-menus mt-8 lg:mt-12">
      {/* Kolom 1 */}
      <div className="footer-menu">
        <p className="footer-menu-title">상호명</p>
        <p className="footer-menu-subtitle-md">하이퍼하이어</p>
        <p className="footer-menu-subtitle-bd">Hyperhire India Private Limited</p>
      </div>
      {/* Kolom 2 */}
      <div className="footer-menu">
        <p className="footer-menu-title">대표 CEO</p>
        <p className="footer-menu-subtitle-md">김주현</p>
        <p className="footer-menu-subtitle-bd">Juhyun Kim</p>
      </div>
      {/* Kolom 3 */}
      <div className="footer-menu">
        <p className="footer-menu-title">사업자등록번호 CIN</p>
        <p className="footer-menu-subtitle-md">427-86-01187</p>
        <p className="footer-menu-subtitle-bd">U74110DL2016PTC290812</p>
      </div>
      {/* Kolom 4 */}
      <div className="footer-menu">
        <p className="footer-menu-title">주소 ADDRESS</p>
        <p className="footer-menu-subtitle-md">서울특별시 강남대로 479, 지하 1층 238호</p>
        <p className="footer-menu-subtitle-bd">
          D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
        </p>
      </div>
    </div>
    <p className="footer-copyright mt-8 font-semibold">&copy; 2023 Hyperhire</p>
  </footer>
);

export default memo(FooterView);

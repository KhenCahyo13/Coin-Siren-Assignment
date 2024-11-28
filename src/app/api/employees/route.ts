import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
    const data = {
        success: true,
        message: 'Successfully get employees data!',
        data: [
            {
                id: 1,
                name: 'Abhishek Gupta',
                position: '마케팅',
                lengthOfExperience: 2,
                salary: 70,
                countryFlag: '/images/india-flag.png',
                profileImage: '/images/profile-sample1.jpeg',
                skills: [
                    {
                        id: 1,
                        name: '마케팅 콘텐츠 제작'
                    },
                    {
                        id: 2,
                        name: '인스타그램 관리'
                    },
                    {
                        id: 3,
                        name: '트위터 관리'
                    },
                    {
                        id: 4,
                        name: '블로그 글 작성'
                    },
                ]
            },
            {
                id: 2,
                name: 'Abhishek Gupta 2',
                position: '마케팅',
                lengthOfExperience: 3,
                salary: 100,
                countryFlag: '/images/india-flag.png',
                profileImage: '/images/profile-sample2.png',
                skills: [
                    {
                        id: 1,
                        name: '마케팅 콘텐츠 제작'
                    },
                    {
                        id: 2,
                        name: '인스타그램 관리'
                    },
                    {
                        id: 3,
                        name: '트위터 관리'
                    },
                    {
                        id: 4,
                        name: '블로그 글 작성'
                    },
                ]
            },
            {
                id: 3,
                name: 'Abhishek Gupta 3',
                position: '마케팅',
                lengthOfExperience: 3,
                salary: 90,
                countryFlag: '/images/india-flag.png',
                profileImage: '/images/profile-sample1.jpeg',
                skills: [
                    {
                        id: 1,
                        name: '마케팅 콘텐츠 제작'
                    },
                    {
                        id: 2,
                        name: '인스타그램 관리'
                    },
                    {
                        id: 3,
                        name: '트위터 관리'
                    },
                    {
                        id: 4,
                        name: '블로그 글 작성'
                    },
                ]
            },
            {
                id: 4,
                name: 'Abhishek Gupta 4',
                position: '마케팅',
                lengthOfExperience: 2,
                salary: 80,
                countryFlag: '/images/india-flag.png',
                profileImage: '/images/profile-sample2.png',
                skills: [
                    {
                        id: 1,
                        name: '마케팅 콘텐츠 제작'
                    },
                    {
                        id: 2,
                        name: '인스타그램 관리'
                    },
                    {
                        id: 3,
                        name: '트위터 관리'
                    },
                    {
                        id: 4,
                        name: '블로그 글 작성'
                    },
                ]
            },
            {
                id: 5,
                name: 'Abhishek Gupta 5',
                position: '마케팅',
                lengthOfExperience: 3,
                salary: 100,
                countryFlag: '/images/india-flag.png',
                profileImage: '/images/profile-sample1.jpeg',
                skills: [
                    {
                        id: 1,
                        name: '마케팅 콘텐츠 제작'
                    },
                    {
                        id: 2,
                        name: '인스타그램 관리'
                    },
                    {
                        id: 3,
                        name: '트위터 관리'
                    },
                    {
                        id: 4,
                        name: '블로그 글 작성'
                    },
                ]
            },
        ]
    };

    return NextResponse.json(data, {
        status: 200
    });
}
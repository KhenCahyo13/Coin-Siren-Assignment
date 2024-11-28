import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
    const data = {
        success: true,
        message: 'Successfully get fields data!',
        data: [
            {
                id: 1,
                title: '해외 마케팅',
                icon: 'FaComputer',
            },
            {
                id: 2,
                title: '퍼블리셔',
                icon: 'FaImage'
            },
            {
                id: 3,
                title: '캐드원(제도사)',
                icon: 'FaImage'
            },
            {
                id: 4,
                title: '해외 세일즈',
                icon: 'FaComputer',
            },
            {
                id: 5,
                title: '해외 CS',
                icon: 'FaPhone'
            },
            {
                id: 6,
                title: '캐드원(제도사)',
                icon: 'FaImage'
            },
            {
                id: 7,
                title: '해외 세일즈',
                icon: 'FaComputer',
            },
            {
                id: 8,
                title: '해외 CS',
                icon: 'FaPhone'
            }
        ]
    };

    return NextResponse.json(data, {
        status: 200
    });
}
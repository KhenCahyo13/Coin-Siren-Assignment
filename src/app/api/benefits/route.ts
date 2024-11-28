import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
    const data = {
        success: true,
        message: 'Successfully get benefits data!',
        data: [
            {
                id: 1,
                title: '한국어 능력',
            },
            {
                id: 2,
                title: '업무 수행 능력',
            },
            {
                id: 3,
                title: '겸업 여부',
            },
            {
                id: 4,
                title: '평판 조회',
            },
        ]
    };

    return NextResponse.json(data, {
        status: 200
    });
}
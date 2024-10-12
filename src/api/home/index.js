import axios from 'axios';

import { processRandomMungzProfile } from '../../utils/dataProcessors';

const API_URL = 'https://openapi.gg.go.kr/AbdmAnimalProtect';

export const fetchMungzProfile = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if (!apiKey) {
            throw new Error('API key is not defined');
        }

        const response = await axios.get(API_URL, {
            params: {
                Key: apiKey,
                Type: 'json',
                pIndex: 1,
                pSize: 10,
            },
        });

        const profiles = response.data?.AbdmAnimalProtect?.[1]?.row;
        if (!profiles || profiles.length === 0) {
            throw new Error('No profiles found');
        }

        const mungzProfiles = profiles.filter((profile) => profile.SPECIES_NM.includes('개'));
        if (mungzProfiles.length === 0) {
            throw new Error('No mungz profiles found');
        }

        return processRandomMungzProfile(mungzProfiles);
    } catch (error) {
        // console.error('Error fetching mungz profile:', error);
        throw error;
    }
};

export const fetchMbtiMatch = async () => {
    try {
        const response = await axios.get('/api/mbti-match');
        return response.data;
    } catch (error) {
        //console.error('Error fetching MBTI match:', error);
        // Return mock data in case of error
        return {
            userMbti: 'INFJ',
            matchMbti: 'ENFP',
            matchResult: [
                { name: '비숑 프리제', image: 'https://via.placeholder.com/100' },
                { name: '웰시 코기', image: 'https://via.placeholder.com/100' },
            ],
            description: '직관적이고 이타적인 당신과는 창의적이고 열정적인 멍즈가 딱이에요!',
        };
    }
};

import axios from 'axios';

// Helper functions
const extractCity = (address) => {
    const cityRegex = /([가-힣]+(?:시|군|읍))/;
    const match = address.match(cityRegex);
    return match ? match[0] : address;
};

const formatGender = (gender) => {
    if (gender === 'F') return '암컷';
    if (gender === 'M') return '수컷';
    if (gender === 'Q') return '중성화';
    return '정보 없음';
};

const formatNeutered = (neutered) => {
    if (neutered === 'Y') return '완료';
    if (neutered === 'N') return '미완료';
    if (neutered === 'U') return '미확인';
    return '정보 없음';
};

const formatCharacteristics = (characteristics) => {
    const splitChars = characteristics.split(/[,.]/).slice(0, 2);
    return splitChars.join(', ');
};

export const fetchMungzProfile = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if (!apiKey) {
            throw new Error('API key is not defined');
        }

        const response = await axios.get('https://openapi.gg.go.kr/AbdmAnimalProtect', {
            params: {
                Key: apiKey,
                Type: 'json',
                pIndex: 1,
                pSize: 10,
            },
        });

        if (!response.data || !response.data.AbdmAnimalProtect || !response.data.AbdmAnimalProtect[1]) {
            throw new Error('Invalid API response format');
        }

        const mungzProfiles = response.data.AbdmAnimalProtect[1].row.filter((profile) =>
            profile.SPECIES_NM.includes('개')
        );
        if (mungzProfiles.length === 0) {
            throw new Error('No dog profiles found');
        }

        const randomProfile = mungzProfiles[Math.floor(Math.random() * mungzProfiles.length)];

        return {
            region: extractCity(randomProfile.PROTECT_PLC) || '정보 없음',
            shelterName: randomProfile.SHTER_NM || '정보 없음',
            breed: randomProfile.SPECIES_NM.replace('[개]', '').trim() || '정보 없음',
            contact: randomProfile.SHTER_TELNO || '정보 없음',
            gender: formatGender(randomProfile.SEX_NM),
            neutered: formatNeutered(randomProfile.NEUT_YN),
            characteristic: formatCharacteristics(randomProfile.SFETR_INFO) || '정보 없음',
            weight: randomProfile.BDWGH_INFO || '정보 없음',
            image: randomProfile.IMAGE_COURS || '/default-image.png',
        };
    } catch (error) {
        //console.error('Error fetching dog profile:', error);
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

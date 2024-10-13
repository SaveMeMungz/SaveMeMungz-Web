import { extractCity, formatCharacteristics, formatGender, formatNeutered } from './formatters';

export const processRandomMungzProfile = (profiles) => {
    const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

    return {
        region: extractCity(randomProfile.PROTECT_PLC),
        shelterName: randomProfile.SHTER_NM || '정보 없음',
        breed: randomProfile.SPECIES_NM.replace('[개]', '').trim() || '정보 없음',
        contact: randomProfile.SHTER_TELNO || '정보 없음',
        gender: formatGender(randomProfile.SEX_NM),
        neutered: formatNeutered(randomProfile.NEUT_YN),
        characteristic: formatCharacteristics(randomProfile.SFETR_INFO),
        weight: randomProfile.BDWGH_INFO || '정보 없음',
        image: randomProfile.IMAGE_COURS || '/default-image.png',
    };
};

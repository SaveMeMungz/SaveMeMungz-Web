'use client';

import Image from 'next/image';
import styled from 'styled-components';

import bookmarkIcon from '../../../../assets/icons/bookmark-icon.png';
import callIcon from '../../../../assets/icons/call-icon.png';
import shareIcon from '../../../../assets/icons/share-post.png';
import shelterImg from '../../../../assets/images/temp/tempShelter.png';
import { TEXT_COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/font';
import { PADDING_HORIZONTAL } from '../../../../constants/space';

const ShelterCardComponent = () => {
    return (
        <CardContainer>
            <ContentContainer>
                <InfoWrapper>
                    <Title>수원시동물보호센터</Title>
                    <TagWrapper>
                        <Tag>동물보호단체</Tag>
                    </TagWrapper>
                    <Contact>031-228-2557</Contact>
                    <Adress>경기 수원시 영통구 광교호수로 234</Adress>
                    <IconWrapper>
                        <CallIcon src={callIcon} />
                        <ShareIcon src={shareIcon} />
                        <BookmarkIcon src={bookmarkIcon} />
                    </IconWrapper>
                </InfoWrapper>
                <ImageWrapper>
                    <StyledImage src={shelterImg} alt="Shelter" width={50} height={50} />
                </ImageWrapper>
            </ContentContainer>
        </CardContainer>
    );
};

export default ShelterCardComponent;

const CardContainer = styled.div`
    ${PADDING_HORIZONTAL}
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 2px solid #3ca690;
    border-radius: 1rem;
    padding: 0.875rem;
    gap: 1rem;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    flex: 1;
`;

const ImageWrapper = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    overflow: hidden;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Title = styled.p`
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.125rem;
    color: ${TEXT_COLORS.black};
`;

const TagWrapper = styled.div`
    display: inline-flex;
    align-self: flex-start;
    background-color: ${TEXT_COLORS.primary};
    border-radius: 0.5rem;
    padding: 0.25rem 0.75rem;
`;

const Tag = styled.span`
    color: #fff;
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.75rem;
`;

const Contact = styled.p`
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.875rem;
    color: ${TEXT_COLORS.default};
`;

const Adress = styled.p`
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.75rem;
    color: ${TEXT_COLORS.default};
`;

const IconWrapper = styled.div`
    display: flex;
    gap: 0.63rem;
`;

const IconStyles = `
    width: 1.75rem;
    height: 1.75rem;
    flex-shrink: 0;
`;

const CallIcon = styled(Image)`
    ${IconStyles}
`;
const ShareIcon = styled(Image)`
    ${IconStyles}
`;
const BookmarkIcon = styled(Image)`
    ${IconStyles}
`;

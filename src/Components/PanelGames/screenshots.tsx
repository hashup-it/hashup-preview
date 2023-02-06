import React from 'react';
import { Box, Button, Flex, useMediaQuery } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';

interface IImagesCarousel {
    screens: string[];
    video: string;
    arrowsColor: string;
}

const YoutubeSlide = ({ url, isSelected = false }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer
        height="100%"
        width="100%"
        url={url}
        playing={isSelected}
        controls
        muted
        loop
    />
);

export const Screenshots = ({ screens, video, arrowsColor }: IImagesCarousel) => {

    const customRenderItem = (item: any, props: any) => (
        <item.type
            {...item.props}
            {...props}
            userSelect="none"
        />
    );

    const getVideoThumb = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
    const getVideoId = (url: string) => url.match(/\?v=(.*?)(?:&|$)/)?.[1];


    const showThumbs = () => {
        if (screens.length > 1) {
            return true;
        }
    };


    const arrow = ({
                       isLeft,
                       hasNext,
                       clickHandler,
                   }: {
        isLeft: boolean;
        hasNext: boolean;
        clickHandler: () => void;
    }) => {
        return screens.length > 1 ? (
            <Flex
                cursor="pointer"
                zIndex="10"
                position="absolute"
                top="calc(50% - 48px)"
                w="36px"
                h="96px"
                right={isLeft ? '0' : '-16px'}
                left={isLeft ? '-16px' : 'auto'}
                display="flex"
                background={{ base: 'none', hashup: arrowsColor }}
                justifyContent="center"
                alignItems="center"
                borderRadius="99px"
            >
                <Button
                    display="flex"
                    variant="unstyled"
                    onClick={clickHandler}
                    disabled={!hasNext}
                >
                </Button>
            </Flex>
        ) : null;
    };

    return (
        <Box
            paddingY="24px"
            css={{
                'carousel-root': {
                    width: '100%',
                },
                '.carousel-slider': {
                    overflow: 'initial',
                },
                '.slider-wrapper': {
                    width: '100%',
                    borderRadius: '8px',
                },
                '.carousel .thumbs-wrapper': {
                    margin: '0px',
                    marginTop: '20px',
                },
                '.carousel .slide iframe': {
                    margin: '0px',
                    width: '100%',
                    userSelect: 'none',
                },
                '.thumbs.animated': {
                    userSelect: 'none',
                    maxWidth: '608px',
                },
                '.thumb': {
                    border: '3px solid #333',
                    ':active': {
                        border: '3px solid white',
                        outline: 'none',
                    },
                    ':focus': {
                        border: '3px solid white',
                        outline: 'none',
                    },
                    ':hover': {
                        border: '3px solid white',
                        outline: 'none',
                    },
                    ':selected': {
                        border: '3px solid white',
                        outline: 'none',
                    },
                },
                '.slider-wrapper.axis-horizontal': { borderRadius: '8px' },
            }}
        >
            <Carousel
                showStatus={false}
                showIndicators={false}
                showThumbs={showThumbs()}
                renderArrowNext={(clickHandler: any, hasNext: any, label: any) => arrow({ isLeft: false, hasNext, clickHandler })}
                renderArrowPrev={(clickHandler: any, hasNext: any, label: any) => arrow({ isLeft: true, hasNext, clickHandler })}
                renderItem={customRenderItem}
                renderThumbs={(children: any[]) => {
                    const result: React.ReactElement[] = [];

                    if (children) {
                        const youtubeSlide = children[0] as any;
                        const screenshotSlides = children[1] as any;

                        const videoThumbnailUri = getVideoThumb(getVideoId(youtubeSlide.props.url) ?? '');
                        result.push(
                            <img
                                key={videoThumbnailUri}
                                src={videoThumbnailUri}
                                alt=""
                            />
                        );

                        screenshotSlides.map((slide: any) =>
                            result.push(
                                <img
                                    key={slide.key}
                                    src={slide.key}
                                    alt=""
                                />
                            )
                        );

                        return result;
                    }

                    return result;
                }}
            >
                <YoutubeSlide
                    key={video}
                    url={video}
                />
                {
                    screens.map(screen => (
                        <Box key={`${screen}`}>
                            <img
                                src={screen}
                                alt=""
                            />
                        </Box>
                    )) as any
                }
            </Carousel>
        </Box>
    );
};

export default Screenshots;

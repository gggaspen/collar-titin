import { Box } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/react'
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = () => {

    const [imgSrc, setImgSrc] = useState<string>(
        "app/assets/img/pic-1.jpg"
    );

    return (
        <Box
            position="absolute"
            bg="#000"
            w="100dvw"
            h="100dvh"
        >
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image
                        w="100%"
                        h="100%"
                        src={imgSrc}
                    />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default Slider;
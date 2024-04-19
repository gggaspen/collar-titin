import { Flex, Box, Image, Text, Button } from "@chakra-ui/react"
import { useState } from "react"
import Description from "~/components/Description"
import Like from "~/components/Like"
import Title from "~/components/Title"
import Slider from "~/components/slider/Slider"

const Home = () => {

    return (
        <Box>

            <Box className="backdrop-container">
                <Image className="shadow" src="./app/assets/img/pic-1.jpg" alt="" />
                <Image className="main" src="./app/assets/img/pic-1.jpg" alt="" />
            </Box>

            <Box className="main-container">

                <Box className="like-button-container">
                    <Button id="like" className="like-button">
                        <Box className="like-wrapper">
                            <Box className="ripple"></Box>
                            <svg className="heart" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                </path>
                            </svg>
                            <div className="particles" style={{--total-particles: 6}}>
                                <div className="particle" style={{"--i": 1, "--color": "#7642F0"}}></div>
                                <div className="particle" style={{"--i": 2, "--color": "#AFD27F"}}></div>
                                <div className="particle" style={{"--i": 3, "--color": "#DE8F4F"}}></div>
                                <div className="particle" style={{"--i": 4, "--color": "#D0516B"}}></div>
                                <div className="particle" style={{"--i": 5, "--color": "#5686F2"}}></div>
                                <div className="particle" style={{"--i": 6, "--color": "#D53EF3"}}></div>
                            </div>
                        </Box>
                    </Button>
                </Box>

                <Box className="info-container">
                    <Box className="back-contrast">

                    </Box>

                    {/* <Box>
                                <Box className="description-container">
                                    <Text>
                                        Mi nombre es <b>Neo Catriel</b> pero me podés llamar <b>Titín</b>. El sobrenombre proviene<br>
                                        de que me jodían con "Tito... el gatito" y, bueno, me quedó Titín.<br>
                                        Soy re mimeloso pero juego fuerte, así que OJO con mis uñitas.<br>
                                        Me gusta el atún y como balanceado Purina Excellent Urinari :)
                                    </Text>
                                </Box>
                                        <Box className="description-container">
                                            <Text>
                                                Tirame un corazoncito ahí arriba! <3
                                            </Text>
                                        </Box>
                                        <Box className="description-container">
                                            <Text>
                                                Celu de Gaspi, mi mascota humana: <b>2215581026</b>
                                            </Text>
                                        </Box>
                                        <Box className="description-container">
                                            <Text>
                                                Dirección de mi territorio: <b>San Martín 62, depto 3, Tandil</b>
                                            </Text>
                                        </Box>
                                    </Box>
                            </Box> */}

                </Box>

            </Box>
        </Box>

    );
}

export default Home;
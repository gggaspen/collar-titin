import { Box, Text, Flex, Button } from "@chakra-ui/react";
import SvgIcon from "~/assets/img/svg";

const Like = () => {

    return (

        // <Flex
        //     display="flex"
        //     justifyContent="center"
        //     alignItems="center"
        //     position="absolute"
        //     w="100%"
        // >
        //     <Button
        //         w={50}
        //         h={50}
        //         bg="crimson"
        //         borderRadius={200}
        //     >
        // <SvgIcon
        // width={20}
        // height={20}
        // fill="#000"
        //             xmls="http://www.w3.org/2000/svg"
        //             viewBox="0 0 24 24"
        //             d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"
        //     </Button>
        // </Flex >
        //         /> 
        <>
            <button className="like-button">
                <div className="like-wrapper">
                    <div className="ripple"></div>
                    <SvgIcon
                        width={24}
                        height={24}
                        fill="#000"
                        xmls="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                    <div className="particles" style="--total-particles: 6">
                        <div className="particle" style="--i: 1; --color: #7642F0"></div>
                        <div className="particle" style="--i: 2; --color: #AFD27F"></div>
                        <div className="particle" style="--i: 3; --color: #DE8F4F"></div>
                        <div className="particle" style="--i: 4; --color: #D0516B"></div>
                        <div className="particle" style="--i: 5; --color: #5686F2"></div>
                        <div className="particle" style="--i: 6; --color: #D53EF3"></div>
                    </div>
                </div>
            </button>
        </>
    );
}

export default Like;
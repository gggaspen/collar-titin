import { useEffect, useState } from "react";

type SVG = {
    width: string | number,
    height: string | number,
    fill: string,
    xmls: string,
    viewBox: string,
    d: string,
}

const SvgIcon = ({ width, height, xmls, viewBox, d, fill }: SVG) => {

    const [_width, setWidth] = useState<string | number>(20);
    const [_height, setHeight] = useState<string | number>(20);
    const [_fill, setD] = useState<string>("M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z");
    const [_xmls, setFill] = useState<string>("#000");
    const [_viewBox, setXmls] = useState<string>("http://www.w3.org/2000/svg");
    const [_d, setViewBox] = useState<string>("0 0 24 24");

    useEffect(() => {
        setWidth(width);
        setHeight(height);
        setFill(fill);
        setXmls(xmls);
        setViewBox(viewBox);
        setD(d);
    }, []);

    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            xmlns={xmls}
            viewBox={viewBox}
        >
            <path
                d={d}
            />
        </svg>
    );

}

export default SvgIcon;
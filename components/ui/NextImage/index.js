import Image from "next/image"



export const NextImage = ({
    // loader = myLoader,
    src = "/bg/starSky.jpg",
    alt = "Starry Sky",
    width = 150,
    height = 150,
    ...rest
}) => {
    return (
        <Image
            // loader={()=>'loader'}
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...rest}
        />
    )
}
NextImage.displayName = 'NextImage';

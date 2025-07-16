import { Image } from "@imagekit/react";

const Images = ({ src, className, w, h, alt }) => {
  return (
    <div>
      <Image
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        src={src}
        className={className}
        loading="lazy"
        transformation={[{ width: w, height: h }]} //
        lqip={{ active: true, quality: 20 }} //
        alt={alt}
        width={w}
        height={h}
      />
    </div>
  );
};

export default Images;

import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage }, ref) => {
    const [image, setImage] = useState(false);

    return <img className={className} ref={ref} src={image || src} alt={alt} onError={() => setImage(fallback)}></img>;
});

export default Image;

"use client";

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useEffect } from 'react';

export default function SimpleGallery({ galleryId, images }: { galleryId: string, images: any }) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + galleryId,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });

        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, []);

    images = images
        .replace(/'/g, '"')         // Replace single with double quotes
        .replace(/\s+/g, '')        // Remove spaces
        .replace(/,\]/g, ']');      // Remove trailing commas if any

    images = JSON.parse(images);

    return (
        <div className="pswp-gallery" id={galleryId}>
            {
                images.map((image: any, index: number) => (
                    <a
                        href={image.largeURL}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        key={galleryId + '-' + index}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={image.thumbnailURL} alt="" />
                    </a>
                ))
            }
        </div>
    );
}

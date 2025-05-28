"use client";

import Link from 'next/link';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useEffect, useState } from 'react';

export type ImageSource = {
    url: string,
    thumbUrl: string,
    width: string,
    height: string
}

let instanceCounter: number = 0;

export default function PhotoswipeGallery({ images }: { images: string }) {
    const [loadedImages, setLoadedImages] = useState<ImageSource[]>([]);

    const galleryId: string = "pswp-gallery" + instanceCounter;

    useEffect(() => {
        instanceCounter++;
    });

    useEffect(() => {
        let imageJson = images
            .replace(/'/g, '"')         // Replace single with double quotes
            .replace(/\s+/g, '')        // Remove spaces
            .replace(/,\]/g, ']');      // Remove trailing commas if any

        setLoadedImages(JSON.parse(imageJson));

        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + galleryId,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });

        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, [images]);


    return (
        <div className="pswp-gallery" id={galleryId}>
            {
                loadedImages.map((image: any, index: number) => (
                    <Link
                        href={image.url}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        key={galleryId + '-' + index}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={image.thumb} alt="" />
                    </Link>
                ))
            }
        </div>
    );
}

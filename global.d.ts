declare module 'react-tagcloud' {
    import * as React from 'react';

    export interface Tag {
        value: string;
        count: number;
        [key: string]: any;
    }

    export interface TagCloudProps {
        tags: Tag[];
        minSize?: number;
        maxSize?: number;
        shuffle?: boolean;
        className?: string;
        renderer?: (tag: Tag, size: number, color: string) => React.ReactNode;
        onClick?: (tag: Tag) => void;
    }

    export class TagCloud extends React.Component<TagCloudProps> { }
}
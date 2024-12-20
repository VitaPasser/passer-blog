import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Tag from '../Tag';


export type TImage = {
    link: string
    alt: string
}

export type MiniaturePost = {
    title: string
    description: string
    tags: string[]
    publish_date: string
    image: TImage
    link_to_post: string
}

const SpecialArticleCard = ({
    title,
    description,
    tags,
    publish_date,
    image,
    link_to_post
}: MiniaturePost
) => {

    return (
        <section className='group/item'>
            <div className='flex flex-col gap-6 md:group-first/item:h-[400px] md:group-last/item:h-[400px] overflow-y-hidden md:flex-row md:group-first/item:flex-col md:group-last/item:flex-col'>
                <Link
                    className="md:group-first/item:flex-1 md:group-first/item:overflow-hidden md:group-last/item:flex-1 md:group-last/item:overflow-hidden"
                    href={link_to_post}
                >
                    <Image
                        className="md:group-first/item:w-full md:group-first/item:h-full md:group-first/item:object-cover md:group-last/item:w-full md:group-last/item:h-full md:group-last/item:object-cover md:w-[320px] md:max-w-none md:object-cover"
                        src={image.link}
                        width="1920"
                        height="1080"
                        alt={image.alt}
                    />
                </Link>
                <div className='flex flex-col gap-6'>
                    <Link
                        className='flex flex-col gap-3'
                        href={link_to_post}
                    >
                        <p className='text-sm font-semibold text-purple-heart'>{publish_date}</p>
                        <h3 className='flex flex-row justify-between font-semibold text-2xl items-center'>
                            <span>{title}</span>
                            <HiMiniArrowUpRight />
                        </h3>
                        <p className='text-base font-normal text-pale-sky'>{description}</p>
                    </Link>
                    <div className='flex flex-row flex-wrap gap-2'>
                        {tags.map((tag, key) => <Tag key={key} tag={tag} />)}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SpecialArticleCard
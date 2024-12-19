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
            <div className='md:group-first/item:relative md:group-last/item:relative '>
                <Image
                    className='md:group-first/item:max-h-[400px] object-cover'
                    src={image.link}
                    width='1920'
                    height='1080'
                    alt={image.alt}
                />
                <div className='flex flex-col gap-6 bg-white dark:bg-haiti md:group-first/item:w-[101%] pt-6 md:group-first/item:absolute md:group-last/item:absolute md:group-first/item:bottom-[-1px] md:group-first/item:left-[-1px] md:group-first/item:pl-[1px] md:group-first/item:pr-[7px] md:group-last/item:w-[101%] md:group-last/item:bottom-[-1px] md:group-last/item:left-[-1px] md:group-first/last:pl-[1px] md:group-last/item:pr-[7px]'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm font-semibold text-purple-heart'>{publish_date}</p>
                        <Link className='flex flex-row justify-between font-semibold text-2xl items-center' href={link_to_post}>
                            <h3>{title}</h3>
                            <HiMiniArrowUpRight />
                        </Link>
                        <p className='text-base font-normal text-pale-sky'>{description}</p>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2'>
                        {tags.map((tag, key) => <Tag key={key} tag={tag} />)}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SpecialArticleCard
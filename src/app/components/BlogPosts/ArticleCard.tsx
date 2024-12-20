import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Tag from '../Tag';
import { MiniaturePost } from './SpecialArticleCard';

const ArticleCard = ({
    title,
    description,
    tags,
    publish_date,
    image,
    link_to_post
}: MiniaturePost
) => {

    return (
        <section className='flex flex-col gap-6 md:w-[calc(50%-8px)]'>
            <Link
                className='flex flex-col gap-6'
                href={link_to_post}>
                <Image
                    src={image.link}
                    width='1920'
                    height='1080'
                    alt={image.alt}
                />
                <div className='flex flex-col gap-3'>
                    <p className='text-sm font-semibold text-purple-heart'>{publish_date}</p>
                    <h3 className='flex flex-row justify-between font-semibold text-2xl items-center'>
                        <span>{title}</span>
                        <HiMiniArrowUpRight />
                    </h3>
                    <p className='text-base font-normal text-pale-sky'>{description}</p>
                </div>
            </Link>
            <div className='flex flex-row flex-wrap gap-2'>
                {tags.map((tag, key) => <Tag key={key} tag={tag} />)}
            </div>
        </section >
    )
}

export default ArticleCard
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Tag from '../../Tag';
import { MiniaturePost } from './SpecialArticleCard';


const RightSpecialArticleCard = ({
    title,
    description,
    tags,
    publish_date,
    image,
    link_to_post
}: MiniaturePost
) => {

    return (
        <section className=''>
            <div className='flex flex-col gap-6 overflow-y-hidden md:flex-row xl:h-[200px]'>
                <Link
                    className="md:group-first/item:flex-1 md:group-first/item:overflow-hidden md:group-last/item:flex-1 md:group-last/item:overflow-hidden"
                    href={link_to_post}
                >
                    <Image
                        className="md:group-first/item:w-full md:group-first/item:h-full md:group-first/item:object-cover md:group-last/item:w-full md:group-last/item:h-full md:group-last/item:object-cover md:w-[320px] md:h-[200px] md:max-w-none md:object-cover"
                        src={image.link}
                        width="1920"
                        height="1080"
                        alt={image.alt}
                    />
                </Link>
                <div className='flex flex-col gap-6 md:w-full'>
                    <Link
                        className='flex flex-col gap-3'
                        href={link_to_post}
                    >
                        <p className='text-sm font-semibold text-purple-heart'>
                            {publish_date.dayweek}
                            <span className='date-to-dot'></span>
                            {publish_date.date}
                        </p>
                        <h3 className='flex flex-row justify-between font-semibold text-2xl items-center md:text-lg md:group-first/item:text-2xl md:group-last/item:text-2xl'>
                            <span className='line-clamp-1'>{title}</span>
                            <HiMiniArrowUpRight />
                        </h3>
                        <p className='text-base font-normal text-pale-sky dark:text-ghost xl:max-h-[72px] overflow-hidden line-clamp-3 break-all'>{description}</p>
                    </Link>
                    <div className='flex flex-row flex-wrap gap-2 overflow-hidden xl:max-h-6'>
                        {tags.map((tag, key) => <Tag key={key} tag={tag} />)}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default RightSpecialArticleCard
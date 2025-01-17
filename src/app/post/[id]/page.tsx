import React from 'react'
import Post_, { TPost } from '@/components/Post/Post'
import RecentBlogPosts2 from '@/components/BlogPosts/RecentBlogPosts2'
import { MiniaturePost } from '@/components/BlogPosts/Card/SpecialArticleCard'

const Post = (
    //     {
    //     params,
    // }: {
    //     params: { id: number }
    //     }
) => {
    const post: TPost =
    {
        title: 'UX review presentations',
        content: `
# 1. Headers

# h1
## h2
### h3
#### h4
##### h5
###### h6

Lift($$L$$) can be determined by Lift Coefficient ($$C_L$$) like the following
equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

# 2. Text blocks

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Text before line break
Text after line break

# 3. Quotes
> quote

>quote
> > nested quote
> - list in quote

# 4. Code blocks

\`\`\`
untyped code block
\`\`\`

\`\`\`
escaped chars in code:
\\\`\`\`
\`\`\`

\`\`\`js
// js code
let a = 0
\`\`\`

\`\`\`python
# python code
print({"a":0})
\`\`\`


# 5. lists

1. item - 1
1. item - 1
1. item - 1
1. item - 1
    - item
    - item  
    item

    - item
1. item - 1
2. item - 2

# 6. Text decoration

*italic*

**bold**

***bold italic***

<u>underscored</u>

~~strikethrough~~

== highlighted ==

\`one line code\`

A ~subscript~

A ^superscript^

# 7. Links

External link: [example.com](http://example.com)

Internal link: [link to h1](#h1)

# 8. Media

1. ~~Суметь залить сайт на хостинг~~
2. ~~Сделать сайт~~
3. Сделать резюме
4. Тренировать навык прохождения собеседования

image:

![Luke](https://habrastorage.org/webt/m_/it/vm/m_itvm5jqcvwj68gsk150c_caj0.jpeg)

emoji: ⛺  ?‚

# 9. Tables

| title | title2 |
| --- | ---- |
| data | data2 |
| more data | more data2 |
| even more data | even more data2 |

# 10. other
## 10.1 Escaped special symbols

\\\\  
\\\`  
\\\*  
\\\_  
\\\{ \\\}  
\\\[ \\\]  
\\\< \\\>  
\\\( \\\)  
\\#  
\\+  
\\-  
\\.  
\\!  
\\|  

## 10.2 Hline

---  
  
---  
  
---  

# 11. html

<h2> H2 header </h2>


<p> # This markdown inside "p" tag should stay intact </p>

html image inside text block <img src="https://habrastorage.org/webt/m_/it/vm/m_itvm5jqcvwj68gsk150c_caj0.jpeg" style="width:200px; max-width:100%"> like that

**The first YouTube video "Me at the zoo". Embedded as an iframe**
<iframe style="width:560px; max-width:100%; height:315px" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        tags: ['Design', 'Research', 'Presentation', 'UX', 'UI', 'Value'],
        publish_date: {
            dayweek: 'Sunday',
            date: '1 Jan 2023',
        },
        cover:
        {
            link: '/posts/1.png',
            alt: 'Two tables, chairs and a human walk fast to the side.'
        },
    }
    const posts: MiniaturePost[] = Array(12).fill(
        {
            title: 'UX review presentations',
            description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            tags: ['Design', 'Research', 'Presentation', 'UX', 'UI', 'Value'],
            publish_date: {
                dayweek: 'Sunday',
                date: '1 Jan 2023',
            },
            image:
            {
                link: '/posts/1.png',
                alt: 'Two tables, chairs and a human walk fast to the side.'
            },
            link_to_post: '/post/1',
        }
    );
    return (
        <div className='flex flex-col md:flex-row group gap-x-8 xl:px-8'>
            <Post_ className='' post={post} />
            <RecentBlogPosts2 className='md:order-first xl:max-w-[342px]' posts={posts}>Recent blog posts</RecentBlogPosts2>
        </div>
    )
}

export default Post
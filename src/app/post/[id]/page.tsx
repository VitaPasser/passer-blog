import React from 'react'

const Blog = ({
    params,
}: {
    params: { id: string }
}) => {
    return (
        <div>Post {params.id}!</div>
    )
}

export default Blog
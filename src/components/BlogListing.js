import React from "react";
import Blog from "./Blog";


export default function BlogListing({blogs, search: Search}){
    return (
        <>
        { Search &&
            <Search/> 
        }
            <div columns is-multiline>
                { blogs.map(({ id, frontmatter: {title, subtitle, slug, date} })=>{
                    return (
                    <div className='column is-9' key={id}>
                        <Blog
                            title={title}
                            subtitle={subtitle}
                            slug={slug}
                            date={date}
                        />
                    </div>)}
                    )}
            </div>
        </>
    )
}
insert into blogs
     (title, posttime, img_url, posttext)
values ($1, $2, $3, $4);

select * from blogs;
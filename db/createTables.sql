create table if not exists blogs (blog_id int, title text, posttime timestamp, img_url text, posttext text);

create table if not exists collections (collection_id int, name text);

create table if not exists dresses (collection_id int, dress_id int, img_url text, back_img_url text)
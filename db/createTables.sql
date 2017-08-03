create table if not exists blogs (blog_id serial, title text, posttime timestamp, img_url text, posttext text);

create table if not exists collections (collection_id int, name text);

create table if not exists dresses (collection_id int, dress_id int, img_url text, back_img_url text);

create table if not exists admin (id serial, admin text, password text);

create table if not exists media (id serial, imgurl text, description text, link text);

CREATE TABLE if not exists orders
(
    order_id serial NOT NULL,
    dress_id integer,
    standard_size text,
    bust integer,
    hip integer,
    shoulder integer,
    underbust integer,
    upperarm integer,
    waist integer,
    shouldertobust integer,
    shouldertowaist integer,
    shouldertoknee integer,
    shouldertoground integer,
    height integer,
    country text,
    name text,
    email text,
    phone_number text,
    age integer,
    chest integer
);

-- create table if not exists orders

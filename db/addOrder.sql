-- INSERT INTO orders (dress_id, standard_size, bust, chest, hip, shoulder, underbust, upperarm, waist, shouldertobust, shouldertowaist, shouldertoknee, shouldertoground,
-- 					height, country, name, email, phone_number, age)
-- VALUES 				($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);
INSERT INTO orders (dress_id, standard_size, bust, chest, hip, shoulder, underbust, upperarm, waist, shouldertobust, shouldertowaist, shouldertoknee, shouldertoground, height, country, name, email, age, phone_number)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);

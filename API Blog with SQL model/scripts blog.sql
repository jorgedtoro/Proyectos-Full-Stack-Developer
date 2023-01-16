SELECT * FROM blog.posts;

select bp.title, bp.description, bp.start_date, bp.category, ba.name, ba.email, ba.link
from blog.posts as bp
join blog.authors as ba on ba.id = bp.idAuthor
where bp.idAuthor=3;
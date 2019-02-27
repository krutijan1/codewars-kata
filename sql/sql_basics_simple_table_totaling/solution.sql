select
    coalesce(nullif(clan, ''), '[no clan specified]') clan,
    sum(points) as total_points,
    count(name) as total_people,
    rank() over (order by sum(points) desc)
from people
group by clan
order by total_points desc

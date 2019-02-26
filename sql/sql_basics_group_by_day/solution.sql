select
  count(*),
  date_trunc('day', created_at) as day,
  description
from
  events
where name = 'trained'
group by day, description

select
  t.id,
  t.heads,
  b.legs,
  t.arms,
  b.tails,
  case when ((t.heads > t.arms) or (b.tails > b.legs))
    then 'BEAST'
    else 'WEIRDO'
  end species
from top_half t inner join bottom_half b on b.id = t.id
order by species

select
    Scores.Score,
    count(ranking.Score) as Rank
from Scores, (select distinct Score
    from Scores) ranking

where ranking.score >= Scores.Score

group by Scores.Id
order by Scores.Score desc

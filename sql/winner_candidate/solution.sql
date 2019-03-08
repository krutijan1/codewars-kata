select Name from Candidate inner join
    (SELECT CandidateId, Count(*) as c from Vote group by CandidateId order by c DESC LIMIT 1) winnerId
on Candidate.id = winnerId.CandidateId;

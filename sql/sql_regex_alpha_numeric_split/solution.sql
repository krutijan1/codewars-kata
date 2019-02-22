select
    project,
    regexp_replace(address, '\D','','g') numbers,
    regexp_replace(address, '\d','','g') letters
from
    repositories

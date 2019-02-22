select
  (select 'US'::text) as location,
  id,
  name,
  price,
  card_name,
  card_number,
  transaction_date
from
  ussales
where price > 50.00  
union all
select
  (select 'EU'::text) as location,
  id,
  name,
  price,
  card_name,
  card_number,
  transaction_date
from
  eusales
where price > 50.00

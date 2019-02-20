with special_sales as (
        select department_id
        from sales
        where price > 90.00
     )

select id,
       name
from departments
where id in (select department_id from special_sales)

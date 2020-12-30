SELECT t_employees.c_firstname ,t_employees.c_lastname ,t_employees.c_midlename, t_employees.c_salary 
FROM partition.t_employees WHERE (SELECT min(t_employees.c_salary) FROM partition.t_employees)=t_employees.c_salary

SELECT t_employees.c_firstname ,t_employees.c_lastname ,t_employees.c_midlename, t_employees.c_salary  
FROM partition.t_employees WHERE (SELECT max(t_employees.c_salary) FROM partition.t_employees)=t_employees.c_salary


SELECT sum(t_employees.c_salary)/count(t_employees.c_salary) FROM partition.t_employees
(SELECT  t_employees.c_firstname ,t_employees.c_lastname ,t_employees.c_midlename ,t_employees.c_email 
FROM partition.t_employees)
UNION
(SELECT  t_clients.c_firstname ,t_clients.c_lastname ,t_clients.c_midlename ,t_clients.c_email 
FROM partition.t_clients)
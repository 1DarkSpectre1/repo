SELECT t_employees.c_firstname ,t_employees.c_lastname ,t_employees.c_midlename ,ref_postiions.c_name 
FROM partition.t_employees LEFT JOIN partition.ref_postiions ON t_employees.fk_position=ref_postiions.pk_id
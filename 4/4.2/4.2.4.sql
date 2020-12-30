UPDATE partition.t_employees  SET fk_position = (SELECT partition.ref_postiions.pk_id FROM partition.ref_postiions WHERE ref_postiions.c_name=partition.t_employees.c_position)  

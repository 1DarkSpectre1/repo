ALTER TABLE partition.t_employees ADD COLUMN  fk_position int REfERENCES ref_postiions

CREATE TABLE partition.ref_postiions 
	(
    pk_id           serial NOT NULL,
	c_name		varchar NOT NULL,
		PRIMARY KEY (pk_id)
);

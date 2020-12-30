COMMENT ON TABLE partition.t_employees
IS 'Табдица Сотрудников';
COMMENT ON COLUMN partition.t_employees.pk_id
IS 'Уникальный идентификатор сотрудника';
COMMENT ON COLUMN partition.t_employees.fk_position
IS 'Внешний ключ на должность';
COMMENT ON COLUMN partition.t_employees.c_lastname
IS 'Фамилия сотрудника';
COMMENT ON COLUMN partition.t_employees.c_firstname
IS 'Имя сотрудника';
COMMENT ON COLUMN partition.t_employees.c_midlename
IS 'Отчество сотрудника';
COMMENT ON COLUMN partition.t_employees.c_salary
IS 'Заработная плата сотрудника';
COMMENT ON COLUMN partition.t_employees.c_email
IS 'Электронная почта';

COMMENT ON TABLE partition.t_clients
IS 'Табдица клиентов';
COMMENT ON COLUMN partition.t_clients.pk_id
IS 'Уникальный идентификатор клиента';
COMMENT ON COLUMN partition.t_clients.c_lastname
IS 'Фамилия клиента';
COMMENT ON COLUMN partition.t_clients.c_firstname
IS 'Имя клиента';
COMMENT ON COLUMN partition.t_clients.c_midlename
IS 'Отчество клиента';
COMMENT ON COLUMN partition.t_clients.c_email
IS 'Электронная почта';

COMMENT ON TABLE partition.ref_postiions
IS 'Табдица клиентов';
COMMENT ON COLUMN partition.ref_postiions.pk_id
IS 'Уникальный идентификатор должности';
COMMENT ON COLUMN partition.ref_postiions.c_name
IS 'Название должности';


COMMENT ON TABLE auth.t_users
IS 'Табдица пользователей';
COMMENT ON COLUMN auth.t_users.pk_id
IS 'Уникальный идентификатор пользователя';
COMMENT ON COLUMN auth.t_users.c_login
IS 'Логин';
COMMENT ON COLUMN auth.t_users.c_password
IS 'Пароль';
COMMENT ON COLUMN auth.t_users.c_last_in
IS 'время последнего входа';
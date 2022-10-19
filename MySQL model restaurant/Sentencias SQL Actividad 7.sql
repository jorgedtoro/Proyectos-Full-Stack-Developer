
	USE restaurantes;
    
    SET @restaurante = 6; #local del que se quieren extraer los datos
    
#   TODAS LAS MESAS OCUPADAS DE UN LOCAL EN CONCRETO, ASÍ COMO LOS CLIENTES QUE LAS OCUPAN.
	
    ########################  consultando dos tablas  ###########################################################
    SELECT rm.numero_mesa as 'Mesa Reservada', rc.nombre as 'Nombre Cliente', rc.email as 'Mail Cliente'
	FROM restaurantes.mesas as rm, restaurantes.clientes as rc
    WHERE rm.estado_mesa = 1 AND rc.id = rm.clientes_id AND rm.locales_id=@restaurante;


	########################  consultando tres tablas con INNER JOIN  ###########################################################
	SELECT rl.nombre as 'Local', rm.numero_mesa as 'Mesa Reservada',  rc.nombre as 'Nombre Cliente', rc.email as 'Mail Cliente'
	FROM restaurantes.mesas as rm
    JOIN restaurantes.locales as rl ON rm.locales_id= rl.id
    JOIN restaurantes.clientes as rc on rm.clientes_id = rc.id
	WHERE rm.estado_mesa = 1 AND rc.id = rm.clientes_id AND rm.locales_id=@restaurante;



#   TODOS LOS LOCALES MARCADOS COMO FAVORITO POR UN CLIENTE, INCLUYENDO LA INFORMACIÓN DEL LOCAL Y DEL CLIENTE.
    
	SELECT rl.nombre as 'Nombre del restaurante',  rl.nombre_responsable as 'Responsable del local',
		   rc.nombre as 'Nombre del cliente', rc.email as 'Mail del cliente'
    FROM restaurantes.favoritos as rf
    JOIN restaurantes.locales as rl ON rf.locales_id=rl.id
    JOIN restaurantes.clientes as rc ON rf.clientes_id=rc.id
    WHERE rc.nombre='cliente1' # cliente del que se quiere consultar sus favoritos
	ORDER BY rf.clientes_id ASC;









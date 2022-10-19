
# Gestión de restaurantes:

# Para la creación de este modelo de base de datos se han tenido en cuenta ciertas premisas:

# Locales:
	#--El nombre del local puede repetirse de cara a ofrecer un franquiciado. Por lo tanto, el dato no es único y puede repetirse.
	#--Los locales sólo pueden estar ubicados en una ubicación en concreto. Por lo tanto, las direcciones serán datos únicos que no pueden repetirse.
	#--El teléfono será un dato identificativo al igual que la dirección. Por lo tanto, es un dato único que no puede repetirse.
	#--El estado será abierto o cerrado. Dato booleano (TINYINT en MYSQL).
# Clientes:
	# --Nombre: el nombre puede repetirse. Puede darse el caso de que haya varios clientes con el mismo nombre y mismo apellido. El dato no es único.
	#--telefono: el telefono será identificativo del cliente. Varios clientes no pueden darse de alta con el mismo número. o se contempla que un cliente pueda darse
	#	    de alta con el teléfono de sus padres. El dato es único.
	#--email: el email será identificativo del cliente. No puede repetirse. El dato es único.
	#--reserva: dato booleano.

#Relaciones:
	#--Un local puede tener muchas mesas. Pero una mesa sólo puede pertenecer a un local. Relación 1-N.
	#--Un local puede tener muchos clientes. Y un cliente puede visitar varios locales, incluso puede reservar en varios a la vez. Por ejemplo, una mesa para comer 	  en un local y otra para cenar en otro distinto. Relación N - N.
	#--Un cliente puede reservar varias mesas siempre que estén en varios locales. Pero no puede reservar más de una mesa por local. Es decir, una mesa puede tener 	  un cliente. Pero un cliente puede tener varias mesas. Relación cliente-mesa 1-N.

#Protección relaciones:
	#--Si se borra un restaurante, las mesas desaparecen. Se asume que al borrarse un restaurante el local ha cambiado de dueño, o se utiliza para otro propósito.
	#--Si un cliente se borra, se anulan las mesas que tuviera reservadas. Sin embargo, se mantienen sus restaurantes favoritos.

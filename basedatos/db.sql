
CREATE TABLE registros(

    id 				int NOT NULL AUTO_INCREMENT,
	rfc 			varchar(18),
	principalname	varchar(50),
	businessname	varchar(80),
	phone			varchar(10) NOT NULL,
	email			varchar(80) NOT NULL,
	createddate		timestamp,
	PRIMARY KEY (id)

);

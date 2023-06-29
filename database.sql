create DATABASE libreria;

create TABLE libros(
    Section int,
    title text,
    author TEXT
);

insert into libros VALUES(2, 'Digital Manager', 'frey Green'),(3, 'Developers Java', 'Sofia Hoss');

create Table users(
    username text,
    password text
);

insert into users VALUES('joe', 'joe123'),('leo', 'leo123'),('sol', 'sol123');
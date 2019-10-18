-- query criação banco
create database trismegisto
default character set utf8
default collate utf8_general_ci;

use trismegisto;

-- queries criação das tabelas sem foreign keys
create table empresas (
cd_empresa int not null auto_increment,
nm_empresa varchar(255) not null,

primary key (cd_empresa)
);

create table motoristas (
cd_motorista int not null auto_increment,
nome varchar(255) not null,
cd_empresa int not null, -- foreign key references empresas
cd_veiculo int not null, -- foreign key references veiculos
email varchar(255),
senha varchar(255),
primary key (cd_motorista)
);

create table veiculos (
cd_veiculo int not null auto_increment,
nm_veiculo varchar(255),
nm_modelo varchar(255),
nm_marca varchar(255),
nm_ano varchar(255),
dt_revisao date,
cd_empresa int not null, -- foreign key references empresas
cd_motorista int not null, -- foreign key references motoristas
primary key (cd_veiculo)
);

create table viagens (
cd_viagem int not null auto_increment,
ds_viagem varchar(255),
dt_inicio datetime,
dt_fim datetime,
cd_motorista int not null, -- foreign key references motoristas
primary key (cd_viagem)
);

-- alter tables inserção de foreign keys
alter table motoristas add foreign key (cd_empresa) references empresas (cd_empresa);
alter table motoristas add foreign key (cd_veiculo) references veiculos (cd_veiculo);
alter table veiculos add foreign key (cd_empresa) references empresas (cd_empresa);
alter table veiculos add foreign key (cd_motorista) references motoristas (cd_motorista);
alter table viagens add foreign key (cd_motorista) references motoristas (cd_motorista);

-- Teste Insert
insert into empresas (nm_empresa) values ('vivo');

-- Teste Select
select * from empresas;

describe motoristas;
create table route(
    id serial not null primary key,
    name text not null,
    fare decimal(10,2)
);

create table taxi(
    id serial not null primary key,
    regNo text not null,
    region_id int,
    foreign key (region_id) references region(id)
);

create table trip(
    id serial not null primary key,
    route_id int,
    taxi_id int,
    foreign key (route_id) references route(id),
    foreign key (taxi_id) references taxi(id)
);

create table region(
    id serial not null primary key,
    name text not null
)
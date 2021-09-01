drop table if exists `like`;
drop table if exists scholarshipCategory;
drop table if exists category;
drop table if exists `user`;
drop table if exists scholarship;


create table scholarship(
                        scholarshipId binary(16) not null primary key,
                        scholarshipAmount varchar(32) null,
                        scholarshipCriteria varchar(2000),
                        scholarshipDeadline varchar(32),
                        scholarshipDescription varchar(2000),
                        scholarshipLink varchar(1000),
                        scholarshipName varchar(250),
                        index(scholarshipId)
);

create table `user`(
                    userId binary(16) not null primary key,
                    userActivationToken char(32),
                    userAdmin varchar(32) not null,
                    userEmail varchar(128) not null unique,
                    userHash char(97) not null,
                    userName varchar(32) not null unique,
                    index(userEmail)
);

create table category(
                        categoryId binary(16) not null primary key,
                        categoryName varchar(32) not null,
                        index(categoryId)
);

create table scholarshipCategory(
                           scholarshipCategoryCategoryId binary(16) not null,
                           scholarshipCategoryScholarshipId binary(16) not null,
                           foreign key(scholarshipCategoryCategoryId) references category(categoryId),
                           foreign key(scholarshipCategoryScholarshipId) references scholarship(scholarshipId),
                           primary key (scholarshipCategoryCategoryId, scholarshipCategoryScholarshipId)

);

create table `like`(
                    likeScholarshipId binary(16) not null,
                    likeUserId binary(16) not null,
                    foreign key (likeScholarshipId) references scholarship(scholarshipId),
                    foreign key (likeUserId) references user(userId),
                    primary key (likeScholarshipId, likeUserId)

)

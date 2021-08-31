drop table if exists `like`;
drop table if exists scholarshipCategory;
drop table if exists category;
drop table if exists `user`;
drop table if exists scholarship;


create table scholarship(
                        scholarshipId binary(16) not null primary key,
                        scholarshipApproved boolean,
                        scholarshipAmount varchar(8) null,
                        scholarshipCriteria varchar(2000) null,
                        scholarshipDeadline DATETIME(6) null,
                        scholarshipDescription varchar(2000) null,
                        scholarshipLink varchar(128) null,
                        scholarshipName varchar(128) null,
                        scholarshipCategoryName varchar(100) not null,
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

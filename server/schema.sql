CREATE DATABASE `chat`;

USE chat;



/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `uid` INT NOT NULL AUTO_INCREMENT,
  `username` TEXT NOT NULL,
  PRIMARY KEY (`uid`)
);

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `user` TEXT NOT NULL,
  `roomname` TEXT NOT NULL,
  `msgs` TEXT NOT NULL
);

ALTER TABLE `messages` ADD CONSTRAINT `messages_fk0` FOREIGN KEY (`uid`) REFERENCES `users`(`uid`);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

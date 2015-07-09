CREATE DATABASE `chatz`;

USE chatz;

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


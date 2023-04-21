-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 20, 2023 at 01:08 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gridpainters`
--

-- --------------------------------------------------------

--
-- Table structure for table `examplepicture`
--

CREATE TABLE `examplepicture` (
  `picture_id` int(11) NOT NULL,
  `picture-array` json NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `examplepicture`
--

INSERT INTO `examplepicture` (`picture_id`, `picture-array`, `name`) VALUES
(1, '[[\"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"black\", \"black\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"red\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"yellow\", \"yellow\", \"red\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"black\", \"black\", \"black\", \"yellow\", \"yellow\", \"red\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"yellow\", \"yellow\", \"red\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"red\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"black\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"]]', 'Boy with banks'),
(2, '[[\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"black\", \"black\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"red\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"red\", \"red\", \"red\", \"yellow\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"yellow\", \"yellow\", \"red\", \"red\", \"yellow\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"red\", \"red\", \"red\", \"yellow\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"red\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"black\", \"black\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\"]]', 'Teddybear'),
(3, '[[\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"black\", \"black\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"red\", \"black\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"black\", \"black\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"red\", \"brown\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"red\", \"brown\", \"brown\"], [\"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"red\", \"brown\", \"brown\"], [\"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"red\", \"brown\", \"brown\"], [\"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"black\", \"black\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"red\", \"brown\"], [\"brown\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"red\", \"black\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"black\", \"black\", \"black\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"]]', 'Man with beard'),
(4, '[[\"black\", \"black\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"yellow\", \"brown\", \"brown\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"black\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"yellow\", \"brown\", \"brown\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"black\", \"brown\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"red\", \"red\", \"red\", \"brown\", \"brown\"], [\"black\", \"black\", \"yellow\", \"brown\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"black\", \"brown\", \"brown\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"black\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"black\", \"black\", \"brown\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"black\", \"black\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"black\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"black\", \"black\", \"black\", \"black\", \"black\", \"black\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"]]', 'Boy with red mouth'),
(5, '[[\"red\", \"red\", \"red\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"red\", \"red\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"red\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"brown\", \"brown\", \"black\", \"black\", \"black\", \"black\", \"brown\"], [\"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"black\", \"black\", \"black\", \"brown\"], [\"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"black\", \"black\", \"brown\"], [\"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"black\", \"brown\"], [\"red\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"black\", \"black\", \"brown\"], [\"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"black\", \"brown\"], [\"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"brown\", \"brown\", \"brown\", \"brown\", \"black\", \"black\", \"brown\"], [\"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"yellow\", \"yellow\", \"brown\", \"brown\", \"black\", \"black\", \"black\", \"brown\"], [\"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"yellow\", \"brown\", \"brown\", \"black\", \"black\", \"black\", \"black\", \"brown\"], [\"red\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"red\", \"red\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"], [\"red\", \"red\", \"red\", \"red\", \"red\", \"red\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\", \"brown\"]]', 'Scary guy');

-- --------------------------------------------------------

--
-- Table structure for table `gamepictures`
--

CREATE TABLE `gamepictures` (
  `picture_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `picture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `userpictures`
--

CREATE TABLE `userpictures` (
  `picture_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `userName` varchar(128) NOT NULL,
  `userPassword` varchar(128) NOT NULL,
  `userEmail` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `userName`, `userPassword`, `userEmail`) VALUES
(1, 'test', '$2b$10$yGLh/co6x.PQxbMtvOMSBOklH1UXvkdVyHl4CQDhCqJK958kiai0i', 'test@mail.com'),
(2, 'hej', '$2b$10$Z7x.lPyEPQb3SlzSbCfmwuCqe2TRNDzJYVUzwPwkQREjKMR05Jyky', 'hej@mail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `examplepicture`
--
ALTER TABLE `examplepicture`
  ADD PRIMARY KEY (`picture_id`);

--
-- Indexes for table `gamepictures`
--
ALTER TABLE `gamepictures`
  ADD PRIMARY KEY (`picture_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `userpictures`
--
ALTER TABLE `userpictures`
  ADD PRIMARY KEY (`picture_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `examplepicture`
--
ALTER TABLE `examplepicture`
  MODIFY `picture_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `gamepictures`
--
ALTER TABLE `gamepictures`
  MODIFY `picture_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userpictures`
--
ALTER TABLE `userpictures`
  MODIFY `picture_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gamepictures`
--
ALTER TABLE `gamepictures`
  ADD CONSTRAINT `gamepictures_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `userpictures`
--
ALTER TABLE `userpictures`
  ADD CONSTRAINT `userpictures_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

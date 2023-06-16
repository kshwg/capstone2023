-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2023 at 01:53 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scholarmatch_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `inputed_data`
--

CREATE TABLE `inputed_data` (
  `id` int(11) NOT NULL,
  `program_name` varchar(255) NOT NULL,
  `organizer` varchar(255) NOT NULL,
  `funds_in_rupiah` int(11) NOT NULL,
  `gpa` float NOT NULL,
  `religion` varchar(255) NOT NULL,
  `gpa_status` tinyint(1) NOT NULL,
  `identity` varchar(255) NOT NULL,
  `underrepresented_minority` tinyint(1) NOT NULL,
  `volunteering` tinyint(1) NOT NULL,
  `first_generation` tinyint(1) NOT NULL,
  `parental_status` varchar(255) NOT NULL,
  `total_awardee` int(11) NOT NULL,
  `essay` tinyint(1) NOT NULL,
  `SMP-SMA` tinyint(1) NOT NULL,
  `SMA` tinyint(1) NOT NULL,
  `Sarjana` tinyint(1) NOT NULL,
  `SMP-SMA-Sarjana` tinyint(1) NOT NULL,
  `SMA-Sarjana` tinyint(1) NOT NULL,
  `Sarjana-Fresh_Graduate` tinyint(1) NOT NULL,
  `Fresh_Graduate` tinyint(1) NOT NULL,
  `SMP-SMA-Sarjana-Fresh_Graduate` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inputed_data`
--

INSERT INTO `inputed_data` (`id`, `program_name`, `organizer`, `funds_in_rupiah`, `gpa`, `religion`, `gpa_status`, `identity`, `underrepresented_minority`, `volunteering`, `first_generation`, `parental_status`, `total_awardee`, `essay`, `SMP-SMA`, `SMA`, `Sarjana`, `SMP-SMA-Sarjana`, `SMA-Sarjana`, `Sarjana-Fresh_Graduate`, `Fresh_Graduate`, `SMP-SMA-Sarjana-Fresh_Graduate`) VALUES
(1, 'Beasiswa Dummy', 'Dummy', 4560000, 3.2, 'islam', 1, 'male', 1, 1, 1, 'With Parents', 5, 1, 0, 0, 1, 0, 0, 1, 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inputed_data`
--
ALTER TABLE `inputed_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inputed_data`
--
ALTER TABLE `inputed_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

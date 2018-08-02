-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2018 at 01:46 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auto_shop_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `master_body_type`
--

CREATE TABLE `master_body_type` (
  `id` int(11) NOT NULL,
  `body_type` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_body_type`
--

INSERT INTO `master_body_type` (`id`, `body_type`) VALUES
(1, 'Hatchback'),
(2, 'MPV'),
(3, 'Sedan'),
(4, 'SUV');

-- --------------------------------------------------------

--
-- Table structure for table `master_cityordistrict`
--

CREATE TABLE `master_cityordistrict` (
  `id` int(11) NOT NULL,
  `province_id` int(11) DEFAULT NULL,
  `cityordistrict` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_cityordistrict`
--

INSERT INTO `master_cityordistrict` (`id`, `province_id`, `cityordistrict`) VALUES
(1, 1, 'Kota Tangerang'),
(2, 1, 'Kota Tangerang Selatan'),
(3, 2, 'Kota Jakarta Barat'),
(4, 2, 'Kota Jakarta Pusat'),
(5, 2, 'Kota Jakarta Selatan'),
(6, 2, 'Kota Jakarta Timur'),
(7, 2, 'Kota Jakarta Utara'),
(8, 3, 'Kota Bandung'),
(9, 3, 'Kota Bekasi'),
(10, 3, 'Kota Bogor');

-- --------------------------------------------------------

--
-- Table structure for table `master_colour`
--

CREATE TABLE `master_colour` (
  `id` int(11) NOT NULL,
  `colour` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_colour`
--

INSERT INTO `master_colour` (`id`, `colour`) VALUES
(1, 'Hitam'),
(2, 'Merah'),
(3, 'Putih'),
(4, 'Silver');

-- --------------------------------------------------------

--
-- Table structure for table `master_merk`
--

CREATE TABLE `master_merk` (
  `id` int(11) NOT NULL,
  `merk` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_merk`
--

INSERT INTO `master_merk` (`id`, `merk`) VALUES
(1, 'Honda'),
(2, 'Mazda'),
(3, 'Toyota'),
(4, 'Suzuki'),
(5, 'Volkswagen');

-- --------------------------------------------------------

--
-- Table structure for table `master_province`
--

CREATE TABLE `master_province` (
  `id` int(11) NOT NULL,
  `province` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_province`
--

INSERT INTO `master_province` (`id`, `province`) VALUES
(1, 'Banten'),
(2, 'DKI Jakarta'),
(3, 'Jawa Barat');

-- --------------------------------------------------------

--
-- Table structure for table `master_type`
--

CREATE TABLE `master_type` (
  `id` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_variant`
--

CREATE TABLE `master_variant` (
  `id` int(11) NOT NULL,
  `merk_id` int(11) DEFAULT NULL,
  `varian` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_variant`
--

INSERT INTO `master_variant` (`id`, `merk_id`, `varian`) VALUES
(1, 1, 'City'),
(2, 1, 'Civic'),
(3, 1, 'Jazz'),
(4, 1, 'CR-V'),
(5, 1, 'Mobilio'),
(6, 2, '2'),
(7, 2, '3'),
(8, 2, 'CX-3'),
(9, 2, 'CX-5'),
(10, 3, 'Yaris'),
(11, 3, 'Kijang Innova'),
(12, 3, 'Vios'),
(13, 3, 'Fortuner'),
(14, 4, 'Ertiga'),
(15, 4, 'Baleno'),
(16, 4, 'Ignis'),
(17, 5, 'Polo'),
(18, 5, 'Golf');

-- --------------------------------------------------------

--
-- Table structure for table `user_admin`
--

CREATE TABLE `user_admin` (
  `id` int(11) NOT NULL,
  `Username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Password` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `AdminStatus` enum('user','admin') COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_admin`
--

INSERT INTO `user_admin` (`id`, `Username`, `Password`, `Email`, `AdminStatus`) VALUES
(4, 'asrilirsadi', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'irsadi.asril@gmail.com', 'admin'),
(5, 'irsadiasril', 'e2217d3e4e120c6a3372a1890f03e232b35ad659d71f7a62501a4ee204a3e66d', 'asril.irsadi@gmail.com', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `master_body_type`
--
ALTER TABLE `master_body_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_cityordistrict`
--
ALTER TABLE `master_cityordistrict`
  ADD PRIMARY KEY (`id`),
  ADD KEY `province_id` (`province_id`);

--
-- Indexes for table `master_colour`
--
ALTER TABLE `master_colour`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_merk`
--
ALTER TABLE `master_merk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_province`
--
ALTER TABLE `master_province`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_type`
--
ALTER TABLE `master_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_variant`
--
ALTER TABLE `master_variant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `merk_id` (`merk_id`);

--
-- Indexes for table `user_admin`
--
ALTER TABLE `user_admin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `master_body_type`
--
ALTER TABLE `master_body_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_cityordistrict`
--
ALTER TABLE `master_cityordistrict`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `master_colour`
--
ALTER TABLE `master_colour`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_merk`
--
ALTER TABLE `master_merk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `master_province`
--
ALTER TABLE `master_province`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `master_type`
--
ALTER TABLE `master_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_variant`
--
ALTER TABLE `master_variant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user_admin`
--
ALTER TABLE `user_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `master_cityordistrict`
--
ALTER TABLE `master_cityordistrict`
  ADD CONSTRAINT `master_cityordistrict_ibfk_1` FOREIGN KEY (`province_id`) REFERENCES `master_province` (`id`);

--
-- Constraints for table `master_variant`
--
ALTER TABLE `master_variant`
  ADD CONSTRAINT `master_variant_ibfk_1` FOREIGN KEY (`merk_id`) REFERENCES `master_merk` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2018 at 06:36 AM
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
(5, 'Volkswagen'),
(6, 'Kia'),
(7, 'Hyundai'),
(9, 'Mini'),
(10, 'Wuling');

-- --------------------------------------------------------

--
-- Table structure for table `master_model`
--

CREATE TABLE `master_model` (
  `id` int(11) NOT NULL,
  `merk_id` int(11) DEFAULT NULL,
  `model` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_model`
--

INSERT INTO `master_model` (`id`, `merk_id`, `model`) VALUES
(1, 1, 'City'),
(2, 1, 'Civic'),
(3, 1, 'Jazz'),
(4, 1, 'CR-V'),
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
(18, 5, 'Golf'),
(19, 7, 'Santa Fe'),
(20, 7, 'i10'),
(21, 7, 'i20'),
(22, 7, 'Tucson'),
(23, 2, '6');

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
-- Table structure for table `master_variant`
--

CREATE TABLE `master_variant` (
  `id` int(11) NOT NULL,
  `variant` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_variant`
--

INSERT INTO `master_variant` (`id`, `variant`) VALUES
(1, 'E'),
(2, 'ES'),
(3, 'S'),
(4, '1.5 Turbo'),
(5, 'RS'),
(6, '2.0 Prestige'),
(7, '2.4 Prestige'),
(8, 'V'),
(9, 'GT'),
(10, 'SKYACTIVE-G'),
(11, 'Grand Touring'),
(12, 'Touring'),
(13, 'Elite'),
(14, 'Sport'),
(15, 'G'),
(16, 'TRD Sportivo'),
(17, 'J'),
(18, 'Q'),
(19, 'Venturer'),
(20, 'V Luxury'),
(21, 'G TRD'),
(22, 'VRZ'),
(23, 'GL'),
(24, 'GX'),
(25, 'Dreza'),
(26, 'Series 1'),
(27, 'GTI'),
(28, 'TSI'),
(29, 'Comfortline'),
(30, 'Highline'),
(31, 'VRS');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `merk_id` int(11) DEFAULT NULL,
  `model_id` int(11) DEFAULT NULL,
  `variant_id` int(11) DEFAULT NULL,
  `prodyear` int(5) DEFAULT NULL,
  `bodytype_id` int(11) DEFAULT NULL,
  `transmission` enum('manual','otomatis') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `colour_id` int(11) DEFAULT NULL,
  `cityordistrict_id` int(11) DEFAULT NULL,
  `conditioncar` enum('baru','bekas') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price_Rp` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `overview` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `merk_id`, `model_id`, `variant_id`, `prodyear`, `bodytype_id`, `transmission`, `colour_id`, `cityordistrict_id`, `conditioncar`, `price_Rp`, `overview`, `created`) VALUES
(1, 1, 1, 1, 2018, 3, 'otomatis', 3, 5, 'baru', '323.500.000', '', '2018-08-27 03:35:32'),
(2, 1, 1, 2, 2014, 3, 'otomatis', 1, 5, 'bekas', '210.000.000', '', '2018-08-25 04:08:08'),
(3, 1, 2, 3, 2018, 1, 'otomatis', 1, 2, 'baru', '400.500.000', '', '2018-08-25 04:08:08');

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `image1` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image2` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image3` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image4` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`id`, `product_id`, `image1`, `image2`, `image3`, `image4`) VALUES
(1, 1, '1_Honda_City_E_2018_Baru_Putih_img1.jpg', '1_Honda_City_E_2018_Baru_Putih_img2.jpg', '1_Honda_City_E_2018_Baru_Putih_img3.jpg', '1_Honda_City_E_2018_Baru_Putih_img4.jpg'),
(2, 2, '2_Honda_City_ES_2014_Bekas_Hitam_img1.jpg', '2_Honda_City_ES_2014_Bekas_Hitam_img2.jpg', '2_Honda_City_ES_2014_Bekas_Hitam_img3.jpg', '2_Honda_City_ES_2014_Bekas_Hitam_img4.jpg'),
(3, 3, '3_Honda_Civic_S_Hatchback_2018_Baru_Hitam_img1.jpg', '3_Honda_Civic_S_Hatchback_2018_Baru_Hitam_img2.jpg', '3_Honda_Civic_S_Hatchback_2018_Baru_Hitam_img3.jpg', '3_Honda_Civic_S_Hatchback_2018_Baru_Hitam_img4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_spec`
--

CREATE TABLE `product_spec` (
  `id` int(11) NOT NULL,
  `model_id` int(11) NOT NULL,
  `variant_id` int(11) NOT NULL,
  `bodytype_id` int(11) NOT NULL,
  `prodyear` int(11) NOT NULL,
  `engine_cc` int(5) DEFAULT NULL,
  `torque_Nm` int(4) DEFAULT NULL,
  `power_hp` int(4) DEFAULT NULL,
  `length_mm` int(5) DEFAULT NULL,
  `width_mm` int(5) DEFAULT NULL,
  `height_mm` int(5) DEFAULT NULL,
  `wheelbase_mm` int(5) DEFAULT NULL,
  `ground_clearance_mm` int(5) DEFAULT NULL,
  `interior` text COLLATE utf8mb4_unicode_ci,
  `exterior` text COLLATE utf8mb4_unicode_ci,
  `safety` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_spec`
--

INSERT INTO `product_spec` (`id`, `model_id`, `variant_id`, `bodytype_id`, `prodyear`, `engine_cc`, `torque_Nm`, `power_hp`, `length_mm`, `width_mm`, `height_mm`, `wheelbase_mm`, `ground_clearance_mm`, `interior`, `exterior`, `safety`) VALUES
(1, 1, 1, 3, 2018, 1497, 145, 118, 4442, 1694, 1477, 2600, 165, 'power steering, steering switch control, cruise control, paddle shift, Multi Information LCD Display (MIL), engine starter button, keyless entry, Smart 8” floating A/V System with iOS and Android connect, ISOFIX Theter, AC with smart touch', 'design concept: Advanced Energetic Design, Full LED Head Lamp and DRL, Auto Retractable Door Mirror with LED Turning Signal , LED Stop Lamp', 'ABS, EBD, BA, Dual Airbags, Electronic Stability Control, Immobilizer, Hill Start Assist, Emergency Stop Signal'),
(2, 1, 2, 3, 2014, 1497, 145, 118, 4442, 1694, 1477, 2600, 165, 'power steering, steering switch control, cruise control, paddle shift, engine starter button, keyless entry, 6.1touch screen monitor (FM/AM, DVD, CD, MP3/WMA, USB, Aux-Input, iPod & iPhone), ISOFIX Theter, AC with smart touch', 'Shark Fin Antenna, Alloy Wheel 16 Inchi, LED Turning Signal, Rear Reflector, Sensor Parking', 'ABS, EBD, BA, 6 Airbags, Electronic Stability Control, Immobilizer'),
(3, 2, 3, 1, 2018, 1498, 220, 173, 4501, 2075, 1421, 2700, 125, 'Automatic Climate Control, AC with Heater, Engine Start Stop Button, Steering with Audio Switch Control, Paddle Shift, Cruise Control', 'Keyless Entry, Adjustable Headlights, LED Headlamp, DRL, Fog Lamp, Electric Mirror, Rear Camera, Roof Spoiler, LED Stop Lamp', 'ABS, EBD, BA, Vehicle Stability Control, Dual Airbags, Crash Sensor, imMOBILIZER');

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

-- --------------------------------------------------------

--
-- Table structure for table `user_customer`
--

CREATE TABLE `user_customer` (
  `id` int(11) NOT NULL,
  `username_cust` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password_cust` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_cust` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_cust` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_customer`
--

INSERT INTO `user_customer` (`id`, `username_cust`, `password_cust`, `email_cust`, `phone_cust`) VALUES
(1, 'asril01', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'asril01@gmail.com', '+6281384'),
(2, 'irsadi01', 'e2217d3e4e120c6a3372a1890f03e232b35ad659d71f7a62501a4ee204a3e66d', 'irsadi01@gmail.com', '+62996633'),
(3, 'asril02', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'asril02@gmail.com', '+62813849');

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
-- Indexes for table `master_model`
--
ALTER TABLE `master_model`
  ADD PRIMARY KEY (`id`),
  ADD KEY `merk_id` (`merk_id`);

--
-- Indexes for table `master_province`
--
ALTER TABLE `master_province`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_variant`
--
ALTER TABLE `master_variant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `merk_id` (`merk_id`),
  ADD KEY `model_id` (`model_id`),
  ADD KEY `variant_id` (`variant_id`),
  ADD KEY `bodytype_id` (`bodytype_id`),
  ADD KEY `colour_id` (`colour_id`),
  ADD KEY `cityordistrict_id` (`cityordistrict_id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_spec`
--
ALTER TABLE `product_spec`
  ADD PRIMARY KEY (`id`),
  ADD KEY `model_id` (`model_id`),
  ADD KEY `variant_id` (`variant_id`),
  ADD KEY `bodytype_id` (`bodytype_id`);

--
-- Indexes for table `user_admin`
--
ALTER TABLE `user_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_customer`
--
ALTER TABLE `user_customer`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `master_model`
--
ALTER TABLE `master_model`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `master_province`
--
ALTER TABLE `master_province`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `master_variant`
--
ALTER TABLE `master_variant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_spec`
--
ALTER TABLE `product_spec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_admin`
--
ALTER TABLE `user_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_customer`
--
ALTER TABLE `user_customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `master_cityordistrict`
--
ALTER TABLE `master_cityordistrict`
  ADD CONSTRAINT `master_cityordistrict_ibfk_1` FOREIGN KEY (`province_id`) REFERENCES `master_province` (`id`);

--
-- Constraints for table `master_model`
--
ALTER TABLE `master_model`
  ADD CONSTRAINT `master_model_ibfk_1` FOREIGN KEY (`merk_id`) REFERENCES `master_merk` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`merk_id`) REFERENCES `master_merk` (`id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`model_id`) REFERENCES `master_model` (`id`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`variant_id`) REFERENCES `master_variant` (`id`),
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`bodytype_id`) REFERENCES `master_body_type` (`id`),
  ADD CONSTRAINT `product_ibfk_5` FOREIGN KEY (`colour_id`) REFERENCES `master_colour` (`id`),
  ADD CONSTRAINT `product_ibfk_6` FOREIGN KEY (`cityordistrict_id`) REFERENCES `master_cityordistrict` (`id`);

--
-- Constraints for table `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `product_spec`
--
ALTER TABLE `product_spec`
  ADD CONSTRAINT `product_spec_ibfk_1` FOREIGN KEY (`model_id`) REFERENCES `master_model` (`id`),
  ADD CONSTRAINT `product_spec_ibfk_2` FOREIGN KEY (`variant_id`) REFERENCES `master_variant` (`id`),
  ADD CONSTRAINT `product_spec_ibfk_3` FOREIGN KEY (`bodytype_id`) REFERENCES `master_body_type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

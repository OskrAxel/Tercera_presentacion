-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2023 a las 06:01:34
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bqef_2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informe`
--

CREATE TABLE `informe` (
  `id_doc` int(11) NOT NULL,
  `nom_doc` varchar(40) DEFAULT NULL,
  `nom_usu` varchar(50) DEFAULT NULL,
  `archivo` longblob DEFAULT NULL,
  `f_cargado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `informe`
--

INSERT INTO `informe` (`id_doc`, `nom_doc`, `nom_usu`, `archivo`, `f_cargado`) VALUES
(1, 'informe_enero_Alcides_Cusi_Ajno', 'Alcides Oscar Cusi Ajno', NULL, '2023-10-17 01:34:46'),
(3, 'a1', 'a1', NULL, '2023-10-16 03:03:00'),
(4, 'a23', 'a23', NULL, '2023-10-17 03:19:00'),
(6, 'asdasd', 'asdasd', '', '0000-00-00 00:00:00'),
(7, 'asdas', 'dasdasd', NULL, '2023-10-17 03:56:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patrocinador`
--

CREATE TABLE `patrocinador` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(60) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contraseña` varchar(40) DEFAULT NULL,
  `celular` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `patrocinador`
--

INSERT INTO `patrocinador` (`id`, `nombre`, `apellido`, `email`, `contraseña`, `celular`, `created_at`, `updated_at`) VALUES
(1, 'a11', 'a1', 'a1', '698d51a19d8a121ce581499d7b701668', 222, '2023-10-17 00:45:57', '2023-10-17 00:45:57'),
(2, 'a113', 'a1', 'a1', '3049a1f0f1c808cdaa4fbed0e01649b1', 222, '2023-10-17 00:47:49', '2023-10-17 00:47:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(60) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contraseña` varchar(40) DEFAULT NULL,
  `celular` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `contraseña`, `celular`, `created_at`, `updated_at`) VALUES
(1, '123123', 'qwe123', 'asda@weqwe', '202cb962ac59075b964b07152d234b70', 12312312, '2023-10-16 01:59:23', '2023-10-16 01:59:23'),
(4, 'hoola', 'jola', 'asd@saldalsd', '202cb962ac59075b964b07152d234b70', 123123, '2023-10-16 01:59:26', '2023-10-16 01:59:26'),
(5, 'ewe', 'wee', '123 qw@', '202cb962ac59075b964b07152d234b70', 12312312, '2023-10-16 01:59:30', '2023-10-16 01:59:30'),
(14, '123123', '12313221', 'qweqewqe', '202cb962ac59075b964b07152d234b70', 77777, '2023-10-16 01:59:34', '2023-10-16 01:59:34'),
(15, '123123', '12313221', 'qweqewqe', '202cb962ac59075b964b07152d234b70', 77777, '2023-10-16 01:59:38', '2023-10-16 01:59:38'),
(23, 'a1', 'a1', 'a1', '202cb962ac59075b964b07152d234b70', 1111111111, '2023-10-16 01:59:42', '2023-10-16 01:59:42'),
(25, '132', '123', '123', '202cb962ac59075b964b07152d234b70', 123, '2023-10-16 01:59:48', '2023-10-16 01:59:48'),
(28, 'qweqw', 'qweqwe', 'weqewq', '202cb962ac59075b964b07152d234b70', 111111, '2023-10-16 01:52:40', '2023-10-16 01:52:40'),
(29, 'qweqwe', 'qweqweq', 'weqweqew', '202cb962ac59075b964b07152d234b70', 1111, '2023-10-16 04:00:00', '2023-10-16 01:49:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_per`
--

CREATE TABLE `usuarios_per` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(60) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contraseña` varchar(40) DEFAULT NULL,
  `celular` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios_per`
--

INSERT INTO `usuarios_per` (`id`, `nombre`, `apellido`, `email`, `contraseña`, `celular`, `created_at`, `updated_at`) VALUES
(1, 'asdasd', 'asdasdasd', 'asdasdasd', 'asdasd123123', 112312312, '2023-10-17 00:34:54', '2023-10-17 00:34:54'),
(2, 'asdasd1111', 'asdasdasd', 'asdasdasd', '1a1233cfb69d7f27211e36aff9ec373a', 112312312, '2023-10-17 00:48:10', '2023-10-17 00:48:10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `informe`
--
ALTER TABLE `informe`
  ADD PRIMARY KEY (`id_doc`);

--
-- Indices de la tabla `patrocinador`
--
ALTER TABLE `patrocinador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios_per`
--
ALTER TABLE `usuarios_per`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `informe`
--
ALTER TABLE `informe`
  MODIFY `id_doc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `patrocinador`
--
ALTER TABLE `patrocinador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `usuarios_per`
--
ALTER TABLE `usuarios_per`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

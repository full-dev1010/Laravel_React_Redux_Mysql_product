/*
 Navicat Premium Data Transfer

 Source Server         : connection
 Source Server Type    : MySQL
 Source Server Version : 100138
 Source Host           : localhost:3306
 Source Schema         : react_laravel

 Target Server Type    : MySQL
 Target Server Version : 100138
 File Encoding         : 65001

 Date: 29/07/2021 11:01:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `failed_jobs_uuid_unique`(`uuid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (25, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (26, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (27, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (28, '2021_07_14_070555_create_products_table', 1);
INSERT INTO `migrations` VALUES (29, '2021_07_14_083151_create_points_table', 1);
INSERT INTO `migrations` VALUES (30, '2021_07_14_102743_drop_users_table', 1);

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for points
-- ----------------------------
DROP TABLE IF EXISTS `points`;
CREATE TABLE `points`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `point` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `points_user_id_foreign`(`user_id`) USING BTREE,
  INDEX `points_product_id_foreign`(`product_id`) USING BTREE,
  CONSTRAINT `points_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `points_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of points
-- ----------------------------
INSERT INTO `points` VALUES (1, 1, 3, 10, NULL, NULL);
INSERT INTO `points` VALUES (2, 1, 4, 22, NULL, NULL);
INSERT INTO `points` VALUES (4, 2, 6, 33, NULL, NULL);
INSERT INTO `points` VALUES (5, 1, 6, 44, NULL, NULL);
INSERT INTO `points` VALUES (6, 2, 4, 55, NULL, NULL);
INSERT INTO `points` VALUES (7, 2, 5, 234, NULL, NULL);

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `count` int(11) NOT NULL DEFAULT 0,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'title',
  `img` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `price` double NOT NULL DEFAULT 0,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (3, 10, 'Bloodbowll', '../images/celebrations-collection-dragapult-prime-300x400.png', 'Lorem ips sustainable gastropub.', 100, NULL, NULL, NULL);
INSERT INTO `products` VALUES (4, 20, 'infinity', '../images/celebrations-deluxe-pin-box-300x400.png', 'Lorem ipsum drk actually.', 200, NULL, NULL, NULL);
INSERT INTO `products` VALUES (5, 33, 'legion', '../images/celebrations-mini-tin_1b3wnscd-300x400.png', 'Lorem ipsum dolor amet offal butcher qui.', 333, NULL, NULL, NULL);
INSERT INTO `products` VALUES (6, 40, 'warhammer', '../images/celebrations-premium-figure-collection-300x400.png', 'Lorem ipsum dolor amet offacs.Okay', 4004, NULL, NULL, NULL);
INSERT INTO `products` VALUES (23, 0, 'Product1', '../images/celebrations-deluxe-pin-box-300x400.png', 'Product Description', 0, '2021-07-28 05:00:18', NULL, NULL);
INSERT INTO `products` VALUES (24, 0, 'Product1', '../images/celebrations-deluxe-pin-box-300x400.png', 'Product Description', 0, '2021-07-28 05:02:40', NULL, NULL);
INSERT INTO `products` VALUES (25, 10101, 'Product1', '../images/celebrations-deluxe-pin-box-300x400.png', 'Product Description', 10101, NULL, NULL, NULL);
INSERT INTO `products` VALUES (26, 0, 'Product1', '../images/celebrations-deluxe-pin-box-300x400.png', 'Product Description', 0, NULL, NULL, NULL);
INSERT INTO `products` VALUES (27, 0, 'Product1', '../images/celebrations-deluxe-pin-box-300x400.png', 'Product Description', 0, '2021-07-28 05:14:20', NULL, NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `role` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'admin@gmail.com', '2021-07-16 17:36:05', '21232f297a57a5a743894a0e4a801fc3', NULL, 'admin', NULL, NULL, NULL);
INSERT INTO `users` VALUES (2, 'Misha', 'misha@gmial.com', '2021-07-16 17:37:01', '383d802a4c84af5ac3719276218bb918', NULL, 'user', NULL, NULL, NULL);
INSERT INTO `users` VALUES (3, 'James', 'james@gmail.com', '2021-07-16 17:37:21', 'james', NULL, 'user', NULL, NULL, NULL);
INSERT INTO `users` VALUES (4, 'John', 'john@gmail.com', '2021-07-16 17:37:37', 'john', NULL, 'user', NULL, NULL, NULL);
INSERT INTO `users` VALUES (5, 'Tom', 'tom@gmail.com', '2021-07-16 17:38:04', 'tom', NULL, 'user', NULL, NULL, NULL);
INSERT INTO `users` VALUES (18, 'a', 'a@gmail.com', NULL, '0cc175b9c0f1b6a831c399e269772661', NULL, 'user', NULL, '2021-07-28 07:11:03', '2021-07-28 07:11:03');

SET FOREIGN_KEY_CHECKS = 1;

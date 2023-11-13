/*
  Warnings:

  - Added the required column `connectionId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "connectionId" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `active` on the `Organization` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isActive` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "active",
ADD COLUMN     "isActive" BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Organization_name_key" ON "Organization"("name");

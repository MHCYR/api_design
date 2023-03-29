/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_name_belongsToId_key";

-- AlterTable
ALTER TABLE "Update" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "body" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsToId_key" ON "Product"("id", "belongsToId");

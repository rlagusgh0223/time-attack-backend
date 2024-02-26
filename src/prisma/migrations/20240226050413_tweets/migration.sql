/*
  Warnings:

  - You are about to drop the column `twittId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Twitt` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tweetsId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_twittId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "twittId",
ADD COLUMN     "tweetsId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Twitt";

-- CreateTable
CREATE TABLE "Tweets" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tweets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_tweetsId_fkey" FOREIGN KEY ("tweetsId") REFERENCES "Tweets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

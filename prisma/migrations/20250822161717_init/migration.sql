-- CreateTable
CREATE TABLE "public"."User" (
    "id" VARCHAR(42) NOT NULL,
    "twitterHandle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dailySwipeCount" INTEGER NOT NULL DEFAULT 0,
    "lastSwipeDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Like" (
    "id" SERIAL NOT NULL,
    "likerId" VARCHAR(42) NOT NULL,
    "likedId" VARCHAR(42) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Match" (
    "id" SERIAL NOT NULL,
    "aId" VARCHAR(42) NOT NULL,
    "bId" VARCHAR(42) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Message" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "senderId" VARCHAR(42) NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Like_likerId_likedId_idx" ON "public"."Like"("likerId", "likedId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_likerId_likedId_key" ON "public"."Like"("likerId", "likedId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_aId_bId_key" ON "public"."Match"("aId", "bId");

-- CreateIndex
CREATE INDEX "Message_matchId_idx" ON "public"."Message"("matchId");

-- AddForeignKey
ALTER TABLE "public"."Like" ADD CONSTRAINT "Like_likerId_fkey" FOREIGN KEY ("likerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Like" ADD CONSTRAINT "Like_likedId_fkey" FOREIGN KEY ("likedId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_aId_fkey" FOREIGN KEY ("aId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_bId_fkey" FOREIGN KEY ("bId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "public"."Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

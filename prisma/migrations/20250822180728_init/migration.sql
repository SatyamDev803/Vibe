-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "premiumUntil" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "public"."PremiumPayment" (
    "id" SERIAL NOT NULL,
    "userId" VARCHAR(42) NOT NULL,
    "txHash" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PremiumPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PremiumPayment_txHash_key" ON "public"."PremiumPayment"("txHash");

-- AddForeignKey
ALTER TABLE "public"."PremiumPayment" ADD CONSTRAINT "PremiumPayment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

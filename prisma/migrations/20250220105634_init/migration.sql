-- CreateTable
CREATE TABLE "PackingTip" (
    "id" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "tip" VARCHAR(280) NOT NULL,
    "authorHandle" VARCHAR(50),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PackingTip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChecklistDownload" (
    "id" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "downloadUrl" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "isCamping" BOOLEAN NOT NULL,
    "isDayTrip" BOOLEAN NOT NULL,
    "isFirstTimer" BOOLEAN NOT NULL,
    "isBudget" BOOLEAN NOT NULL,
    "stripeSessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChecklistDownload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentSetting" (
    "id" TEXT NOT NULL,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PackingTip_eventName_idx" ON "PackingTip"("eventName");

-- CreateIndex
CREATE INDEX "ChecklistDownload_eventName_idx" ON "ChecklistDownload"("eventName");

-- CreateIndex
CREATE INDEX "ChecklistDownload_stripeSessionId_idx" ON "ChecklistDownload"("stripeSessionId");

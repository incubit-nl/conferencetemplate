-- AlterTable
ALTER TABLE "ChecklistDownload" ADD COLUMN     "ai_generated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "query_context" TEXT[];

-- AlterTable
ALTER TABLE "PackingTip" ADD COLUMN     "category" TEXT,
ADD COLUMN     "relevance_score" DOUBLE PRECISION,
ADD COLUMN     "sentiment" TEXT;

-- CreateTable
CREATE TABLE "FestivalInsight" (
    "id" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "insight" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "source" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FestivalInsight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FestivalInsight_eventName_category_idx" ON "FestivalInsight"("eventName", "category");

-- CreateIndex
CREATE INDEX "FestivalInsight_confidence_idx" ON "FestivalInsight"("confidence");

-- CreateIndex
CREATE INDEX "PackingTip_category_sentiment_idx" ON "PackingTip"("category", "sentiment");

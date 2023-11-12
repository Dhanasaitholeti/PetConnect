-- CreateTable
CREATE TABLE "_userfavs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_userfavs_AB_unique" ON "_userfavs"("A", "B");

-- CreateIndex
CREATE INDEX "_userfavs_B_index" ON "_userfavs"("B");

-- AddForeignKey
ALTER TABLE "_userfavs" ADD CONSTRAINT "_userfavs_A_fkey" FOREIGN KEY ("A") REFERENCES "pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userfavs" ADD CONSTRAINT "_userfavs_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
